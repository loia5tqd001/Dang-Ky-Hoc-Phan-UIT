import { ClassModel } from 'models';
import React from 'react';
import { Row } from './Row';

type Props = {
  classes: ClassModel[];
};

export const LopAnhVan: React.FC<Props> = (props) => {
  const { classes } = props;

  return (
    <div className="container">
      <div id="main-content" className="row main-content">
        <div id="content" className="mc-content span12">
          <div id="content-wrapper" className="content-wrapper">
            <div id="content-head" className="row-fluid content-head">
              <h1 className="title" id="page-title">
                {' '}
                ĐK Học phần Anh Văn{' '}
              </h1>
            </div>
            <div id="content-body" className="row-fluid content-body">
              <div className="region region-content clearfix">
                <div id="form-register-wrapper">
                  <div id="block-system-main" className="clearfix block block-system">
                    <div className="content">
                      <form
                        action="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky-anhvan"
                        method="post"
                        id="uit-dkhp-anhvan-form"
                        acceptCharset="UTF-8"
                      >
                        <div>
                          <h1 style={{ color: '#0000ff', textAlign: 'center' }}>
                            ĐĂNG KÝ HỌC PHẦN NGOẠI NGỮ HỌC KỲ 1 NĂM HỌC 2020
                          </h1>
                          <br />
                          Tên sinh viên:{' '}
                          <em>
                            <strong>Nguyễn Huỳnh Lợi</strong>
                          </em>
                          <br />
                          Mã sinh viên:{' '}
                          <em>
                            <strong>17520702</strong>
                          </em>
                          <br />
                          Ngày sinh: 10-10-1999 <br />
                          Giới tính: Nam <br />
                          Khoa : CNPM
                          <br />
                          <div id="form-status-register-wrapper" className="statusmsg" />
                          <h3 style={{ color: '#0000FF', textAlign: 'center' }}>DANH SÁCH LỚP NGOẠI NGỮ ĐANG MỞ</h3>
                          <input
                            type="button"
                            id="edit-submit2"
                            name="op"
                            defaultValue="Đăng ký"
                            className="form-submit"
                          />
                          <div className="form-item form-type-textfield form-item-captcha" style={{ clear: 'both' }}>
                            <div className="captcha">
                              <input type="hidden" name="captcha_sid" defaultValue={196420} />
                              <input
                                type="hidden"
                                name="captcha_token"
                                defaultValue="5bb5c55768385ea43473ee5bad3bbe62"
                              />
                              <div className="form-item form-type-textfield form-item-captcha-response">
                                <label htmlFor="edit-captcha-response">
                                  Math question{' '}
                                  <span className="form-required" title="This field is required.">
                                    *
                                  </span>
                                </label>
                                <span className="field-prefix">12 + 7 = </span>{' '}
                                <input
                                  type="text"
                                  id="edit-captcha-response"
                                  name="captcha_response"
                                  size={4}
                                  maxLength={2}
                                  className="form-text required"
                                  autoComplete="off"
                                />
                                <div className="description">
                                  Solve this simple math problem and enter the result. E.g. for 1+3, enter 4.
                                </div>
                              </div>
                            </div>
                          </div>
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
                            defaultValue="form-sOTo8IOwe6HlTtwbGIAahNhqx8lEeDtTRcLSitFlz2o"
                          />
                          <input
                            type="hidden"
                            name="form_token"
                            defaultValue="QU3XQXyTfvdKurABqTAzjwC2x8IJynnnQjDiIm3_bPA"
                          />
                          <input type="hidden" name="form_id" defaultValue="uit_dkhp_anhvan_form" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LopAnhVan);
