/** Chương trình đào tạo — từ Authen/GetAllStudyProgramRegist */
export type VluStudyProgram = {
  StudyProgramID: string;
  StudyProgramName: string;
  IsOpen: boolean;
  MapID?: number | null;
  [key: string]: any;
};

/** Loại hình đào tạo — từ Authen/GetAllStudyType */
export type VluStudyType = {
  LoaiHinh: string;
  MapID?: number | null;
  [key: string]: any;
};

/** Cấu hình đợt đăng ký — từ Regist/GetRegistSemesterCreditQuota */
export type VluRegistConfig = {
  RegistAble: boolean;
  isChanDSSVDK?: boolean;
  YearStudy: string;
  TermID: string;
  RandID: string;
  IdDot: string;
  SendOTP?: boolean;
  /** thông tin hạn mức tín chỉ */
  data?: any;
  [key: string]: any;
};

/** Lớp học phần — từ Regist/GetAllScheduleUnitAllowRegist */
export type VluScheduleUnit = {
  CurriculumID: string;
  CurriculumName: string;
  ScheduleStudyUnitAlias: string;
  TypeName: string;
  ListOfClassStudentID: string;
  NumberRegistOfEmpty: number;
  Schedules: string;
  Note: string;
  IsHocTrucTuyen: boolean;
  ParentID: string | null;
  NumberOfChilds: number;
  IsRegisted: boolean;
  StudyUnitID: string;
  ScheduleStudyUnitID: string;
  Credits: number;
  [key: string]: any;
};

/** Lịch học đã được parse từ chuỗi Schedules */
export type VluParsedSchedule = {
  /** "2".."8" (2=Thứ 2, ..., 8=Chủ nhật) */
  Thu: string;
  /** "1,2,3" */
  CaHoc: string;
  /** "1-15" hoặc tương tự */
  TuanHoc: string;
  Phong: string;
  CampusAddress: string;
  IsHocTrucTuyen: boolean;
};

/** Ca học — từ Schedule/GetAllScheduleWeekPerior (nếu có) */
export type VluPeriod = {
  CaHoc?: string | number;
  StartTime?: string;
  EndTime?: string;
  [key: string]: any;
};
