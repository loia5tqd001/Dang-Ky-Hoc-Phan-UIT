import { VluParsedSchedule } from './types';

/** Chuyển "Thứ 2".."Chủ nhật" thành số ngày 2..8 */
function parseDay(input: string): string | null {
  const s = input.trim().toLowerCase().replace(/\s+/g, ' ');
  if (/ch[úù] nh[ậậ]t|\bcn\b/.test(s)) return '8';
  const thuMatch = s.match(/th[ứú]\s*(\d)/);
  if (thuMatch) {
    const d = parseInt(thuMatch[1], 10);
    if (d >= 2 && d <= 7) return String(d);
    if (d === 1) return '8'; // một số nơi đánh CN = 1
  }
  const numMatch = s.match(/^\s*(\d{1,2})\s*$/);
  if (numMatch) {
    const d = parseInt(numMatch[1], 10);
    if (d >= 2 && d <= 8) return String(d);
  }
  return null;
}

/** Chuyển chuỗi ca như "1,2,3", "1-3", "1, 2 - 4" thành "1,2,3" (chuẩn hoá) */
function normalizeCaHoc(input: string): string | null {
  const s = input.trim();
  if (!s) return null;
  // tách theo dấu phẩy / khoảng trắng / dấu gạch ngang
  const parts: number[] = [];
  const tokens = s.split(/[,;]/);
  for (const token of tokens) {
    const range = token.trim().match(/^(\d{1,2})\s*[-–—]\s*(\d{1,2})$/);
    if (range) {
      const from = parseInt(range[1], 10);
      const to = parseInt(range[2], 10);
      for (let i = Math.min(from, to); i <= Math.max(from, to); i++) parts.push(i);
      continue;
    }
    const num = token.trim().match(/^(\d{1,2})$/);
    if (num) parts.push(parseInt(num[1], 10));
  }
  if (!parts.length) return null;
  return Array.from(new Set(parts))
    .sort((a, b) => a - b)
    .join(',');
}

/**
 * Parse chuỗi "Lịch học" của VLU (có thể là text thuần hoặc HTML) thành
 * danh sách các buổi học { Thu, CaHoc, TuanHoc, Phong, CampusAddress }.
 *
 * Hỗ trợ các dạng:
 *  - "Thứ 2: Ca 1,2,3 - Phòng C0101 - Tuần 1-15; Thứ 4: ..."
 *  - "Thứ 3: 4-6, P.205, Cơ sở 1"
 *  - Bảng HTML: <tr><td>Thứ 2</td><td>1,2,3</td><td>C0101</td></tr>
 */
export function parseSchedules(schedules: string | null | undefined): VluParsedSchedule[] {
  if (!schedules || !schedules.trim()) return [];
  const result: VluParsedSchedule[] = [];
  const text = stripHtml(schedules);

  // Ưu tiên: tách từng buổi theo "Thứ ..." hoặc "Chủ nhật"
  const segmentRegex = /(Th[ứú]\s*\d|Ch[úù]\s*[Nn]h[ậậ]t|\bCN\b)[^;^\n]+/g;
  const segments = text.match(segmentRegex);
  if (segments && segments.length) {
    for (const seg of segments) {
      const parsed = parseSegment(seg);
      if (parsed) result.push(parsed);
    }
  } else {
    // Không tìm thấy từ khóa ngày — coi toàn bộ là một buổi
    const parsed = parseSegment(text);
    if (parsed) result.push(parsed);
  }

  return result;
}

function parseSegment(segment: string): VluParsedSchedule | null {
  const thu = parseDay(segment);
  const isOnline = /tr[ựu]c tuy[\ếe]n|online/i.test(segment);
  if (!thu) return null;

  // Tách ca học: nhãn "ca"/"tiết"/"slot" hoặc dãy số đứng trước phòng
  let caHoc = '';
  const caLabel = segment.match(/(?:Ca|Ti[\ếe]t|Slot|Số tiết|Giờ)\s*[:\-]?\s*([\d,\-–—\s]+)/i);
  if (caLabel) {
    caHoc = normalizeCaHoc(caLabel[1]) ?? '';
  }
  if (!caHoc) {
    // dạng "1,2,3" / "1-3" đứng độc lập đầu câu
    const standalone = segment.match(/(?:^|[\s:(])(\d{1,2}(?:\s*[,;]\s*\d{1,2}|\s*[-–—]\s*\d{1,2})+)/);
    if (standalone) caHoc = normalizeCaHoc(standalone[1]) ?? '';
  }
  if (!caHoc) {
    const single = segment.match(/(?:^|[\s:(])(\d{1,2})(?=\s*(?:Ph|P\.|Cơ sở|Tuần|;|$))/i);
    if (single) caHoc = single[1];
  }

  const tuanMatch = segment.match(/Tu[ầa]n\s*[\d\s,\-–—]+|\b(\d{1,2}\s*[-–—]\s*\d{1,2})\b/);
  const tuanHoc = tuanMatch ? tuanMatch[0].replace(/Tu[ầa]n/i, '').trim() : '';

  const phongMatch = segment.match(/Ph[òo]ng\s*[:.\-]?\s*([A-Za-z]?\d[\w\-\.]*)/i) || segment.match(/P\.\s*([A-Za-z]?\d[\w\-\.]*)/i);
  const phong = phongMatch ? phongMatch[1].trim() : '';

  const campusMatch = segment.match(/Cơ sở\s*(\d|[A-Za-z])/i) || segment.match(/CS\s*(\d|[A-Za-z])/i);
  const campusAddress = campusMatch ? 'Cơ sở ' + campusMatch[1] : '';

  return {
    Thu: thu,
    CaHoc: caHoc,
    TuanHoc: tuanHoc,
    Phong: phong,
    CampusAddress: campusAddress,
    IsHocTrucTuyen: isOnline,
  };
}

function stripHtml(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  // Trường hợp bảng HTML: gộp các ô theo hàng
  const rows = Array.from(div.querySelectorAll('tr'));
  if (rows.length) {
    return rows
      .map((row) =>
        Array.from(row.querySelectorAll('th,td'))
          .map((cell) => cell.textContent?.trim() ?? '')
          .join(' | '),
      )
      .join('; ');
  }
  return div.textContent ?? html.replace(/<[^>]*>/g, ' ');
}
