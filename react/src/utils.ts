import partition from 'lodash/partition';
import uniqBy from 'lodash/uniqBy';
import { ClassModel } from 'models';

export function uniqMaLop(classes: ClassModel[]) {
  return uniqBy(classes, 'MaLop'); // Có nhiều lớp học nhiều buổi 1 tuần, xuất hiện nhiều lần, nhưng chỉ nên cộng 1 lần
}

export function calcTongSoTC(classes: ClassModel[]) {
  const unique = uniqMaLop(classes);
  return unique.reduce((acc, cur) => acc + cur.SoTc, 0);
}

export function getTongSoTcJudgement(tongSoTC: number) {
  const text =
    tongSoTC < 14
      ? 'Chưa đạt số TC quy định: 14'
      : tongSoTC > 24
      ? 'Vượt quá số TC quy định: 24'
      : 'Thỏa mãn số TC quy định 14-24';
  const isOk = tongSoTC >= 14 && tongSoTC <= 24;
  return {
    isOk,
    text,
  };
}

export function extractListMaLop(classes: ClassModel[]) {
  const unique = uniqMaLop(classes);
  return unique.map((it) => it.MaLop);
}

export function isChungMon(classA: ClassModel, classB: ClassModel, distinguishThucHanh = true) {
  if (distinguishThucHanh === false) {
    return classA.MaMH === classB.MaMH;
  }
  return classA.MaMH === classB.MaMH && classA.ThucHanh === classB.ThucHanh;
}

export function isPairClass(classA: ClassModel, classB: ClassModel) {
  return classA.STT !== classB.STT && classA.MaLop === classB.MaLop;
}

export function phanLoaiAV(classes: ClassModel[]) {
  const [lopAv, lopThuong] = partition(classes, (it) => it.MaLop.startsWith('EN'));
  return { lopAv, lopThuong };
}

export const getBuoiFromTiet = (tiet: ClassModel['Tiet']): ClassModel['Buoi'] => {
  if (tiet.includes('11')) return 'Tối 🌚';
  if (/1|2|3|4|5/g.test(tiet)) return 'Sáng ☀️';
  if (/6|7|8|9|0/g.test(tiet)) return 'Chiều 🌞'; // TODO: ve TKB buoc 3 co buoi toi
  return '*';
};

export const getDanhSachTiet = (tiet: ClassModel['Tiet']): string[] => {
  if (tiet.includes(',')) return tiet.split(',');
  if (tiet === '*') return ['*'];
  return tiet.split('');
};
