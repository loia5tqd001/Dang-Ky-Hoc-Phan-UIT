import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useTkbStore } from '../zus';
import './brand.css';

export type VluNavItem = {
  key: string;
  label: string;
  icon?: string;
  path?: string;
  section?: boolean;
  badge?: string;
  onClick?: () => void;
};

type VluLayoutProps = {
  children: React.ReactNode;
};

const BRAND_NAME = 'ĐẠI HỌC VĂN LANG';
const BRAND_SUB = 'Đăng ký học phần';

function VluLayout({ children }: VluLayoutProps) {
  const history = useHistory();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dataTkb = useTkbStore((s) => s.dataExcel);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  const navItems = useMemo<VluNavItem[]>(() => {
    const tongLop = dataTkb?.data?.length ?? 0;
    return [
      { key: 'section-main', label: 'Tổng quan', section: true },
      { key: 'dashboard', label: 'Dashboard', icon: 'bi-grid-1x2-fill', path: '/' },
      { key: 'section-flow', label: 'Quy trình', section: true },
      {
        key: 'step1',
        label: '1. Kết nối dữ liệu',
        icon: 'bi-plug-fill',
        path: ROUTES._1ChonFileExcel.path,
        badge: dataTkb ? `${tongLop} lớp` : undefined,
      },
      {
        key: 'step2',
        label: '2. Xếp lớp',
        icon: 'bi-layout-split',
        path: ROUTES._2XepLop.path,
      },
      {
        key: 'step3',
        label: '3. TKB & Đăng ký',
        icon: 'bi-calendar2-check-fill',
        path: ROUTES._3KetQua.path,
      },
      { key: 'section-help', label: 'Trợ giúp', section: true },
      { key: 'help', label: 'Cổng đăng ký VLU', icon: 'bi-box-arrow-up-right', onClick: () => window.open('https://regist.vlu.edu.vn/', '_blank') },
    ];
  }, [dataTkb]);

  const currentItem = useMemo(() => {
    const path = location.pathname;
    return (
      navItems.find((item) => item.path === path) ||
      navItems.find((item) => item.path === ROUTES._1ChonFileExcel.path)
    );
  }, [location.pathname, navItems]);

  const handleNavClick = useCallback(
    (item: VluNavItem) => {
      if (item.onClick) {
        item.onClick();
        return;
      }
      if (item.path) history.push(item.path);
    },
    [history],
  );

  const pageTitle = currentItem?.label || 'Dashboard';

  return (
    <div className="vlu-app">
      {/* Overlay cho mobile */}
      <div className={`vlu-overlay ${mobileOpen ? 'show' : ''}`} onClick={closeMobile} />

      {/* Sidebar */}
      <aside className={`vlu-sidebar ${mobileOpen ? 'show' : ''}`}>
        <div className="vlu-sidebar-brand">
          <img src={`${process.env.PUBLIC_URL}/logo-vlu.png`} alt="Văn Lang" />
          <div className="vlu-sidebar-brand-text">
            <span className="brand-name">{BRAND_NAME}</span>
            <span className="brand-sub">{BRAND_SUB}</span>
          </div>
        </div>

        <nav className="vlu-sidebar-nav">
          {navItems.map((item) =>
            item.section ? (
              <div key={item.key} className="vlu-nav-section">
                {item.label}
              </div>
            ) : (
              <div key={item.key} className="vlu-nav-item">
                <a
                  className={`vlu-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.icon && <i className={`bi ${item.icon}`} />}
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </a>
              </div>
            ),
          )}
        </nav>

        <div className="vlu-sidebar-footer">
          <div className="d-flex align-items-center gap-2 text-light" style={{ fontSize: '0.8125rem' }}>
            <span className={`status-dot ${dataTkb ? 'online' : 'offline'}`} />
            {dataTkb ? 'Đã kết nối dữ liệu' : 'Chưa có dữ liệu'}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="vlu-main">
        <header className="vlu-topbar">
          <button
            type="button"
            className="vlu-menu-toggle"
            aria-label="Mở menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <i className="bi bi-list" />
          </button>

          <div>
            <div className="vlu-topbar-title">{pageTitle}</div>
            <div className="vlu-topbar-breadcrumb">
              <a href="https://www.vlu.edu.vn/" target="_blank" rel="noreferrer">
                vlu.edu.vn
              </a>
              <span className="mx-1">/</span>
              <span>{pageTitle}</span>
            </div>
          </div>

          <div className="vlu-topbar-right">
            <button type="button" className="vlu-topbar-btn" title="Mở cổng đăng ký VLU" onClick={() => window.open('https://regist.vlu.edu.vn/', '_blank')}>
              <i className="bi bi-box-arrow-up-right" />
            </button>
            <button type="button" className="vlu-topbar-btn" title="Làm mới trang" onClick={() => window.location.reload()}>
              <i className="bi bi-arrow-clockwise" />
            </button>
          </div>
        </header>

        <div className="vlu-content">{children}</div>
      </main>
    </div>
  );
}

export default VluLayout;
