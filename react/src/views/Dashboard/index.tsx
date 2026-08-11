import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useTkbStore } from '../../zus';
import { useVluStore } from '../../vlu/store';
import { calcTongSoTC } from '../../utils';

export default function Dashboard() {
  const history = useHistory();
  const dataExcel = useTkbStore((s) => s.dataExcel);
  const selectedClasses = useTkbStore((s) => s.selectedClasses);
  const vluToken = useVluStore((s) => s.token);
  const vluUnits = useVluStore((s) => s.units);
  const registConfig = useVluStore((s) => s.registConfig);

  const tongLop = dataExcel?.data?.length ?? 0;
  const tongLopDaChon = selectedClasses.length;
  const tongSoTc = useMemo(() => calcTongSoTC(selectedClasses), [selectedClasses]);
  const daKetNoi = !!dataExcel;

  const quickActions = [
    {
      icon: 'bi-plug-fill',
      title: 'Kết nối dữ liệu',
      desc: daKetNoi ? `${tongLop} lớp học phần đã tải` : 'Nhập token & tải danh sách lớp',
      path: ROUTES._1ChonFileExcel.path,
    },
    {
      icon: 'bi-layout-split',
      title: 'Xếp lớp',
      desc: tongLopDaChon ? `Đã chọn ${tongLopDaChon} lớp` : 'Chọn lớp không trùng lịch',
      path: ROUTES._2XepLop.path,
    },
    {
      icon: 'bi-calendar2-check-fill',
      title: 'TKB & Đăng ký',
      desc: 'Xem thời khóa biểu & đăng ký học phần',
      path: ROUTES._3KetQua.path,
    },
  ];

  return (
    <div className="container-fluid px-0">
      {/* Hero */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 animate-in">
        <div>
          <h1 className="display-heading mb-1">
            Xin chào, sinh viên Văn Lang <i className="bi bi-hand-thumbs-up text-brand" style={{ fontSize: '1.75rem', verticalAlign: 'middle' }} />
          </h1>
          <p className="text-muted-custom mb-0" style={{ maxWidth: 560 }}>
            Xếp lịch học thông minh, phát hiện trùng lịch và đăng ký học phần trực tiếp qua API của trường.
          </p>
        </div>
        <div className="d-flex gap-2">
          {registConfig && (
            <div className="d-flex align-items-center gap-2 px-3 py-2 bg-white border rounded-3" style={{ fontSize: '0.875rem' }}>
              <span className={`status-dot ${registConfig.RegistAble ? 'online' : 'warning'}`} />
              <span className="fw-semibold">
                {registConfig.RegistAble ? 'Đang mở đăng ký' : 'Chưa mở đăng ký'}
              </span>
              <span className="text-muted-custom">
                {registConfig.YearStudy} · HK{registConfig.TermID}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-3 animate-in animate-delay-1">
          <div className="dash-card">
            <div className="dash-stat">
              <div className="dash-stat-icon blue">
                <i className="bi bi-collection-fill" />
              </div>
              <div>
                <div className="dash-stat-value">{tongLop}</div>
                <div className="dash-stat-label">Lớp học phần</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 animate-in animate-delay-2">
          <div className="dash-card">
            <div className="dash-stat">
              <div className="dash-stat-icon green">
                <i className="bi bi-check2-circle" />
              </div>
              <div>
                <div className="dash-stat-value">{tongLopDaChon}</div>
                <div className="dash-stat-label">Lớp đã chọn</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 animate-in animate-delay-3">
          <div className="dash-card">
            <div className="dash-stat">
              <div className="dash-stat-icon red">
                <i className="bi bi-bookmark-star-fill" />
              </div>
              <div>
                <div className="dash-stat-value">{tongSoTc}</div>
                <div className="dash-stat-label">Tín chỉ đã chọn</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3 animate-in animate-delay-4">
          <div className="dash-card">
            <div className="dash-stat">
              <div className="dash-stat-icon amber">
                <i className="bi bi-lightning-charge-fill" />
              </div>
              <div>
                <div className="dash-stat-value">{vluUnits.length}</div>
                <div className="dash-stat-label">Lớp từ API</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Quick actions */}
        <div className="col-lg-8">
          <div className="card-vlu animate-in animate-delay-2">
            <h5 className="section-title d-flex align-items-center gap-2">
              <i className="bi bi-rocket-takeoff-fill text-brand" /> Bắt đầu nhanh
            </h5>
            <div className="row g-3">
              {quickActions.map((action) => (
                <div key={action.title} className="col-md-4">
                  <a className="quick-action h-100 d-flex" onClick={() => history.push(action.path)}>
                    <div className="quick-action-icon">
                      <i className={`bi ${action.icon}`} />
                    </div>
                    <div className="quick-action-text">
                      <h6>{action.title}</h6>
                      <p>{action.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* How to get token */}
          <div className="card-vlu mt-4 animate-in animate-delay-3">
            <h5 className="section-title d-flex align-items-center gap-2">
              <i className="bi bi-key-fill text-brand" /> Cách lấy token
            </h5>
            <ol className="mb-0" style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.9 }}>
              <li>
                Đăng nhập{' '}
                <a href="https://regist.vlu.edu.vn/" target="_blank" rel="noreferrer" className="text-brand fw-semibold">
                  regist.vlu.edu.vn
                </a>{' '}
                bằng tài khoản sinh viên.
              </li>
              <li>
                Bấm <kbd className="bg-light text-dark border">F12</kbd> → chọn tab{' '}
                <span className="fw-semibold">Console</span>.
              </li>
              <li>
                Dán lệnh:{' '}
                <code className="d-inline-block bg-light px-2 py-1 rounded" style={{ fontSize: '0.8125rem' }}>
                  JSON.parse(localStorage.getItem('authorizationData')).Token
                </code>
              </li>
              <li>Copy chuỗi token và dán vào ô "Bearer Token" ở Bước 1.</li>
            </ol>
          </div>
        </div>

        {/* Right column: state */}
        <div className="col-lg-4">
          <div className="card-vlu animate-in animate-delay-3">
            <h5 className="section-title d-flex align-items-center gap-2">
              <i className="bi bi-activity text-brand" /> Trạng thái
            </h5>

            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className={`status-dot ${vluToken ? 'online' : 'offline'}`} />
                  <span className="fw-semibold" style={{ fontSize: '0.875rem' }}>
                    Token
                  </span>
                </div>
                <span className="badge text-bg-light">{vluToken ? 'Đã nhập' : 'Chưa có'}</span>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className={`status-dot ${daKetNoi ? 'online' : 'offline'}`} />
                  <span className="fw-semibold" style={{ fontSize: '0.875rem' }}>
                    Dữ liệu lớp
                  </span>
                </div>
                <span className="badge text-bg-light">{daKetNoi ? `${tongLop} lớp` : 'Trống'}</span>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <span className={`status-dot ${tongLopDaChon ? 'online' : 'offline'}`} />
                  <span className="fw-semibold" style={{ fontSize: '0.875rem' }}>
                    Lớp đã chọn
                  </span>
                </div>
                <span className="badge text-bg-light">{tongLopDaChon}</span>
              </div>

              {daKetNoi && (
                <>
                  <div className="mt-2">
                    <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.8125rem' }}>
                      <span className="text-muted-custom">Tiến độ chọn lớp</span>
                      <span className="fw-semibold">{tongLopDaChon}/{tongLop}</span>
                    </div>
                    <div className="progress progress-vlu">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${tongLop ? Math.min(100, (tongLopDaChon / tongLop) * 100) : 0}%` }}
                      />
                    </div>
                  </div>

                  <button type="button" className="btn btn-vlu w-100 mt-2" onClick={() => history.push(ROUTES._2XepLop.path)}>
                    <i className="bi bi-arrow-right-circle me-2" />
                    Tiếp tục xếp lớp
                  </button>
                </>
              )}

              {!daKetNoi && (
                <button type="button" className="btn btn-vlu w-100" onClick={() => history.push(ROUTES._1ChonFileExcel.path)}>
                  <i className="bi bi-plug-fill me-2" />
                  Kết nối dữ liệu ngay
                </button>
              )}
            </div>
          </div>

          <div className="card-vlu mt-4 animate-in animate-delay-4">
            <h5 className="section-title d-flex align-items-center gap-2">
              <i className="bi bi-info-circle-fill text-brand" /> Lưu ý
            </h5>
            <ul className="mb-0" style={{ fontSize: '0.8125rem', color: 'var(--vlu-text-muted)', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              <li>Token chỉ lưu trên trình duyệt của bạn, không gửi đi đâu.</li>
              <li>Đăng ký qua API cần mã OTP gửi về email.</li>
              <li>Kiểm tra kỹ lịch học trước khi đăng ký.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
