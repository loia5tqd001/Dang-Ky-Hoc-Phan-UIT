/* eslint-disable */
import React from 'react';

import './Đăng ký học phần _ Đăng ký học phần_files/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.scss';
import './Đăng ký học phần _ Đăng ký học phần_files/css_sgDNJ8vntgq199xFefXntxvMEgeV72TK9yh3jcbpo7o.scss';
import './Đăng ký học phần _ Đăng ký học phần_files/css_26kxSyvZjerOSqAkUX3FtGUqVOtSu24j5nXzVnaGZiE.scss';
import './Đăng ký học phần _ Đăng ký học phần_files/css_VEWBnUTE7iJ_dX91eEZnezhP1oqFIck1q0IRJcu1w4A.scss';
import './Đăng ký học phần _ Đăng ký học phần_files/css_nTr55mbZYlMSsBXnLjRgu7jXCLkPIwg_iGLiIvrYokQ.scss';
import './Đăng ký học phần _ Đăng ký học phần_files/custom.css';
import banner from './Đăng ký học phần _ Đăng ký học phần_files/banner.jpg';

import lopThuongMainHtml from './lopThuongMainHtml';
import lopAnhVanMainHtml from './lopAnhVanMainHtml';

function Index() {
  const [currentPage, setCurrentPage] = React.useState('thuong'); // thuong | anh-van
  const currentMainHtml = React.useMemo(() => {
    return (currentPage === 'thuong' ? lopThuongMainHtml : lopAnhVanMainHtml)
      .replace(/onclick=".*"/g, `onclick="return false"`)
      .replace(/type="submit"/g, `type="button"`)
      .replace(/href=".*"/g, `href="javascript:"`);
  }, [currentPage]);

  return (
    <div className="giao-dien-dkhp">
      <h2 style={{ textAlign: 'center', color: 'red' }}>
        Đây là trang chỉ có chức năng giúp các bạn làm quen với giao diện ĐKHP của trường!!!
      </h2>
      <a className="element-invisible element-focusable">Skip to content</a>
      <a
        className="element-invisible element-focusable"
        data-target=".nav-collapse"
        data-toggle="collapse"
      >
        Skip to navigation
      </a>
      <div id="header" className="clearfix header" role="banner">
        <div className="container">
          <div className="row">
            <div className="header-section span12">
              <div id="logo" className="site-logo">
                <a title="Home" rel="home" style={{ border: 'none' }}>
                  <img src={banner} alt="" role="presentation" />
                </a>
              </div>
              {/* /#logo */}
              <div id="site" className="hide">
                <div id="name">
                  <a>Đăng ký học phần</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-menu" className="clearfix site-main-menu">
        <div className="container">
          <div className="navbar">
            <div className="navbar-inner">
              <button
                aria-label="Navigation menu"
                className="btn btn-navbar collapsed"
                data-toggle="collapse"
                data-target=".nav-collapse"
              >
                <span className="hide">Navigation menu</span> <span className="icon-bar" />
                <span className="icon-bar" /> <span className="icon-bar" />
              </button>
              <div className="nav-collapse collapse">
                <nav id="main-nav" role="navigation">
                  <ul className="menu nav">
                    <li className="first leaf">
                      <a>Home</a>
                    </li>
                    <li className={currentPage === 'thuong' ? 'leaf active-trail active' : 'leaf'}>
                      <a
                        className={currentPage === 'thuong' ? 'active-trail active' : ''}
                        onClick={() => setCurrentPage('thuong')}
                      >
                        Đăng ký HP
                      </a>
                    </li>
                    <li className={currentPage === 'anh-van' ? 'leaf active-trail active' : 'leaf'}>
                      <a
                        className={currentPage === 'anh-van' ? 'active-trail active' : ''}
                        onClick={() => setCurrentPage('anh-van')}
                      >
                        ĐK Hoc phần Anh Văn
                      </a>
                    </li>
                    <li className="expanded dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" data-target="#">
                        Hiệu chỉnh ĐKHP <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="first leaf">
                          <a>Danh sách</a>
                        </li>
                        <li className="last leaf">
                          <a>Đăng ký</a>
                        </li>
                      </ul>
                    </li>
                    <li className="last leaf">
                      <a>Thoát</a>
                    </li>
                  </ul>
                  {/* /#primary-menu */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN */}
      <div
        id="main"
        className="clearfix main"
        role="main"
        dangerouslySetInnerHTML={{ __html: currentMainHtml }}
      />

      {/* /#main, /#main-wrapper */}
      <div id="footer" className="clearfix site-footer" role="contentinfo">
        <div className="container">
          <div id="footer-content" className="row-fluid footer-content">
            <div className="region region-footer clearfix">
              <div id="block-block-1" className="clearfix block block-block">
                <h2>Footer</h2>
                <div className="content">
                  <p className="rtecenter">
                    <span style={{ fontSize: '16px' }}>
                      <span style={{ fontFamily: 'tahoma,geneva,sans-serif' }}>
                        <strong>PHÒNG ĐÀO TẠO ĐẠI HỌC</strong>
                      </span>
                    </span>
                    <br />
                    Phòng A102, Trường Đại học Công nghệ Thông tin.
                    <br />
                    Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.Hồ Chí Minh.
                    <br />
                    Điện thoại: <strong>(08) 372 51993, Ext: 113</strong>(Hệ từ xa qua mạng),
                    <strong>112</strong>(Hệ chính quy).
                    <br />
                    Email:
                    <strong>
                      <a>phongdaotaodh@uit.edu.vn</a>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            {/* /.region */}
          </div>
        </div>
      </div>
      {/* /#footer */}
    </div>
  );
}

export default Index;
