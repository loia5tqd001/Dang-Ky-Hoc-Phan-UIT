import { ClassModel } from 'models';
import { renderRowHtmlStep4 } from 'utils';

/* eslint-disable */
export default function render(classes: ClassModel[]) {
  return `
    <div class="container">
      <div id="main-content" class="row main-content">
        <div id="content" class="mc-content span12">
          <div id="content-wrapper" class="content-wrapper">
            <div id="content-head" class="row-fluid content-head">
              <h1 class="title" id="page-title"> ĐK Học phần Anh Văn </h1>
            </div>
            <div id="content-body" class="row-fluid content-body">
              <div class="region region-content clearfix">
                <div id="form-register-wrapper">
                  <div id="block-system-main" class="clearfix block block-system">
                    <div class="content">
                      <form action="https://dkhp.uit.edu.vn/sinhvien/hocphan/dangky-anhvan" method="post"
                        id="uit-dkhp-anhvan-form" accept-charset="UTF-8">
                        <div>
                          <h1 style="color: #0000ff;text-align: center">ĐĂNG KÝ HỌC PHẦN NGOẠI NGỮ HỌC KỲ 1 NĂM HỌC 2020
                          </h1><br>Tên sinh viên: <em><strong>Nguyễn Huỳnh Lợi</strong></em><br>
                          Mã sinh viên: <em><strong>17520702</strong></em><br>
                          Ngày sinh: 10-10-1999 <br>
                          Giới tính: Nam <br>
                          Khoa : CNPM<br>
                          <div id="form-status-register-wrapper" class="statusmsg"></div>
                          <center>
                            <h3 style="color: #0000FF">DANH SÁCH LỚP NGOẠI NGỮ ĐANG MỞ</h3>
                          </center><input type="submit" id="edit-submit2" name="op" value="Đăng ký" class="form-submit">
                          <div class="form-item form-type-textfield form-item-captcha" style="clear: both;">
                            <div class="captcha"><input type="hidden" name="captcha_sid" value="196420">
                              <input type="hidden" name="captcha_token" value="5bb5c55768385ea43473ee5bad3bbe62">
                              <div class="form-item form-type-textfield form-item-captcha-response">
                                <label for="edit-captcha-response">Math question <span class="form-required"
                                    title="This field is required.">*</span></label>
                                <span class="field-prefix">12 + 7 = </span> <input type="text"
                                  id="edit-captcha-response" name="captcha_response" value="" size="4" maxlength="2"
                                  class="form-text required" autocomplete="off">
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
                            type="hidden" name="form_build_id" value="form-sOTo8IOwe6HlTtwbGIAahNhqx8lEeDtTRcLSitFlz2o">
                          <input type="hidden" name="form_token" value="QU3XQXyTfvdKurABqTAzjwC2x8IJynnnQjDiIm3_bPA">
                          <input type="hidden" name="form_id" value="uit_dkhp_anhvan_form">
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
