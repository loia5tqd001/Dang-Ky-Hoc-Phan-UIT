/* eslint-disable */

import { ClassModel } from 'models';
import { renderRowHtmlStep4 } from 'utils';

// Convert HTML to JSX: https://stackoverflow.com/a/45058774/9787887
export default function render(classes: ClassModel[]) {
  return `
    <div class="container">
      <div id="main-content" class="row main-content">
        <div id="content" class="mc-content span12">
          <div id="content-wrapper" class="content-wrapper">
            <div id="content-head" class="row-fluid content-head">
              <h1 class="title" id="page-title"> Đăng ký Học phần </h1>
            </div>
            <div id="content-body" class="row-fluid content-body">
              <div class="region region-content clearfix">
                <div id="form-register-wrapper">
                  <div id="block-system-main" class="clearfix block block-system">
                    <div class="content">
                      <form action="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky" method="post"
                        id="uit-dkhp-dangky-form" accept-charset="UTF-8">
                        <div>
                          <h1 style="color: #0000ff;text-align: center">ĐĂNG KÝ HỌC PHẦN HỌC KỲ 1 NĂM HỌC 2020</h1>
                          <br>Tên sinh viên: <em><strong>Nguyễn Huỳnh Lợi</strong></em><br>
                          Mã sinh viên: <em><strong>17520702</strong></em><br>
                          Ngày sinh: 10-10-1999 <br>
                          Giới tính: Nam <br>
                          Khoa : CNPM<br>
                          <fieldset class="collapsible collapsed form-wrapper collapse-processed" id="edit-lopdadangky">
                            <legend><span class="fieldset-legend"><a class="fieldset-title"
                                  href="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky#"><span
                                    class="fieldset-legend-prefix element-invisible">Show</span> Lớp đã đăng ký</a><span
                                  class="summary"></span></span></legend>
                            <div class="fieldset-wrapper">
                              <h3 style="color: #0000ff;text-align: center">DANH SÁCH LỚP HỌC ĐÃ ĐĂNG KÝ</h3>
                              <div class="table_lophoc_dadk_wrapper" id="table_lophoc_dadk_wrapper">
                                <table class="sticky-header"
                                  style="position: fixed; top: 0px; left: 0px; visibility: hidden;">
                                  <thead style="">
                                    <tr>
                                      <th class="select-all"><input type="checkbox" class="form-checkbox"
                                          title="Select all rows in this table"></th>
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
                                <table class="sticky-enabled table-select-processed tableheader-processed sticky-table">
                                  <thead>
                                    <tr>
                                      <th class="select-all"><input type="checkbox" class="form-checkbox"
                                          title="Select all rows in this table"></th>
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
                                    <tr class="odd">
                                      <td>
                                        <div class="form-item form-type-checkbox form-item-table-lophoc-dadk-IS207.L11">
                                          <input type="checkbox" id="edit-table-lophoc-dadk-is207l11"
                                            name="table_lophoc_dadk[IS207.L11]" value="IS207.L11" class="form-checkbox">
                                        </div>
                                      </td>
                                      <td>IS207</td>
                                      <td>IS207.L11</td>
                                      <td>Phát triển ứng dụng web</td>
                                      <td>HTTT</td>
                                      <td>3</td>
                                      <td></td>
                                      <td></td>
                                      <td>50</td>
                                      <td>50</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr class="even">
                                      <td>
                                        <div
                                          class="form-item form-type-checkbox form-item-table-lophoc-dadk-IS207.L11.1">
                                          <input type="checkbox" id="edit-table-lophoc-dadk-is207l111"
                                            name="table_lophoc_dadk[IS207.L11.1]" value="IS207.L11.1"
                                            class="form-checkbox">
                                        </div>
                                      </td>
                                      <td>IS207</td>
                                      <td>
                                        <p style="color:#ff8040">IS207.L11.1</p>
                                      </td>
                                      <td>Phát triển ứng dụng web (HT1)</td>
                                      <td>HTTT</td>
                                      <td>1</td>
                                      <td></td>
                                      <td></td>
                                      <td>50</td>
                                      <td>50</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr class="odd">
                                      <td>
                                        <div class="form-item form-type-checkbox form-item-table-lophoc-dadk-SE122.L11">
                                          <input type="checkbox" id="edit-table-lophoc-dadk-se122l11"
                                            name="table_lophoc_dadk[SE122.L11]" value="SE122.L11" class="form-checkbox">
                                        </div>
                                      </td>
                                      <td>SE122</td>
                                      <td>SE122.L11</td>
                                      <td>Đồ án 2</td>
                                      <td>CNPM</td>
                                      <td>2</td>
                                      <td></td>
                                      <td></td>
                                      <td>120</td>
                                      <td>69</td>
                                      <td>VN</td>
                                    </tr>
                                    <tr class="even">
                                      <td>
                                        <div class="form-item form-type-checkbox form-item-table-lophoc-dadk-SE501.L11">
                                          <input type="checkbox" id="edit-table-lophoc-dadk-se501l11"
                                            name="table_lophoc_dadk[SE501.L11]" value="SE501.L11" class="form-checkbox">
                                        </div>
                                      </td>
                                      <td>SE501</td>
                                      <td>SE501.L11</td>
                                      <td>Thực tập tốt nghiệp</td>
                                      <td>CNPM</td>
                                      <td>3</td>
                                      <td></td>
                                      <td></td>
                                      <td>120</td>
                                      <td>38</td>
                                      <td>VN</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div id="form-lopda-dangky-wrapper" class="statusmsg"></div><input
                                onclick="if(!confirm(&quot;Bạn muốn xóa các lớp đã chọn?&quot;)){return false;}"
                                type="submit" id="edit-delete-lop" name="op" value="Xoá Lớp Đã Chọn"
                                class="form-submit"><br><br>Tổng tín chỉ đã đăng ký: <strong>9</strong>
                            </div>
                          </fieldset>
                          <center>
                            <h3 style="color: #0000FF">DANH SÁCH LỚP HỌC ĐANG MỞ</h3>
                          </center><input type="submit" id="edit-submit2" name="op" value="Đăng ký" class="form-submit">
                          <div class="form-item form-type-textfield form-item-captcha" style="clear: both;">
                            <div class="captcha"><input type="hidden" name="captcha_sid" value="195845">
                              <input type="hidden" name="captcha_token" value="fb109325358045dfa5fc7a07f0213f55">
                              <div class="form-item form-type-textfield form-item-captcha-response">
                                <label for="edit-captcha-response">Math question <span class="form-required"
                                    title="This field is required.">*</span></label>
                                <span class="field-prefix">7 + 8 = </span> <input type="text" id="edit-captcha-response"
                                  name="captcha_response" value="" size="4" maxlength="2" class="form-text required"
                                  autocomplete="off">
                                <div class="description">Solve this simple math problem and enter the result. E.g. for
                                  1+3, enter 4.</div>
                              </div>
                            </div>
                          </div>
                          <div class="table_lophoc_wrapper" id="table_lophoc_wrapper">
                            <table class="sticky-header"
                              style="position: fixed; top: 0px; left: 367.5px; visibility: hidden;">
                              <thead style="">
                                <tr>
                                  <th></th>
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
                            <table class="sticky-enabled tableheader-processed sticky-table">
                              <thead>
                                <tr>
                                  <th></th>
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
${classes.map((it, index) => `<tr class="${index % 2 ? 'even' : 'odd'}">${renderRowHtmlStep4(it)}</tr>`)}
                              </tbody>
                            </table>
                          </div><input type="hidden" name="txtmasv" value="17520702">
                          <input type="submit" id="edit-submit" name="op" value="Đăng ký" class="form-submit"><input
                            type="hidden" name="form_build_id" value="form-N1aYLWUJ7mCMtuj2RILUwvcvTkCIEd80BE4RQKBBQCo">
                          <input type="hidden" name="form_token" value="stOPMXEWuk5Ig_fRXx7V0prom2y3XQQmWE20qN_aYzE">
                          <input type="hidden" name="form_id" value="uit_dkhp_dangky_form">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.region -->
            </div>
          </div>
          <!-- /#content-wrap -->
        </div>
        <!-- /#content -->
      </div>
    </div>
`;
}
