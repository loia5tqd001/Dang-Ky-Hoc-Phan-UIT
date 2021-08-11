import { ClassModel } from 'models';
import React from 'react';
import captchaImage from 'assets/img/image_captcha.jpg';
import { Row } from './Row';

type Props = {
  classes: ClassModel[];
};

export const LopThuong: React.FC<Props> = (props) => {
  const { classes } = props;

  return (
    <div className="container">
      <div id="main-content" className="row main-content">
        <div id="content" className="mc-content span12">
          <div id="content-wrapper" className="content-wrapper">
            <div id="content-head" className="row-fluid content-head">
              <h1 className="title" id="page-title">
                {' '}
                Đăng ký Học phần{' '}
              </h1>
            </div>
            <div id="content-body" className="row-fluid content-body">
              <div className="region region-content clearfix">
                <div id="form-register-wrapper">
                  <div id="block-system-main" className="clearfix block block-system">
                    <div className="content">
                      <form
                        action="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky"
                        method="post"
                        id="uit-dkhp-dangky-form"
                        acceptCharset="UTF-8"
                      >
                        <div>
                          <h1 style={{ color: '#0000ff', textAlign: 'center' }}>
                            ĐĂNG KÝ HỌC PHẦN HỌC KỲ 1 NĂM HỌC 2020
                          </h1>
                          <br />
                          Tên sinh viên:{' '}
                          <em>
                            <strong>Nguyễn Văn Diu Ai Ti</strong>
                          </em>
                          <br />
                          Mã sinh viên:{' '}
                          <em>
                            <strong>17526969</strong>
                          </em>
                          <br />
                          Ngày sinh: 31-02-1999 <br />
                          Giới tính: Nam <br />
                          Khoa : CNPM
                          <br />
                          <fieldset
                            className="collapsible collapsed form-wrapper collapse-processed"
                            id="edit-lopdadangky"
                          >
                            <legend>
                              <span className="fieldset-legend">
                                <a className="fieldset-title">
                                  <span className="fieldset-legend-prefix element-invisible">Show</span> Lớp đã đăng ký
                                </a>
                                <span className="summary" />
                              </span>
                            </legend>
                            <div className="fieldset-wrapper">
                              <h3 style={{ color: '#0000ff', textAlign: 'center' }}>DANH SÁCH LỚP HỌC ĐÃ ĐĂNG KÝ</h3>
                              <div className="table_lophoc_dadk_wrapper" id="table_lophoc_dadk_wrapper">
                                <table
                                  className="sticky-header"
                                  style={{ position: 'fixed', top: '0px', left: '0px', visibility: 'hidden' }}
                                >
                                  <thead style={{}}>
                                    <tr>
                                      <th className="select-all">
                                        <input
                                          type="checkbox"
                                          className="form-checkbox"
                                          title="Select all rows in this table"
                                        />
                                      </th>
                                      <th>MãMH</th>
                                      <th>Lớp</th>
                                      <th>Tên MH</th>
                                      <th>KhoaQL</th>
                                      <th>SốTC</th>
                                      <th>&nbsp;&nbsp;GViên</th>
                                      <th>Thứ / Tiết / Phòng</th>
                                      <th>SS</th>
                                      <th>ĐãĐK</th>
                                      <th>NN</th>
                                    </tr>
                                  </thead>
                                </table>
                                <table className="sticky-enabled table-select-processed tableheader-processed sticky-table">
                                  <thead>
                                    <tr>
                                      <th className="select-all">
                                        <input
                                          type="checkbox"
                                          className="form-checkbox"
                                          title="Select all rows in this table"
                                        />
                                      </th>
                                      <th>MãMH</th>
                                      <th>Lớp</th>
                                      <th>Tên MH</th>
                                      <th>KhoaQL</th>
                                      <th>SốTC</th>
                                      <th>&nbsp;&nbsp;GViên</th>
                                      <th>Thứ / Tiết / Phòng</th>
                                      <th>SS</th>
                                      <th>ĐãĐK</th>
                                      <th>NN</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="odd">
                                      <td>
                                        <div className="form-item form-type-checkbox form-item-table-lophoc-dadk-IS207.L11">
                                          <input
                                            type="checkbox"
                                            id="edit-table-lophoc-dadk-is207l11"
                                            name="table_lophoc_dadk[IS207.L11]"
                                            defaultValue="IS207.L11"
                                            className="form-checkbox"
                                          />
                                        </div>
                                      </td>
                                      <td>IS207</td>
                                      <td>IS207.L11</td>
                                      <td>Phát triển ứng dụng web</td>
                                      <td>HTTT</td>
                                      <td>3</td>
                                      <td />
                                      <td />
                                      <td>50</td>
                                      <td>50</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr className="even">
                                      <td>
                                        <div className="form-item form-type-checkbox form-item-table-lophoc-dadk-IS207.L11.1">
                                          <input
                                            type="checkbox"
                                            id="edit-table-lophoc-dadk-is207l111"
                                            name="table_lophoc_dadk[IS207.L11.1]"
                                            defaultValue="IS207.L11.1"
                                            className="form-checkbox"
                                          />
                                        </div>
                                      </td>
                                      <td>IS207</td>
                                      <td>
                                        <p style={{ color: '#ff8040' }}>IS207.L11.1</p>
                                      </td>
                                      <td>Phát triển ứng dụng web (HT1)</td>
                                      <td>HTTT</td>
                                      <td>1</td>
                                      <td />
                                      <td />
                                      <td>50</td>
                                      <td>50</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr className="odd">
                                      <td>
                                        <div className="form-item form-type-checkbox form-item-table-lophoc-dadk-SE122.L11">
                                          <input
                                            type="checkbox"
                                            id="edit-table-lophoc-dadk-se122l11"
                                            name="table_lophoc_dadk[SE122.L11]"
                                            defaultValue="SE122.L11"
                                            className="form-checkbox"
                                          />
                                        </div>
                                      </td>
                                      <td>SE122</td>
                                      <td>SE122.L11</td>
                                      <td>Đồ án 2</td>
                                      <td>CNPM</td>
                                      <td>2</td>
                                      <td />
                                      <td />
                                      <td>120</td>
                                      <td>69</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr className="even">
                                      <td>
                                        <div className="form-item form-type-checkbox form-item-table-lophoc-dadk-SE501.L11">
                                          <input
                                            type="checkbox"
                                            id="edit-table-lophoc-dadk-se501l11"
                                            name="table_lophoc_dadk[SE501.L11]"
                                            defaultValue="SE501.L11"
                                            className="form-checkbox"
                                          />
                                        </div>
                                      </td>
                                      <td>SE501</td>
                                      <td>SE501.L11</td>
                                      <td>Thực tập tốt nghiệp</td>
                                      <td>CNPM</td>
                                      <td>3</td>
                                      <td />
                                      <td />
                                      <td>120</td>
                                      <td>38</td>
                                      <td>VN</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div id="form-lopda-dangky-wrapper" className="statusmsg" />
                              <input
                                type="button"
                                id="edit-delete-lop"
                                name="op"
                                defaultValue="Xoá Lớp Đã Chọn"
                                className="form-submit"
                              />
                              <br />
                              <br />
                              Tổng tín chỉ đã đăng ký: <strong>9</strong>
                            </div>
                          </fieldset>
                          <h3 style={{ color: '#0000FF', textAlign: 'center' }}>DANH SÁCH LỚP HỌC ĐANG MỞ</h3>
                          <div className="captcha">
                            <input type="hidden" name="captcha_sid" defaultValue="1218592" />
                            <input type="hidden" name="captcha_token" defaultValue="70c47cdc1d0e685c686318e2f6516ef2" />
                            <img src={captchaImage} width="144" height="60" alt="CAPTCHA" title="Image CAPTCHA" />
                            <div className="form-item form-type-textfield form-item-captcha-response">
                              <label>
                                What code is in the image?{' '}
                                <span className="form-required" title="This field is required.">
                                  *
                                </span>
                              </label>
                              <input
                                type="text"
                                id="edit-captcha-response"
                                name="captcha_response"
                                defaultValue=""
                                size={15}
                                className="form-text required"
                              />
                              <div className="description">Enter the characters shown in the image.</div>
                            </div>
                          </div>
                          <input
                            type="button"
                            id="edit-submit2"
                            name="op"
                            defaultValue="Đăng ký"
                            className="form-submit"
                          />
                          <div className="table_lophoc_wrapper" id="table_lophoc_wrapper">
                            <table
                              className="sticky-header"
                              style={{ position: 'fixed', top: '0px', left: '367.5px', visibility: 'hidden' }}
                            >
                              <thead style={{}}>
                                <tr>
                                  <th />
                                  <th>MãMH</th>
                                  <th>Lớp</th>
                                  <th>Tên MH</th>
                                  <th>KhoaQL</th>
                                  <th>SốTC</th>
                                  <th>Thứ / Tiết / Phòng</th>
                                  <th>G.Viên</th>
                                  <th>SS</th>
                                  <th>ĐãĐK</th>
                                  <th>NN</th>
                                </tr>
                              </thead>
                            </table>
                            <table className="sticky-enabled tableheader-processed sticky-table">
                              <thead>
                                <tr>
                                  <th />
                                  <th>MãMH</th>
                                  <th>Lớp</th>
                                  <th>Tên MH</th>
                                  <th>KhoaQL</th>
                                  <th>SốTC</th>
                                  <th>Thứ / Tiết / Phòng</th>
                                  <th>G.Viên</th>
                                  <th>SS</th>
                                  <th>ĐãĐK</th>
                                  <th>NN</th>
                                </tr>
                              </thead>
                              <tbody>
                                {classes.map((it, index) => (
                                  <tr className={index % 2 ? 'even' : 'odd'} key={it.STT + it.MaLop}>
                                    <Row lop={it} />
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <input type="hidden" name="txtmasv" defaultValue={17520702} />
                          <input
                            type="button"
                            id="edit-submit"
                            name="op"
                            defaultValue="Đăng ký"
                            className="form-submit"
                          />
                          <input
                            type="hidden"
                            name="form_build_id"
                            defaultValue="form-N1aYLWUJ7mCMtuj2RILUwvcvTkCIEd80BE4RQKBBQCo"
                          />
                          <input
                            type="hidden"
                            name="form_token"
                            defaultValue="stOPMXEWuk5Ig_fRXx7V0prom2y3XQQmWE20qN_aYzE"
                          />
                          <input type="hidden" name="form_id" defaultValue="uit_dkhp_dangky_form" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.region */}
            </div>
          </div>
          {/* /#content-wrap */}
        </div>
        {/* /#content */}
      </div>
    </div>
  );
};

export default React.memo(LopThuong);
