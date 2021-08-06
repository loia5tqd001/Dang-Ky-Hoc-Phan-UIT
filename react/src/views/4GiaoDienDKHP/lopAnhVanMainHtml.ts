/* eslint-disable */
export default `
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
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L11">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l11"
                                        name="table_lophoc[ENG01.L11]" value="ENG01.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L11</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 2, Tiết 123, P.B4.10<br>Thứ 6, Tiết 45, P.B4.10<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L12">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l12"
                                        name="table_lophoc[ENG01.L12]" value="ENG01.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L12</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 6, Tiết 123, P.C215<br>Thứ 2, Tiết 45, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>13</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L13">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l13"
                                        name="table_lophoc[ENG01.L13]" value="ENG01.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L13</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 2, Tiết 678, P.B4.12<br>Thứ 6, Tiết 90, P.B4.12<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>16</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L14">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l14"
                                        name="table_lophoc[ENG01.L14]" value="ENG01.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L14</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 123, P.C215<br>Thứ 7, Tiết 34, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>8</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L15">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l15"
                                        name="table_lophoc[ENG01.L15]" value="ENG01.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L15</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 45, P.B6.04<br>Thứ 5, Tiết 123, P.B6.04<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>13</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L16">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l16"
                                        name="table_lophoc[ENG01.L16]" value="ENG01.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L16</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 5, Tiết 34, P.B4.10<br>Thứ 3, Tiết 123, P.B4.10<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG01.L17">
                                      <input type="checkbox" id="edit-table-lophoc-eng01l17"
                                        name="table_lophoc[ENG01.L17]" value="ENG01.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG01</td>
                                  <td>ENG01.L17</td>
                                  <td>Anh văn 1</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 90, P.B4.12<br>Thứ 5, Tiết 678, P.B4.12<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG02.L12">
                                      <input type="checkbox" id="edit-table-lophoc-eng02l12"
                                        name="table_lophoc[ENG02.L12]" value="ENG02.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG02</td>
                                  <td>ENG02.L12</td>
                                  <td>Anh văn 2</td>
                                  <td>4</td>
                                  <td>Thứ 2, Tiết 90, P.C215<br>Thứ 6, Tiết 678, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>13</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG02.L15">
                                      <input type="checkbox" id="edit-table-lophoc-eng02l15"
                                        name="table_lophoc[ENG02.L15]" value="ENG02.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG02</td>
                                  <td>ENG02.L15</td>
                                  <td>Anh văn 2</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 45, P.C213<br>Thứ 7, Tiết 123, P.C213<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>26</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG03.L11">
                                      <input type="checkbox" id="edit-table-lophoc-eng03l11"
                                        name="table_lophoc[ENG03.L11]" value="ENG03.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L11</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 45, P.C215<br>Thứ 2, Tiết 123, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>13</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG03.L12">
                                      <input type="checkbox" id="edit-table-lophoc-eng03l12"
                                        name="table_lophoc[ENG03.L12]" value="ENG03.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L12</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 2, Tiết 45, P.B4.10<br>Thứ 4, Tiết 123, P.B4.10<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>16</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG03.L13">
                                      <input type="checkbox" id="edit-table-lophoc-eng03l13"
                                        name="table_lophoc[ENG03.L13]" value="ENG03.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L13</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 123, P.B4.12<br>Thứ 7, Tiết 45, P.B4.12<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>21</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG03.L14">
                                      <input type="checkbox" id="edit-table-lophoc-eng03l14"
                                        name="table_lophoc[ENG03.L14]" value="ENG03.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L14</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 6, Tiết 90, P.C216<br>Thứ 2, Tiết 678, P.C216<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-ENG03.L17">
                                      <input type="checkbox" id="edit-table-lophoc-eng03l17"
                                        name="table_lophoc[ENG03.L17]" value="ENG03.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L17</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 90, P.C215<br>Thứ 5, Tiết 678, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>29</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="m_dadk_du odd">
                                  <td>
                                    <div
                                      class="form-item form-type-checkbox form-item-table-lophoc-fullENG02.L11 form-disabled">
                                      <input disabled="1" type="checkbox" id="edit-table-lophoc-fulleng02l11"
                                        name="table_lophoc[fullENG02.L11]" value="fullENG02.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG02</td>
                                  <td>ENG02.L11</td>
                                  <td>Anh văn 2</td>
                                  <td>4</td>
                                  <td>Thứ 2, Tiết 45, P.B4.12<br>Thứ 6, Tiết 123, P.B4.12<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="m_dadk_du even">
                                  <td>
                                    <div
                                      class="form-item form-type-checkbox form-item-table-lophoc-fullENG03.L15 form-disabled">
                                      <input disabled="1" type="checkbox" id="edit-table-lophoc-fulleng03l15"
                                        name="table_lophoc[fullENG03.L15]" value="fullENG03.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L15</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 45, P.C216<br>Thứ 5, Tiết 123, P.C216<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="m_dadk_du odd">
                                  <td>
                                    <div
                                      class="form-item form-type-checkbox form-item-table-lophoc-fullENG03.L16 form-disabled">
                                      <input disabled="1" type="checkbox" id="edit-table-lophoc-fulleng03l16"
                                        name="table_lophoc[fullENG03.L16]" value="fullENG03.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>ENG03</td>
                                  <td>ENG03.L16</td>
                                  <td>Anh văn 3</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 123, P.C215<br>Thứ 5, Tiết 45, P.C215<br></td>
                                  <td>
                                  </td>
                                  <td>30</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
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
