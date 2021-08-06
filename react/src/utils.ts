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

export function extractListMaLop(classes: ClassModel[]) {
  const unique = uniqMaLop(classes);
  return unique.map((it) => it.MaLop);
}

export function isMonChung(lop: ClassModel) {
  return /^(SS0|PE00)/g.test(lop.MaMH) && lop.MaMH !== 'SS004'; // Kỹ năng nghề nghiệp (SS004) không phải là môn học chung
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

export function renderRowHtmlStep4(lop: ClassModel) {
  return `<td>
  <div class="form-item form-type-checkbox form-item-table-lophoc-${lop.MaLop}">
    <input type="checkbox" id="edit-table-lophoc-${lop.MaLop.replace('.', '').toLowerCase()}" name="table_lophoc[${
    lop.MaLop
  }]" value="${lop.MaLop}"
      class="form-checkbox">
  </div>
</td>
<td>${lop.MaMH}</td>
<td ${lop.ThucHanh ? 'style="color:#ff8040"' : ''}>${lop.MaLop}</td>
<td>${lop.TenMH}${(() => {
    if (lop.HTGD === 'HT1') return ' (HT1 - Học cách <strong>2</strong> tuần)';
    if (lop.HTGD === 'HT2') return ' (HT2)';
    return '';
  })()}</td>
<td>${lop.KhoaQL}</td>
<td>${lop.SoTc}</td>
<td>Thứ ${lop.Thu}, Tiết ${lop.Tiet}, ${lop.PhongHoc || ''}<br></td>
<td>${lop.TenGV || ''} - ${lop.MaGV || ''}</td>
<td>${lop.SiSo}</td>
<td>0</td>
<td>${lop.NgonNgu}</td>`;
}

// export function renderRowHtmlStep4(lop: ClassModel) {
//   return `                                  <td>
//                                     <div class="form-item form-type-checkbox form-item-table-lophoc-CE005.L11">
//                                       <input type="checkbox" id="edit-table-lophoc-ce005l11"
//                                         name="table_lophoc[CE005.L11]" value="CE005.L11" class="form-checkbox">
//                                     </div>
//                                   </td>
//                                   <td>CE005</td>
//                                   <td>CE005.L11</td>
//                                   <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Kỹ Thuật Máy tính</td>
//                                   <td>KTMT</td>
//                                   <td>1</td>
//                                   <td>Thứ 2, Tiết 123, P.C308<br></td>
//                                   <td>Đoàn Duy - 80447</td>
//                                   <td>100</td>
//                                   <td>1</td>
//                                   <td>VN</td>`;
// }
