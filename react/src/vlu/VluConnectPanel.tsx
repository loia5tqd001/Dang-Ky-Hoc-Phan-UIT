import React, { useState, useCallback } from 'react';
import { Alert, Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Typography, CircularProgress, Tooltip } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { vluApi, VluApiError } from './api';
import { VluRegistConfig, VluScheduleUnit, VluStudyProgram } from './types';
import { parseSchedules } from './parse';
import { VLU_TC_RANGE } from './config';
import { useVluStore } from './store';
import { ClassModelOriginal } from '../types';
import { useTkbStore } from '../zus';
import { toDateTimeString } from '../views/1ChonFileExcel/utils';

type Step = 'token' | 'programs' | 'units' | 'done';

export default function VluConnectPanel() {
  const setDataExcel = useTkbStore((s) => s.setDataExcel);
  const vluStore = useVluStore();
  const [token, setToken] = useState(() => vluStore.token || localStorage.getItem('vlu_token') || '');
  const [step, setStep] = useState<Step>(vluStore.token ? 'programs' : 'token');
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState<VluStudyProgram[]>([]);
  const [selectedProgramId, setSelectedProgramId] = useState('');
  const [selectedProgramName, setSelectedProgramName] = useState('');
  const [config, setConfig] = useState<VluRegistConfig | null>(null);
  const [units, setUnits] = useState<VluScheduleUnit[]>([]);
  const [tokenValid, setTokenValid] = useState(!!vluStore.token);

  const handleConnect = useCallback(async () => {
    if (!token.trim()) {
      enqueueSnackbar('Vui lòng nhập token', { variant: 'warning' });
      return;
    }
    setLoading(true);
    try {
      await vluApi.getConfigStudent(token.trim());
      const configs = await vluApi.getStudyPrograms(token.trim());
      setPrograms(configs);
      setTokenValid(true);
      vluStore.setToken(token.trim());
      setStep('programs');
      enqueueSnackbar('Kết nối thành công!', { variant: 'success' });
    } catch (err) {
      if (err instanceof VluApiError) {
        enqueueSnackbar(err.message, { variant: 'error' });
        if (err.status === 401) setTokenValid(false);
      } else {
        enqueueSnackbar('Lỗi kết nối.', { variant: 'error' });
      }
      setTokenValid(false);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const handleSelectProgram = useCallback(
    async (studyProgramId: string) => {
      const prog = programs.find((p) => p.StudyProgramID === studyProgramId);
      setSelectedProgramId(studyProgramId);
      setSelectedProgramName(prog?.StudyProgramName || '');
      setLoading(true);
      try {
        const cfg = await vluApi.getRegistConfig(token.trim(), studyProgramId);
        setConfig(cfg);
        vluStore.setStudyProgram(studyProgramId, prog?.StudyProgramName || '');
        vluStore.setRegistConfig(cfg);
      } catch (err) {
        enqueueSnackbar(err instanceof VluApiError ? err.message : 'Lỗi lấy thông tin đợt đăng ký.', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [token, programs],
  );

  const handleLoadUnits = useCallback(async () => {
    if (!selectedProgramId || !config) return;
    setLoading(true);
    try {
      const data = await vluApi.getScheduleUnits(token.trim(), {
        ReqParam1: selectedProgramId,
        ReqParam2: '',
        ReqParam3: null,
        ReqParam4: config?.IsRegistClassStudent?.toString() ?? 'true',
      });
      setUnits(data);
      vluStore.setUnits(data);
      setStep('units');
      enqueueSnackbar(`Đã tải ${data.length} lớp học phần.`, { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err instanceof VluApiError ? err.message : 'Lỗi tải danh sách lớp.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  }, [token, selectedProgramId, config]);

  const handleUseUnits = useCallback(() => {
    const converted: ClassModelOriginal[] = [];
    let stt = 1;
    for (const unit of units) {
      const schedules = parseSchedules(unit.Schedules);
      if (schedules.length === 0) {
        converted.push({
          STT: stt++,
          MaMH: unit.CurriculumID,
          MaLop: unit.ScheduleStudyUnitAlias,
          TenMH: unit.CurriculumName,
          TenGV: '',
          MaGV: undefined,
          SiSo: String(unit.NumberRegistOfEmpty),
          PhongHoc: undefined,
          SoTc: unit.Credits || 0,
          ThucHanh: 0,
          HTGD: unit.TypeName || 'LT',
          Thu: '*',
          Tiet: '*',
          CachTuan: '',
          KhoaHoc: '',
          HocKy: config?.TermID || '',
          NamHoc: config?.YearStudy || '',
          HeDT: '',
          KhoaQL: '',
          NBD: unit.BeginDate || '',
          NKT: unit.EndDate || '',
          GhiChu: unit.Note || '',
          NgonNgu: '',
        } as any);
        continue;
      }
      for (const sch of schedules) {
        converted.push({
          STT: stt,
          MaMH: unit.CurriculumID,
          MaLop: unit.ScheduleStudyUnitAlias,
          TenMH: unit.CurriculumName,
          TenGV: '',
          MaGV: undefined,
          SiSo: String(unit.NumberRegistOfEmpty),
          PhongHoc: sch.Phong || undefined,
          SoTc: unit.Credits || 0,
          ThucHanh: 0,
          HTGD: unit.TypeName || 'LT',
          Thu: sch.Thu,
          Tiet: sch.CaHoc || '*',
          CachTuan: sch.TuanHoc,
          KhoaHoc: '',
          HocKy: config?.TermID || '',
          NamHoc: config?.YearStudy || '',
          HeDT: '',
          KhoaQL: '',
          NBD: unit.BeginDate || '',
          NKT: unit.EndDate || '',
          GhiChu: unit.Note || '',
          NgonNgu: sch.CampusAddress,
        } as any);
      }
      stt++;
    }

    setDataExcel({
      data: converted,
      fileName: `VLU - ${config?.YearStudy || ''} ${config?.TermID || ''} - ${new Date().toLocaleString()}`,
      lastUpdateTimestamp: Date.now(),
      lastUpdate: toDateTimeString(new Date()),
    });

    enqueueSnackbar(`Đã tải ${converted.length} dòng dữ liệu vào grid.`, { variant: 'success' });
    setStep('done');
  }, [units, config, setDataExcel]);

  return (
    <Box sx={{ mb: 2, p: 2, border: '1px dashed #ccc', borderRadius: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: '#08376D' }}>
        Kết nối API VLU (thay vì upload Excel)
      </Typography>

      <Alert severity="info" sx={{ mb: 2 }}>
        Đăng nhập <a href="https://regist.vlu.edu.vn" target="_blank" rel="noopener noreferrer">regist.vlu.edu.vn</a> →{' '}
        F12 Console → dán{' '}
        <code>JSON.parse(localStorage.getItem('authorizationData')).Token</code> và copy kết quả.
      </Alert>

      <Box display="flex" gap={1} alignItems="center" sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="Bearer Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          fullWidth
          type="password"
        />
        <Tooltip title="Kết nối và lấy danh sách chương trình đào tạo">
          <Button variant="contained" onClick={handleConnect} disabled={loading || !token.trim()}>
            {loading && step === 'token' ? <CircularProgress size={20} /> : 'Kết nối'}
          </Button>
        </Tooltip>
      </Box>

      {step !== 'token' && (
        <Alert severity={tokenValid ? 'success' : 'error'} sx={{ mb: 2 }}>
          {tokenValid ? 'Đã kết nối VLU thành công!' : 'Kết nối thất bại.'}
        </Alert>
      )}

      {step === 'programs' && (
        <Box sx={{ mb: 2 }}>
          <FormControl size="small" fullWidth sx={{ mb: 1 }}>
            <InputLabel>Chương trình đào tạo</InputLabel>
            <Select
              value={selectedProgramId}
              label="Chương trình đào tạo"
              onChange={(e) => handleSelectProgram(e.target.value)}
            >
              {programs.map((p) => (
                <MenuItem key={p.StudyProgramID} value={p.StudyProgramID}>
                  {p.StudyProgramName} {p.IsOpen ? '(ĐANG MỞ)' : ''}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {config && (
            <Alert severity={config.RegistAble ? 'info' : 'warning'} sx={{ mb: 1 }}>
              Đợt: {config.YearStudy} - HK{config.TermID} | {config.RegistAble ? 'Đang mở đăng ký' : 'Chưa mở'}
              {config.data && (
                <> | TC yêu cầu: {VLU_TC_RANGE.min}-{VLU_TC_RANGE.max}</>
              )}
            </Alert>
          )}

          {selectedProgramId && (
            <Button variant="contained" onClick={handleLoadUnits} disabled={loading || !config}>
              {loading ? <CircularProgress size={20} /> : 'Tải danh sách lớp học phần'}
            </Button>
          )}
        </Box>
      )}

      {step === 'units' && (
        <Box sx={{ mb: 2 }}>
          <Alert severity="success" sx={{ mb: 1 }}>
            Đã tải {units.length} lớp học phần. Nhấn nút bên dưới để đưa dữ liệu vào grid.
          </Alert>
          <Button variant="contained" color="success" onClick={handleUseUnits}>
            Sử dụng dữ liệu ({units.length} lớp)
          </Button>
        </Box>
      )}

      {step === 'done' && (
        <Alert severity="success">
          Đã đưa dữ liệu VLU vào grid thành công! Chuyển sang bước 2 để xếp lớp.
        </Alert>
      )}
    </Box>
  );
}
