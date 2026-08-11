import { VLU_API } from './config';
import { VluPeriod, VluRegistConfig, VluScheduleUnit, VluStudyProgram, VluStudyType } from './types';

export class VluApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'VluApiError';
    this.status = status;
  }
}

type FetchOptions = {
  method?: 'GET' | 'POST';
  body?: unknown;
};

async function vluFetch<T>(token: string, path: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', body } = options;
  let res: Response;
  try {
    res = await fetch(VLU_API.baseURL + path, {
      method,
      headers: {
        'content-type': 'application/json',
        apiKey: VLU_API.apiKey,
        clientId: VLU_API.clientId,
        Authorization: 'Bearer ' + token,
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch (err) {
    throw new VluApiError('Không thể kết nối tới máy chủ VLU. Kiểm tra mạng và thử lại.', 0);
  }

  if (res.status === 401) {
    throw new VluApiError('Token không hợp lệ hoặc đã hết hạn. Đăng nhập lại regist.vlu.edu.vn để lấy token mới.', 401);
  }
  if (res.status === 429) {
    throw new VluApiError('Bạn thao tác quá nhanh, vui lòng thử lại sau vài giây.', 429);
  }
  if (!res.ok) {
    let message = `Lỗi máy chủ (HTTP ${res.status})`;
    try {
      const json = await res.json();
      message = json?.message || json?.data?.message || message;
    } catch {
      /* ignore */
    }
    throw new VluApiError(message, res.status);
  }

  const json = await res.json().catch(() => null);
  // API bọc kết quả trong { data: ... } — unwrap như interceptor của portal
  return json && typeof json === 'object' && 'data' in json ? json.data : json;
}

export const vluApi = {
  getStudyPrograms: (token: string) =>
    vluFetch<VluStudyProgram[]>(token, 'Authen/GetAllStudyProgramRegist'),

  getStudyTypes: (token: string) =>
    vluFetch<VluStudyType[]>(token, 'Authen/GetAllStudyType'),

  getRegistConfig: (token: string, studyProgramId: string) =>
    vluFetch<VluRegistConfig>(token, `Regist/GetRegistSemesterCreditQuota?StudyProgramID=${studyProgramId}`),

  getScheduleUnits: (
    token: string,
    req: { ReqParam1: string; ReqParam2: string; ReqParam3: string | null; ReqParam4: string },
  ) => vluFetch<VluScheduleUnit[]>(token, 'Regist/GetAllScheduleUnitAllowRegist', { method: 'POST', body: req }),

  checkExitsRegist: (token: string, units: unknown[], studyProgramId: string) =>
    vluFetch<{ IsConflict: boolean; IsFull: boolean; Message: string }>(
      token,
      `Regist/CheckExitsRegist?StudyProgramID=${studyProgramId}`,
      { method: 'POST', body: units },
    ),

  regist: (
    token: string,
    units: unknown[],
    turnId: string,
    action: 'REGIST' | 'CHANGE',
    studyProgramId: string,
    otpCode: string,
    otpType: string,
  ) =>
    vluFetch<string>(
      token,
      `Regist/RegistScheduleStudyUnit?TurnID=${turnId}&Action=${action}&StudyProgramID=${studyProgramId}&OtpCode=${otpCode}&OtpType=${otpType}`,
      { method: 'POST', body: units },
    ),

  remove: (token: string, units: unknown[], turnId: string, studyProgramId: string, otpCode: string, otpType: string) =>
    vluFetch<string>(
      token,
      `Regist/RemoveScheduleStudyUnit?TurnID=${turnId}&StudyProgramID=${studyProgramId}&OtpCode=${otpCode}&OtpType=${otpType}`,
      { method: 'POST', body: units },
    ),

  sendOtp: (token: string, req: unknown) => vluFetch<string>(token, 'Otp/sendOtpByUser', { method: 'POST', body: req }),

  getPeriods: (token: string, req: unknown) =>
    vluFetch<VluPeriod[]>(token, 'Schedule/GetAllScheduleWeekPerior', { method: 'POST', body: req }),

  getConfigStudent: (token: string) => vluFetch(token, 'authenticate/GetConfigStudent'),
};
