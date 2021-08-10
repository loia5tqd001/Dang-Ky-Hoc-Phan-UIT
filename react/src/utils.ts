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
