import uniqBy from 'lodash/uniqBy';
import { ClassModel } from 'models';
import { TTrungTkb } from './views/2XepLop/TrungTkbDialog';

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

/**
 * "*": Không lên trường
 * 2-1, 2-2, 2-3: Thứ 2, tiết 1,2,3
 * 7-11, 7-12, 7-13: Thứ 7, tiết 11,12,13
 */
export const getTimeSlots = ({ Thu, Tiet }: ClassModel): '*' | string[] => {
  if (Tiet === '*') return '*';
  return getDanhSachTiet(Tiet).map((tiet) => `${Thu}-${tiet}`);
};

export const isOverlapSchedule = (classA: ClassModel, classB: ClassModel) => {
  const slotsA = getTimeSlots(classA);
  const slotsB = getTimeSlots(classB);
  if (slotsA === '*' || slotsB === '*') return false;
  return slotsA.some((slotA) => slotsB.includes(slotA));
};

// Thường thì MaLop alone is enough because most of the classes only appear once a week or once every 2 weeks, nhưng mà có thể có môn Anh Văn học 1 tuần tới 2 buổi, nên cần có thêm Thu và Tiet
export const getAgGridRowId = (classModel: ClassModel): string => {
  return classModel.MaLop + classModel.Thu + classModel.Tiet;
};

export const constructFinalSelectedClasses = (
  oldSelectedClasses: ClassModel[],
  newSelectedClasses: ClassModel[],
): { finalSelectedClasses: ClassModel[]; overlappedClasses: TTrungTkb[] } => {
  const finalSelectedClasses: ClassModel[] = [];
  const overlappedClasses: TTrungTkb[] = [];

  const findExistingOverlap = (newClass: ClassModel) =>
    finalSelectedClasses.find((existingClass) => isOverlapSchedule(existingClass, newClass));

  const processedAgGridRowIds = new Set<string>();
  oldSelectedClasses.concat(newSelectedClasses).forEach((addingClass) => {
    const agGridRowId = getAgGridRowId(addingClass);
    if (processedAgGridRowIds.has(agGridRowId)) return; // class in newSelectedClasses already handled when traverse oldSelectedClasses

    processedAgGridRowIds.add(agGridRowId);
    const existingClassOverlapped = findExistingOverlap(addingClass);
    if (existingClassOverlapped) {
      overlappedClasses.push({
        existing: existingClassOverlapped,
        new: addingClass,
      });
    } else {
      finalSelectedClasses.push(addingClass);
    }
  });

  return { finalSelectedClasses, overlappedClasses };
};

// TODO: remove
export const isSubjectChosen = (selectedClass: ClassModel, selectingClass: ClassModel) => {
  return (
    selectedClass.MaMH === selectingClass.MaMH &&
    selectedClass.ThucHanh === selectingClass.ThucHanh &&
    selectedClass.MaLop !== selectingClass.MaLop
  );
};

// TODO: remove

// e.g: môn Anh Văn, 1 tuần có thể có 2 buổi nên có 2 dòng record
export function isPairClass(classA: ClassModel, classB: ClassModel) {
  return classA.MaLop === classB.MaLop && classA.STT !== classB.STT;
}

export const isSameAgGridRowId = (class1: ClassModel, class2: ClassModel) => {
  return getAgGridRowId(class1) === getAgGridRowId(class2);
};

export const log = (...args: any[]) => {
  window.__DEBUG__ && console.log(...args);
};
