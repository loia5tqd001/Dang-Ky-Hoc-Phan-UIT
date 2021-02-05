
// Convert HTML to JSX: https://stackoverflow.com/a/45058774/9787887
export default `
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
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce005l11"
                                        name="table_lophoc[CE005.L11]" value="CE005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE005</td>
                                  <td>CE005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Kỹ Thuật Máy tính</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 123, P.C308<br></td>
                                  <td>Đoàn Duy - 80447</td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE119.L11.4">
                                      <input type="checkbox" id="edit-table-lophoc-ce119l114"
                                        name="table_lophoc[CE119.L11.4]" value="CE119.L11.4" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE119</td>
                                  <td>
                                    <p style="color:#ff8040">CE119.L11.4</p>
                                  </td>
                                  <td>Thực hành Kiến trúc máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C209<br></td>
                                  <td>Trần Đại Dương - 80391</td>
                                  <td>25</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE124.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce124l11"
                                        name="table_lophoc[CE124.L11]" value="CE124.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE124</td>
                                  <td>CE124.L11</td>
                                  <td>Các thiết bị và mạch điện tử</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B6.10<br></td>
                                  <td>Phạm Minh Quân - 80385</td>
                                  <td>100</td>
                                  <td>76</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE124.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce124l111"
                                        name="table_lophoc[CE124.L11.1]" value="CE124.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE124</td>
                                  <td>
                                    <p style="color:#ff8040">CE124.L11.1</p>
                                  </td>
                                  <td>Các thiết bị và mạch điện tử (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.C307<br></td>
                                  <td>Nguyễn Mạnh Thảo - 80437</td>
                                  <td>50</td>
                                  <td>48</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE124.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce124l112"
                                        name="table_lophoc[CE124.L11.2]" value="CE124.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE124</td>
                                  <td>
                                    <p style="color:#ff8040">CE124.L11.2</p>
                                  </td>
                                  <td>Các thiết bị và mạch điện tử (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.C307<br></td>
                                  <td>Nguyễn Mạnh Thảo - 80437</td>
                                  <td>50</td>
                                  <td>28</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE201.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce201l11"
                                        name="table_lophoc[CE201.L11]" value="CE201.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE201</td>
                                  <td>CE201.L11</td>
                                  <td>Đồ án 1</td>
                                  <td>KTMT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>19</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE206.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce206l11"
                                        name="table_lophoc[CE206.L11]" value="CE206.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE206</td>
                                  <td>CE206.L11</td>
                                  <td>Đồ án 2</td>
                                  <td>KTMT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE211.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce211l11"
                                        name="table_lophoc[CE211.L11]" value="CE211.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE211</td>
                                  <td>CE211.L11</td>
                                  <td>Lập trình nhúng căn bản</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 678, P.B6.10<br></td>
                                  <td>Chung Quang Khánh - 80338</td>
                                  <td>50</td>
                                  <td>11</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE211.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce211l111"
                                        name="table_lophoc[CE211.L11.1]" value="CE211.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE211</td>
                                  <td>
                                    <p style="color:#ff8040">CE211.L11.1</p>
                                  </td>
                                  <td>Lập trình nhúng căn bản (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 12345, P.C209<br></td>
                                  <td>Chung Quang Khánh - 80338</td>
                                  <td>25</td>
                                  <td>11</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE211.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce211l112"
                                        name="table_lophoc[CE211.L11.2]" value="CE211.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE211</td>
                                  <td>
                                    <p style="color:#ff8040">CE211.L11.2</p>
                                  </td>
                                  <td>Lập trình nhúng căn bản (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 12345, P.C209<br></td>
                                  <td>Chung Quang Khánh - 80338</td>
                                  <td>25</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE224.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce224l11"
                                        name="table_lophoc[CE224.L11]" value="CE224.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE224</td>
                                  <td>CE224.L11</td>
                                  <td>ThiẾT kế hệ thống nhúng</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 123, P.B6.10<br></td>
                                  <td>Lê Hoài Nghĩa - 80119</td>
                                  <td>70</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE224.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce224l111"
                                        name="table_lophoc[CE224.L11.1]" value="CE224.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE224</td>
                                  <td>
                                    <p style="color:#ff8040">CE224.L11.1</p>
                                  </td>
                                  <td>ThiẾT kế hệ thống nhúng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.B4.02<br></td>
                                  <td>Lê Hoài Nghĩa - 80119</td>
                                  <td>35</td>
                                  <td>29</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE224.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce224l112"
                                        name="table_lophoc[CE224.L11.2]" value="CE224.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE224</td>
                                  <td>
                                    <p style="color:#ff8040">CE224.L11.2</p>
                                  </td>
                                  <td>ThiẾT kế hệ thống nhúng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.B4.02<br></td>
                                  <td>Lê Hoài Nghĩa - 80119</td>
                                  <td>35</td>
                                  <td>16</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE319.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce319l11"
                                        name="table_lophoc[CE319.L11]" value="CE319.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE319</td>
                                  <td>CE319.L11</td>
                                  <td>Logic mờ và ứng dụng</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 123, P.B6.10<br></td>
                                  <td>Phạm Minh Quân - 80385</td>
                                  <td>70</td>
                                  <td>37</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE319.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce319l112"
                                        name="table_lophoc[CE319.L11.2]" value="CE319.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE319</td>
                                  <td>
                                    <p style="color:#ff8040">CE319.L11.2</p>
                                  </td>
                                  <td>Logic mờ và ứng dụng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 67890, P.C211<br></td>
                                  <td>Phạm Minh Quân - 80385</td>
                                  <td>35</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE401.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce401l11"
                                        name="table_lophoc[CE401.L11]" value="CE401.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE401</td>
                                  <td>CE401.L11</td>
                                  <td>Kỹ thuật hệ thống máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 678, P.B6.10<br></td>
                                  <td>Nguyễn Minh Sơn - 80308</td>
                                  <td>50</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE405.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce405l11"
                                        name="table_lophoc[CE405.L11]" value="CE405.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE405</td>
                                  <td>CE405.L11</td>
                                  <td>Tương tác người máy</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 678, P.B6.10<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE411.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce411l11"
                                        name="table_lophoc[CE411.L11]" value="CE411.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE411</td>
                                  <td>CE411.L11</td>
                                  <td>Chuyên đề hệ thống nhúng và robot</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.B6.10<br></td>
                                  <td>Đoàn Duy - 80447</td>
                                  <td>50</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE411.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce411l111"
                                        name="table_lophoc[CE411.L11.1]" value="CE411.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE411</td>
                                  <td>
                                    <p style="color:#ff8040">CE411.L11.1</p>
                                  </td>
                                  <td>Chuyên đề hệ thống nhúng và robot (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C209<br></td>
                                  <td>Đoàn Duy - 80447</td>
                                  <td>25</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE411.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce411l112"
                                        name="table_lophoc[CE411.L11.2]" value="CE411.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE411</td>
                                  <td>
                                    <p style="color:#ff8040">CE411.L11.2</p>
                                  </td>
                                  <td>Chuyên đề hệ thống nhúng và robot (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C209<br></td>
                                  <td>Đoàn Duy - 80447</td>
                                  <td>25</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE421.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce421l11"
                                        name="table_lophoc[CE421.L11]" value="CE421.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE421</td>
                                  <td>CE421.L11</td>
                                  <td>Chuyên đề thiết kế vi mạch và phần cứng</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.B6.10<br></td>
                                  <td>Trương Văn Cương - 80349</td>
                                  <td>50</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE421.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce421l111"
                                        name="table_lophoc[CE421.L11.1]" value="CE421.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE421</td>
                                  <td>
                                    <p style="color:#ff8040">CE421.L11.1</p>
                                  </td>
                                  <td>Chuyên đề thiết kế vi mạch và phần cứng (HT1 - Học cách <strong>2</strong> tuần)
                                  </td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C209<br></td>
                                  <td>Trương Văn Cương - 80349</td>
                                  <td>25</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE421.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce421l112"
                                        name="table_lophoc[CE421.L11.2]" value="CE421.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE421</td>
                                  <td>
                                    <p style="color:#ff8040">CE421.L11.2</p>
                                  </td>
                                  <td>Chuyên đề thiết kế vi mạch và phần cứng (HT1 - Học cách <strong>2</strong> tuần)
                                  </td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C209<br></td>
                                  <td>Trương Văn Cương - 80349</td>
                                  <td>25</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE433.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce433l11"
                                        name="table_lophoc[CE433.L11]" value="CE433.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE433</td>
                                  <td>CE433.L11</td>
                                  <td>Thiết kế hệ thống SoC</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 123, P.B6.10<br></td>
                                  <td>Trịnh Lê Huy - 80337</td>
                                  <td>70</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE433.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ce433l111"
                                        name="table_lophoc[CE433.L11.1]" value="CE433.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE433</td>
                                  <td>
                                    <p style="color:#ff8040">CE433.L11.1</p>
                                  </td>
                                  <td>Thiết kế hệ thống SoC (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 67890, P.B4.04<br></td>
                                  <td>Trịnh Lê Huy - 80337</td>
                                  <td>35</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE433.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ce433l112"
                                        name="table_lophoc[CE433.L11.2]" value="CE433.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE433</td>
                                  <td>
                                    <p style="color:#ff8040">CE433.L11.2</p>
                                  </td>
                                  <td>Thiết kế hệ thống SoC (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 67890, P.B4.04<br></td>
                                  <td>Trịnh Lê Huy - 80337</td>
                                  <td>35</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE501.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce501l11"
                                        name="table_lophoc[CE501.L11]" value="CE501.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE501</td>
                                  <td>CE501.L11</td>
                                  <td>Thực tập doanh nghiệp</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>33</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CE505.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ce505l11"
                                        name="table_lophoc[CE505.L11]" value="CE505.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CE505</td>
                                  <td>CE505.L11</td>
                                  <td>Khóa luận tốt nghiệp</td>
                                  <td>KTMT</td>
                                  <td>10</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>18</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs005l11"
                                        name="table_lophoc[CS005.L11]" value="CS005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS005</td>
                                  <td>CS005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Khoa học Máy tính</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 123, P.B1.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS112.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs112l11"
                                        name="table_lophoc[CS112.L11]" value="CS112.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS112</td>
                                  <td>CS112.L11</td>
                                  <td>Phân tích và thiết kế thuật toán</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B4.18<br></td>
                                  <td>Phạm Nguyễn Trường An - 80001</td>
                                  <td>80</td>
                                  <td>72</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS112.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs112l111"
                                        name="table_lophoc[CS112.L11.1]" value="CS112.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS112</td>
                                  <td>
                                    <p style="color:#ff8040">CS112.L11.1</p>
                                  </td>
                                  <td>Phân tích và thiết kế thuật toán (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Phạm Nguyễn Trường An - 80001</td>
                                  <td>80</td>
                                  <td>72</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS114.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs114l11"
                                        name="table_lophoc[CS114.L11]" value="CS114.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS114</td>
                                  <td>CS114.L11</td>
                                  <td>Máy học</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B4.16<br></td>
                                  <td>Nguyễn Lưu Thùy Ngân - 80263</td>
                                  <td>75</td>
                                  <td>65</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS114.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs114l111"
                                        name="table_lophoc[CS114.L11.1]" value="CS114.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS114</td>
                                  <td>
                                    <p style="color:#ff8040">CS114.L11.1</p>
                                  </td>
                                  <td>Máy học (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Lưu Thùy Ngân - 80263</td>
                                  <td>75</td>
                                  <td>65</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS115.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs115l11"
                                        name="table_lophoc[CS115.L11]" value="CS115.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS115</td>
                                  <td>CS115.L11</td>
                                  <td>Toán cho Khoa học máy tính</td>
                                  <td>KHMT</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 2345, P.B4.16<br></td>
                                  <td>Lương Ngọc Hoàng - 80435<br>Dương Ngọc Hảo - 80048</td>
                                  <td>70</td>
                                  <td>52</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS217.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs217l11"
                                        name="table_lophoc[CS217.L11]" value="CS217.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS217</td>
                                  <td>CS217.L11</td>
                                  <td>Các hệ cơ sở tri thức</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 123, P.B4.16<br></td>
                                  <td>Nguyễn Thị Ngọc Diễm - 80023</td>
                                  <td>70</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS217.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs217l111"
                                        name="table_lophoc[CS217.L11.1]" value="CS217.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS217</td>
                                  <td>
                                    <p style="color:#ff8040">CS217.L11.1</p>
                                  </td>
                                  <td>Các hệ cơ sở tri thức (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Thị Ngọc Diễm - 80023</td>
                                  <td>70</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS231.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs231l11"
                                        name="table_lophoc[CS231.L11]" value="CS231.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS231</td>
                                  <td>CS231.L11</td>
                                  <td>Nhập môn Thị giác máy tính</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 123, P.B4.18<br></td>
                                  <td>Nguyễn Vinh Tiệp - 80373</td>
                                  <td>80</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS231.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs231l111"
                                        name="table_lophoc[CS231.L11.1]" value="CS231.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS231</td>
                                  <td>
                                    <p style="color:#ff8040">CS231.L11.1</p>
                                  </td>
                                  <td>Nhập môn Thị giác máy tính (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Vinh Tiệp - 80373</td>
                                  <td>80</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS316.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs316l11"
                                        name="table_lophoc[CS316.L11]" value="CS316.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS316</td>
                                  <td>CS316.L11</td>
                                  <td>Các hệ giải bài toán thông minh</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 678, P.B4.18<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>70</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS316.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs316l111"
                                        name="table_lophoc[CS316.L11.1]" value="CS316.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS316</td>
                                  <td>
                                    <p style="color:#ff8040">CS316.L11.1</p>
                                  </td>
                                  <td>Các hệ giải bài toán thông minh (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>70</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS321.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs321l11"
                                        name="table_lophoc[CS321.L11]" value="CS321.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS321</td>
                                  <td>CS321.L11</td>
                                  <td>Ngôn ngữ học ngữ liệu</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 678, P.B4.16<br></td>
                                  <td>Nguyễn Thị Quý - 80155</td>
                                  <td>70</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS321.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs321l111"
                                        name="table_lophoc[CS321.L11.1]" value="CS321.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS321</td>
                                  <td>
                                    <p style="color:#ff8040">CS321.L11.1</p>
                                  </td>
                                  <td>Ngôn ngữ học ngữ liệu (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Thị Quý - 80155</td>
                                  <td>70</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS336.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs336l11"
                                        name="table_lophoc[CS336.L11]" value="CS336.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS336</td>
                                  <td>CS336.L11</td>
                                  <td>Truy vấn thông tin đa phương tiện</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.B4.16<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288<br>Nguyễn Vinh Tiệp - 80373</td>
                                  <td>72</td>
                                  <td>67</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS336.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs336l111"
                                        name="table_lophoc[CS336.L11.1]" value="CS336.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS336</td>
                                  <td>
                                    <p style="color:#ff8040">CS336.L11.1</p>
                                  </td>
                                  <td>Truy vấn thông tin đa phương tiện (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288<br>Nguyễn Vinh Tiệp - 80373</td>
                                  <td>72</td>
                                  <td>67</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS406.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs406l11"
                                        name="table_lophoc[CS406.L11]" value="CS406.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS406</td>
                                  <td>CS406.L11</td>
                                  <td>Xử lý ảnh và ứng dụng</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.B4.16<br></td>
                                  <td>Mai Tiến Dũng - 80029</td>
                                  <td>50</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS406.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs406l111"
                                        name="table_lophoc[CS406.L11.1]" value="CS406.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS406</td>
                                  <td>
                                    <p style="color:#ff8040">CS406.L11.1</p>
                                  </td>
                                  <td>Xử lý ảnh và ứng dụng (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Mai Tiến Dũng - 80029</td>
                                  <td>50</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS410.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs410l11"
                                        name="table_lophoc[CS410.L11]" value="CS410.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS410</td>
                                  <td>CS410.L11</td>
                                  <td>Mạng neural và thuật giải di truyền</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B3.16<br></td>
                                  <td>Lương Ngọc Hoàng - 80435</td>
                                  <td>50</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS410.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs410l111"
                                        name="table_lophoc[CS410.L11.1]" value="CS410.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS410</td>
                                  <td>
                                    <p style="color:#ff8040">CS410.L11.1</p>
                                  </td>
                                  <td>Mạng neural và thuật giải di truyền (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Lương Ngọc Hoàng - 80435</td>
                                  <td>50</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS419.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs419l11"
                                        name="table_lophoc[CS419.L11]" value="CS419.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS419</td>
                                  <td>CS419.L11</td>
                                  <td>Truy xuất thông tin</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 678, P.B4.18<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288</td>
                                  <td>50</td>
                                  <td>31</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS419.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs419l111"
                                        name="table_lophoc[CS419.L11.1]" value="CS419.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS419</td>
                                  <td>
                                    <p style="color:#ff8040">CS419.L11.1</p>
                                  </td>
                                  <td>Truy xuất thông tin (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288</td>
                                  <td>50</td>
                                  <td>31</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS505.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs505l11"
                                        name="table_lophoc[CS505.L11]" value="CS505.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS505</td>
                                  <td>CS505.L11</td>
                                  <td>Khoá luận tốt nghiệp</td>
                                  <td>KHMT</td>
                                  <td>10</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>9</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS511.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs511l11"
                                        name="table_lophoc[CS511.L11]" value="CS511.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS511</td>
                                  <td>CS511.L11</td>
                                  <td>Ngôn ngữ lập trình C#</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.B4.18<br></td>
                                  <td>Nguyễn Bích Vân - 80226</td>
                                  <td>60</td>
                                  <td>40</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS511.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs511l111"
                                        name="table_lophoc[CS511.L11.1]" value="CS511.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS511</td>
                                  <td>
                                    <p style="color:#ff8040">CS511.L11.1</p>
                                  </td>
                                  <td>Ngôn ngữ lập trình C# (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Bích Vân - 80226</td>
                                  <td>60</td>
                                  <td>40</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS519.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs519l11"
                                        name="table_lophoc[CS519.L11]" value="CS519.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS519</td>
                                  <td>CS519.L11</td>
                                  <td>Phương pháp luận nghiên cứu khoa học</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 678, P.B4.16<br></td>
                                  <td>Lê Đình Duy - 80036</td>
                                  <td>70</td>
                                  <td>56</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS522.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs522l11"
                                        name="table_lophoc[CS522.L11]" value="CS522.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS522</td>
                                  <td>CS522.L11</td>
                                  <td>Đại số máy tính</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.B4.18<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>70</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS522.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs522l111"
                                        name="table_lophoc[CS522.L11.1]" value="CS522.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS522</td>
                                  <td>
                                    <p style="color:#ff8040">CS522.L11.1</p>
                                  </td>
                                  <td>Đại số máy tính (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>70</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS529.L11.KHCL">
                                      <input type="checkbox" id="edit-table-lophoc-cs529l11khcl"
                                        name="table_lophoc[CS529.L11.KHCL]" value="CS529.L11.KHCL"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS529</td>
                                  <td>CS529.L11.KHCL</td>
                                  <td>Các vấn đề nghiên cứu và ứng dụng trong khoa học máy tính</td>
                                  <td>KHMT</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 6789, P.C210<br></td>
                                  <td>Nguyễn Thị Quý - 80155<br>Nguyễn Vinh Tiệp - 80373<br>Lương Ngọc Hoàng - 80435
                                  </td>
                                  <td>50</td>
                                  <td>8</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS535.L11">
                                      <input type="checkbox" id="edit-table-lophoc-cs535l11"
                                        name="table_lophoc[CS535.L11]" value="CS535.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS535</td>
                                  <td>CS535.L11</td>
                                  <td>Tổng hợp tiếng nói</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.B4.16<br></td>
                                  <td>Trịnh Quốc Sơn - 80162</td>
                                  <td>70</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-CS535.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-cs535l111"
                                        name="table_lophoc[CS535.L11.1]" value="CS535.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>CS535</td>
                                  <td>
                                    <p style="color:#ff8040">CS535.L11.1</p>
                                  </td>
                                  <td>Tổng hợp tiếng nói (HT2)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trịnh Quốc Sơn - 80162</td>
                                  <td>70</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS105.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ds105l11"
                                        name="table_lophoc[DS105.L11]" value="DS105.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS105</td>
                                  <td>DS105.L11</td>
                                  <td>Phân tích và trực quan dữ liệu</td>
                                  <td>KTTT</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 1234, P.B3.18<br></td>
                                  <td>Phạm Thế Sơn - 80265</td>
                                  <td>70</td>
                                  <td>60</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS105.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ds105l112"
                                        name="table_lophoc[DS105.L11.2]" value="DS105.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS105</td>
                                  <td>
                                    <p style="color:#ff8040">DS105.L11.2</p>
                                  </td>
                                  <td>Phân tích và trực quan dữ liệu (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C307<br></td>
                                  <td>Phạm Thế Sơn - 80265</td>
                                  <td>35</td>
                                  <td>25</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS106.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ds106l112"
                                        name="table_lophoc[DS106.L11.2]" value="DS106.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS106</td>
                                  <td>
                                    <p style="color:#ff8040">DS106.L11.2</p>
                                  </td>
                                  <td>Tối ứu hoá và ứng dụng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 67890, P.C209<br></td>
                                  <td>Nguyễn Đức Vũ - 80419</td>
                                  <td>35</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS201.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ds201l11"
                                        name="table_lophoc[DS201.L11]" value="DS201.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS201</td>
                                  <td>DS201.L11</td>
                                  <td>Deep Learning trong khoa học dữ liệu</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 234, P.B3.18<br></td>
                                  <td>Đỗ Trọng Hợp - 80434</td>
                                  <td>70</td>
                                  <td>61</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS201.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ds201l111"
                                        name="table_lophoc[DS201.L11.1]" value="DS201.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS201</td>
                                  <td>
                                    <p style="color:#ff8040">DS201.L11.1</p>
                                  </td>
                                  <td>Deep Learning trong khoa học dữ liệu (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C209<br></td>
                                  <td>Lưu Thanh Sơn - 80438</td>
                                  <td>35</td>
                                  <td>34</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-DS201.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ds201l112"
                                        name="table_lophoc[DS201.L11.2]" value="DS201.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>DS201</td>
                                  <td>
                                    <p style="color:#ff8040">DS201.L11.2</p>
                                  </td>
                                  <td>Deep Learning trong khoa học dữ liệu (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C209<br></td>
                                  <td>Lưu Thanh Sơn - 80438</td>
                                  <td>35</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec005l11"
                                        name="table_lophoc[EC005.L11]" value="EC005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC005</td>
                                  <td>EC005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Thương mại Điện tử</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 123, P.B4.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC201.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec201l11"
                                        name="table_lophoc[EC201.L11]" value="EC201.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC201</td>
                                  <td>EC201.L11</td>
                                  <td>Phân tích thiết kế quy trình nghiệp vụ doanh nghiệp</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 6789, P.B1.12<br></td>
                                  <td>Trình Trọng Tín - 80352</td>
                                  <td>80</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC201.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ec201l111"
                                        name="table_lophoc[EC201.L11.1]" value="EC201.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC201</td>
                                  <td>
                                    <p style="color:#ff8040">EC201.L11.1</p>
                                  </td>
                                  <td>Phân tích thiết kế quy trình nghiệp vụ doanh nghiệp (HT2)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trình Trọng Tín - 80352</td>
                                  <td>80</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC202.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec202l11"
                                        name="table_lophoc[EC202.L11]" value="EC202.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC202</td>
                                  <td>EC202.L11</td>
                                  <td>Nhập môn quản trị chuỗi cung ứng</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 6789, P.B3.22<br></td>
                                  <td>Trình Trọng Tín - 80352</td>
                                  <td>80</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC202.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ec202l111"
                                        name="table_lophoc[EC202.L11.1]" value="EC202.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC202</td>
                                  <td>
                                    <p style="color:#ff8040">EC202.L11.1</p>
                                  </td>
                                  <td>Nhập môn quản trị chuỗi cung ứng (HT2)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trình Trọng Tín - 80352</td>
                                  <td>80</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC208.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec208l11"
                                        name="table_lophoc[EC208.L11]" value="EC208.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC208</td>
                                  <td>EC208.L11</td>
                                  <td>QuẢN trị dự án TMĐT</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.B1.12<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>70</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC213.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec213l11"
                                        name="table_lophoc[EC213.L11]" value="EC213.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC213</td>
                                  <td>EC213.L11</td>
                                  <td>Quản trị quan hệ khách hàng và nhà cung cấp</td>
                                  <td>HTTT</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 123, P.B3.20<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>71</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC213.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ec213l111"
                                        name="table_lophoc[EC213.L11.1]" value="EC213.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC213</td>
                                  <td>
                                    <p style="color:#ff8040">EC213.L11.1</p>
                                  </td>
                                  <td>Quản trị quan hệ khách hàng và nhà cung cấp (HT2)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>71</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC222.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec222l11"
                                        name="table_lophoc[EC222.L11]" value="EC222.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC222</td>
                                  <td>EC222.L11</td>
                                  <td>ThỰc tập doanh nhiệp</td>
                                  <td>HTTT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>32</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC229.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec229l11"
                                        name="table_lophoc[EC229.L11]" value="EC229.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC229</td>
                                  <td>EC229.L11</td>
                                  <td>Pháp luật trong thương mại điện tử</td>
                                  <td>HTTT</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 678, P.C308<br></td>
                                  <td>Nguyễn Thị Hạnh - 80448</td>
                                  <td>80</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC331.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec331l11"
                                        name="table_lophoc[EC331.L11]" value="EC331.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC331</td>
                                  <td>EC331.L11</td>
                                  <td>Quản trị chiến lược kinh doanh điện tử</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B3.20<br></td>
                                  <td>Nguyễn Thị Hạnh - 80448</td>
                                  <td>80</td>
                                  <td>78</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-EC335.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ec335l11"
                                        name="table_lophoc[EC335.L11]" value="EC335.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>EC335</td>
                                  <td>EC335.L11</td>
                                  <td>An toàn và bảo mật thương mại điện tử</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.B3.20<br></td>
                                  <td>Nguyễn Tấn Cầm - 10345</td>
                                  <td>80</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE103.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie103l11"
                                        name="table_lophoc[IE103.L11]" value="IE103.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE103</td>
                                  <td>IE103.L11</td>
                                  <td>Quản lý thông tin</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.B5.14<br></td>
                                  <td>Nguyễn Gia Tuấn Anh - 80240</td>
                                  <td>100</td>
                                  <td>11</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE103.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie103l111"
                                        name="table_lophoc[IE103.L11.1]" value="IE103.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE103</td>
                                  <td>
                                    <p style="color:#ff8040">IE103.L11.1</p>
                                  </td>
                                  <td>Quản lý thông tin (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.B5.02<br></td>
                                  <td>Lưu Thanh Sơn - 80438</td>
                                  <td>50</td>
                                  <td>9</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE103.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ie103l112"
                                        name="table_lophoc[IE103.L11.2]" value="IE103.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE103</td>
                                  <td>
                                    <p style="color:#ff8040">IE103.L11.2</p>
                                  </td>
                                  <td>Quản lý thông tin (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.B5.02<br></td>
                                  <td>Lưu Thanh Sơn - 80438</td>
                                  <td>50</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE104.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie104l11"
                                        name="table_lophoc[IE104.L11]" value="IE104.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE104</td>
                                  <td>IE104.L11</td>
                                  <td>Internet và công nghệ Web</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 1234, P.B3.18<br></td>
                                  <td>Võ Tấn Khoa - 80266</td>
                                  <td>100</td>
                                  <td>80</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE104.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ie104l12"
                                        name="table_lophoc[IE104.L12]" value="IE104.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE104</td>
                                  <td>IE104.L12</td>
                                  <td>Internet và công nghệ Web</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 6789, P.B3.18<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>100</td>
                                  <td>80</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE105.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ie105l12"
                                        name="table_lophoc[IE105.L12]" value="IE105.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE105</td>
                                  <td>IE105.L12</td>
                                  <td>Nhập môn bảo đảm và an ninh thông tin</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 123, P.B3.16<br></td>
                                  <td>Phan Thế Duy - 80357</td>
                                  <td>80</td>
                                  <td>55</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE105.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie105l121"
                                        name="table_lophoc[IE105.L12.1]" value="IE105.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE105</td>
                                  <td>
                                    <p style="color:#ff8040">IE105.L12.1</p>
                                  </td>
                                  <td>Nhập môn bảo đảm và an ninh thông tin (HT2)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Đỗ Hoàng Hiển - 80400</td>
                                  <td>80</td>
                                  <td>55</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE106.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ie106l12"
                                        name="table_lophoc[IE106.L12]" value="IE106.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE106</td>
                                  <td>IE106.L12</td>
                                  <td>Thiết kế giao diện người dùng</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 7890, P.B3.16<br></td>
                                  <td>Tạ Thu Thủy - 80275</td>
                                  <td>100</td>
                                  <td>99</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE106.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie106l121"
                                        name="table_lophoc[IE106.L12.1]" value="IE106.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE106</td>
                                  <td>
                                    <p style="color:#ff8040">IE106.L12.1</p>
                                  </td>
                                  <td>Thiết kế giao diện người dùng (HT2)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Tạ Thu Thủy - 80275</td>
                                  <td>100</td>
                                  <td>99</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE202.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie202l11"
                                        name="table_lophoc[IE202.L11]" value="IE202.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE202</td>
                                  <td>IE202.L11</td>
                                  <td>Quản trị doanh nghiệp</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B5.14<br></td>
                                  <td>Hồ Thị Thanh Thảo - 80242</td>
                                  <td>100</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE206.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie206l11"
                                        name="table_lophoc[IE206.L11]" value="IE206.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE206</td>
                                  <td>
                                    <p style="color:#ff8040">IE206.L11</p>
                                  </td>
                                  <td>Đồ án chuẩn bị tốt nghiệp (DA)</td>
                                  <td>KTTT</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 12345, P.C309<br></td>
                                  <td>Phạm Thế Sơn - 80265</td>
                                  <td>50</td>
                                  <td>49</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE206.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ie206l12"
                                        name="table_lophoc[IE206.L12]" value="IE206.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE206</td>
                                  <td>
                                    <p style="color:#ff8040">IE206.L12</p>
                                  </td>
                                  <td>Đồ án chuẩn bị tốt nghiệp (DA)</td>
                                  <td>KTTT</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 67890, P.C111<br></td>
                                  <td>Nguyễn Gia Tuấn Anh - 80240<br>Phạm Thế Sơn - 80265</td>
                                  <td>50</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l11"
                                        name="table_lophoc[IE307.L11]" value="IE307.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>IE307.L11</td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 6789, P.B5.14<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>80</td>
                                  <td>60</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l111"
                                        name="table_lophoc[IE307.L11.1]" value="IE307.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>
                                    <p style="color:#ff8040">IE307.L11.1</p>
                                  </td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động (HT1 - Học cách
                                    <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.C307<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>40</td>
                                  <td>38</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l112"
                                        name="table_lophoc[IE307.L11.2]" value="IE307.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>
                                    <p style="color:#ff8040">IE307.L11.2</p>
                                  </td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động (HT1 - Học cách
                                    <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.C307<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>40</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l12"
                                        name="table_lophoc[IE307.L12]" value="IE307.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>IE307.L12</td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 6789, P.B5.14<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>80</td>
                                  <td>19</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l121"
                                        name="table_lophoc[IE307.L12.1]" value="IE307.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>
                                    <p style="color:#ff8040">IE307.L12.1</p>
                                  </td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động (HT1 - Học cách
                                    <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C211<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>40</td>
                                  <td>18</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE307.L12.2">
                                      <input type="checkbox" id="edit-table-lophoc-ie307l122"
                                        name="table_lophoc[IE307.L12.2]" value="IE307.L12.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE307</td>
                                  <td>
                                    <p style="color:#ff8040">IE307.L12.2</p>
                                  </td>
                                  <td>Công nghệ lập trình đa nền tảng cho ứng dụng di động (HT1 - Học cách
                                    <strong>2</strong> tuần)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C211<br></td>
                                  <td>Võ Ngọc Tân - 80348</td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE402.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ie402l11"
                                        name="table_lophoc[IE402.L11]" value="IE402.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE402</td>
                                  <td>IE402.L11</td>
                                  <td>Hệ thống thông tin địa lý 3 chiều</td>
                                  <td>KTTT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 123, P.B5.14<br></td>
                                  <td>Phan Thanh Vũ - 10764</td>
                                  <td>100</td>
                                  <td>68</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IE402.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ie402l111"
                                        name="table_lophoc[IE402.L11.1]" value="IE402.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IE402</td>
                                  <td>
                                    <p style="color:#ff8040">IE402.L11.1</p>
                                  </td>
                                  <td>Hệ thống thông tin địa lý 3 chiều (HT2)</td>
                                  <td>KTTT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Phan Thanh Vũ - 10764</td>
                                  <td>100</td>
                                  <td>68</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is005l11"
                                        name="table_lophoc[IS005.L11]" value="IS005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS005</td>
                                  <td>IS005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Hệ thống Thông tin</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 123, P.B1.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS207.L12">
                                      <input type="checkbox" id="edit-table-lophoc-is207l12"
                                        name="table_lophoc[IS207.L12]" value="IS207.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS207</td>
                                  <td>IS207.L12</td>
                                  <td>Phát triển ứng dụng web</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 1234, P.B1.12<br></td>
                                  <td>Mai Xuân Hùng - 80064</td>
                                  <td>50</td>
                                  <td>46</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS207.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-is207l121"
                                        name="table_lophoc[IS207.L12.1]" value="IS207.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS207</td>
                                  <td>
                                    <p style="color:#ff8040">IS207.L12.1</p>
                                  </td>
                                  <td>Phát triển ứng dụng web (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.C310<br></td>
                                  <td>Mai Xuân Hùng - 80064</td>
                                  <td>50</td>
                                  <td>46</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS217.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is217l11"
                                        name="table_lophoc[IS217.L11]" value="IS217.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS217</td>
                                  <td>IS217.L11</td>
                                  <td>Kho dữ liệu và OLAP</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 1234, P.B1.12<br></td>
                                  <td>Đỗ Thị Minh Phụng - 80142</td>
                                  <td>50</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS217.L12">
                                      <input type="checkbox" id="edit-table-lophoc-is217l12"
                                        name="table_lophoc[IS217.L12]" value="IS217.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS217</td>
                                  <td>IS217.L12</td>
                                  <td>Kho dữ liệu và OLAP</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 6789, P.B3.18<br></td>
                                  <td>Đỗ Thị Minh Phụng - 80142</td>
                                  <td>100</td>
                                  <td>43</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS220.L12">
                                      <input type="checkbox" id="edit-table-lophoc-is220l12"
                                        name="table_lophoc[IS220.L12]" value="IS220.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS220</td>
                                  <td>IS220.L12</td>
                                  <td>Xây dựng HTTT trên các framework</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B1.12<br></td>
                                  <td>Mai Xuân Hùng - 80064</td>
                                  <td>50</td>
                                  <td>31</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS220.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-is220l121"
                                        name="table_lophoc[IS220.L12.1]" value="IS220.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS220</td>
                                  <td>
                                    <p style="color:#ff8040">IS220.L12.1</p>
                                  </td>
                                  <td>Xây dựng HTTT trên các framework (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C310<br></td>
                                  <td>Mai Xuân Hùng - 80064</td>
                                  <td>50</td>
                                  <td>31</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS232.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is232l11"
                                        name="table_lophoc[IS232.L11]" value="IS232.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS232</td>
                                  <td>IS232.L11</td>
                                  <td>Hệ thống thông tin kế toán</td>
                                  <td>HTTT</td>
                                  <td>4</td>
                                  <td>Thứ 6, Tiết 12345, P.B3.22<br></td>
                                  <td>Đỗ Duy Thanh - 80249</td>
                                  <td>80</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS252.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is252l11"
                                        name="table_lophoc[IS252.L11]" value="IS252.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS252</td>
                                  <td>IS252.L11</td>
                                  <td>Khai thác dữ liệu</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 6789, P.B3.20<br></td>
                                  <td>Cao Thị Nhạn - 80131</td>
                                  <td>80</td>
                                  <td>79</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS252.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-is252l112"
                                        name="table_lophoc[IS252.L11.2]" value="IS252.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS252</td>
                                  <td>
                                    <p style="color:#ff8040">IS252.L11.2</p>
                                  </td>
                                  <td>Khai thác dữ liệu (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C307<br></td>
                                  <td>Nguyễn Hồ Duy Trí - 80301</td>
                                  <td>40</td>
                                  <td>39</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS254.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is254l11"
                                        name="table_lophoc[IS254.L11]" value="IS254.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS254</td>
                                  <td>IS254.L11</td>
                                  <td>Hệ hỗ trợ quyết định</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B3.22<br></td>
                                  <td>Dương Minh Đức - 80311</td>
                                  <td>80</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS334.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is334l11"
                                        name="table_lophoc[IS334.L11]" value="IS334.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS334</td>
                                  <td>IS334.L11</td>
                                  <td>Thương mại điện tử</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.B3.22<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>75</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS335.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is335l11"
                                        name="table_lophoc[IS335.L11]" value="IS335.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS335</td>
                                  <td>IS335.L11</td>
                                  <td>An toàn và bảo mật hệ thống thông tin</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B4.20<br></td>
                                  <td>Phan Thế Duy - 80357</td>
                                  <td>80</td>
                                  <td>29</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS353.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is353l11"
                                        name="table_lophoc[IS353.L11]" value="IS353.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS353</td>
                                  <td>IS353.L11</td>
                                  <td>Mạng xã hội</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 1234, P.C308<br></td>
                                  <td>Nguyễn Thị Kim Phụng - 80143</td>
                                  <td>80</td>
                                  <td>79</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS405.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is405l11"
                                        name="table_lophoc[IS405.L11]" value="IS405.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS405</td>
                                  <td>IS405.L11</td>
                                  <td>Dữ liệu lớn</td>
                                  <td>HTTT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.B3.20<br></td>
                                  <td>Nguyễn Hồ Duy Tri - 80339</td>
                                  <td>80</td>
                                  <td>76</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS405.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-is405l112"
                                        name="table_lophoc[IS405.L11.2]" value="IS405.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS405</td>
                                  <td>
                                    <p style="color:#ff8040">IS405.L11.2</p>
                                  </td>
                                  <td>Dữ liệu lớn (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>HTTT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 12345, P.C307<br></td>
                                  <td>Nguyễn Hồ Duy Tri - 80339</td>
                                  <td>40</td>
                                  <td>36</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IS502.L11">
                                      <input type="checkbox" id="edit-table-lophoc-is502l11"
                                        name="table_lophoc[IS502.L11]" value="IS502.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IS502</td>
                                  <td>IS502.L11</td>
                                  <td>Thực tập doanh nghiệp</td>
                                  <td>HTTT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>46</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it001l11"
                                        name="table_lophoc[IT001.L11]" value="IT001.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L11</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 6789, P.B5.08<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l111"
                                        name="table_lophoc[IT001.L11.1]" value="IT001.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L11.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.A205<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l112"
                                        name="table_lophoc[IT001.L11.2]" value="IT001.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L11.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.A205<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L12">
                                      <input type="checkbox" id="edit-table-lophoc-it001l12"
                                        name="table_lophoc[IT001.L12]" value="IT001.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L12</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 6789, P.B4.14<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l121"
                                        name="table_lophoc[IT001.L12.1]" value="IT001.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L12.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L12.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l122"
                                        name="table_lophoc[IT001.L12.2]" value="IT001.L12.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L12.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L13">
                                      <input type="checkbox" id="edit-table-lophoc-it001l13"
                                        name="table_lophoc[IT001.L13]" value="IT001.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L13</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B4.14<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L13.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l131"
                                        name="table_lophoc[IT001.L13.1]" value="IT001.L13.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L13.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L13.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l132"
                                        name="table_lophoc[IT001.L13.2]" value="IT001.L13.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L13.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L14">
                                      <input type="checkbox" id="edit-table-lophoc-it001l14"
                                        name="table_lophoc[IT001.L14]" value="IT001.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L14</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B5.08<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L14.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l141"
                                        name="table_lophoc[IT001.L14.1]" value="IT001.L14.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L14.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L14.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l142"
                                        name="table_lophoc[IT001.L14.2]" value="IT001.L14.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L14.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L15">
                                      <input type="checkbox" id="edit-table-lophoc-it001l15"
                                        name="table_lophoc[IT001.L15]" value="IT001.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L15</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 1234, P.C312<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L15.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l151"
                                        name="table_lophoc[IT001.L15.1]" value="IT001.L15.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L15.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L15.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l152"
                                        name="table_lophoc[IT001.L15.2]" value="IT001.L15.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L15.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L16">
                                      <input type="checkbox" id="edit-table-lophoc-it001l16"
                                        name="table_lophoc[IT001.L16]" value="IT001.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L16</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 1234, P.B3.14<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L16.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l161"
                                        name="table_lophoc[IT001.L16.1]" value="IT001.L16.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L16.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L16.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l162"
                                        name="table_lophoc[IT001.L16.2]" value="IT001.L16.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L16.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L17">
                                      <input type="checkbox" id="edit-table-lophoc-it001l17"
                                        name="table_lophoc[IT001.L17]" value="IT001.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L17</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.B3.14<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L17.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l171"
                                        name="table_lophoc[IT001.L17.1]" value="IT001.L17.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L17.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L17.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l172"
                                        name="table_lophoc[IT001.L17.2]" value="IT001.L17.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L17.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L18">
                                      <input type="checkbox" id="edit-table-lophoc-it001l18"
                                        name="table_lophoc[IT001.L18]" value="IT001.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L18</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.C308<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L18.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l181"
                                        name="table_lophoc[IT001.L18.1]" value="IT001.L18.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L18.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L18.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l182"
                                        name="table_lophoc[IT001.L18.2]" value="IT001.L18.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L18.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.B5.02<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L19">
                                      <input type="checkbox" id="edit-table-lophoc-it001l19"
                                        name="table_lophoc[IT001.L19]" value="IT001.L19" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>IT001.L19</td>
                                  <td>Nhập môn lập trình</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 6789, P.C312<br></td>
                                  <td></td>
                                  <td>80</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L19.1">
                                      <input type="checkbox" id="edit-table-lophoc-it001l191"
                                        name="table_lophoc[IT001.L19.1]" value="IT001.L19.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L19.1</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT001.L19.2">
                                      <input type="checkbox" id="edit-table-lophoc-it001l192"
                                        name="table_lophoc[IT001.L19.2]" value="IT001.L19.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT001</td>
                                  <td>
                                    <p style="color:#ff8040">IT001.L19.2</p>
                                  </td>
                                  <td>Nhập môn lập trình (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.A213<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT002.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it002l11"
                                        name="table_lophoc[IT002.L11]" value="IT002.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT002</td>
                                  <td>IT002.L11</td>
                                  <td>Lập trình hướng đối tượng</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.B3.14<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>100</td>
                                  <td>35</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT002.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it002l111"
                                        name="table_lophoc[IT002.L11.1]" value="IT002.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT002</td>
                                  <td>
                                    <p style="color:#ff8040">IT002.L11.1</p>
                                  </td>
                                  <td>Lập trình hướng đối tượng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C214<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>50</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT002.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it002l112"
                                        name="table_lophoc[IT002.L11.2]" value="IT002.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT002</td>
                                  <td>
                                    <p style="color:#ff8040">IT002.L11.2</p>
                                  </td>
                                  <td>Lập trình hướng đối tượng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C214<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>50</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it003l11"
                                        name="table_lophoc[IT003.L11]" value="IT003.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>IT003.L11</td>
                                  <td>Cấu trúc dữ liệu và giải thuật</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.B4.14<br></td>
                                  <td>Đỗ Văn Tiến - 80197</td>
                                  <td>80</td>
                                  <td>50</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it003l111"
                                        name="table_lophoc[IT003.L11.1]" value="IT003.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>
                                    <p style="color:#ff8040">IT003.L11.1</p>
                                  </td>
                                  <td>Cấu trúc dữ liệu và giải thuật (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.C309<br></td>
                                  <td>Đỗ Văn Tiến - 80197</td>
                                  <td>40</td>
                                  <td>39</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it003l112"
                                        name="table_lophoc[IT003.L11.2]" value="IT003.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>
                                    <p style="color:#ff8040">IT003.L11.2</p>
                                  </td>
                                  <td>Cấu trúc dữ liệu và giải thuật (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.C309<br></td>
                                  <td>Đỗ Văn Tiến - 80197</td>
                                  <td>40</td>
                                  <td>11</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L12">
                                      <input type="checkbox" id="edit-table-lophoc-it003l12"
                                        name="table_lophoc[IT003.L12]" value="IT003.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>IT003.L12</td>
                                  <td>Cấu trúc dữ liệu và giải thuật</td>
                                  <td>KHMT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 678, P.B5.08<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288</td>
                                  <td>80</td>
                                  <td>18</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-it003l121"
                                        name="table_lophoc[IT003.L12.1]" value="IT003.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>
                                    <p style="color:#ff8040">IT003.L12.1</p>
                                  </td>
                                  <td>Cấu trúc dữ liệu và giải thuật (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C307<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288</td>
                                  <td>40</td>
                                  <td>17</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT003.L12.2">
                                      <input type="checkbox" id="edit-table-lophoc-it003l122"
                                        name="table_lophoc[IT003.L12.2]" value="IT003.L12.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT003</td>
                                  <td>
                                    <p style="color:#ff8040">IT003.L12.2</p>
                                  </td>
                                  <td>Cấu trúc dữ liệu và giải thuật (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KHMT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 12345, P.C307<br></td>
                                  <td>Nguyễn Trọng Chỉnh - 80288</td>
                                  <td>40</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L15">
                                      <input type="checkbox" id="edit-table-lophoc-it005l15"
                                        name="table_lophoc[IT005.L15]" value="IT005.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>IT005.L15</td>
                                  <td>Nhập môn mạng máy tính</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 123, P.B5.08<br></td>
                                  <td>Nguyễn Phước Bảo Long - 80441</td>
                                  <td>95</td>
                                  <td>89</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L15.2">
                                      <input type="checkbox" id="edit-table-lophoc-it005l152"
                                        name="table_lophoc[IT005.L15.2]" value="IT005.L15.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>
                                    <p style="color:#ff8040">IT005.L15.2</p>
                                  </td>
                                  <td>Nhập môn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 67890, P.C211<br></td>
                                  <td>Nguyễn Mạnh Hoàng - 80059</td>
                                  <td>48</td>
                                  <td>42</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L17">
                                      <input type="checkbox" id="edit-table-lophoc-it005l17"
                                        name="table_lophoc[IT005.L17]" value="IT005.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>IT005.L17</td>
                                  <td>Nhập môn mạng máy tính</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 123, P.C311<br></td>
                                  <td>Trần Thị Dung - 80290</td>
                                  <td>95</td>
                                  <td>89</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L17.1">
                                      <input type="checkbox" id="edit-table-lophoc-it005l171"
                                        name="table_lophoc[IT005.L17.1]" value="IT005.L17.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>
                                    <p style="color:#ff8040">IT005.L17.1</p>
                                  </td>
                                  <td>Nhập môn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C309<br></td>
                                  <td></td>
                                  <td>47</td>
                                  <td>46</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L17.2">
                                      <input type="checkbox" id="edit-table-lophoc-it005l172"
                                        name="table_lophoc[IT005.L17.2]" value="IT005.L17.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>
                                    <p style="color:#ff8040">IT005.L17.2</p>
                                  </td>
                                  <td>Nhập môn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C309<br></td>
                                  <td></td>
                                  <td>48</td>
                                  <td>43</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L18">
                                      <input type="checkbox" id="edit-table-lophoc-it005l18"
                                        name="table_lophoc[IT005.L18]" value="IT005.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>IT005.L18</td>
                                  <td>Nhập môn mạng máy tính</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 678, P.C308<br></td>
                                  <td>Đặng Lê Bảo Chương - 80334</td>
                                  <td>95</td>
                                  <td>65</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT005.L18.2">
                                      <input type="checkbox" id="edit-table-lophoc-it005l182"
                                        name="table_lophoc[IT005.L18.2]" value="IT005.L18.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT005</td>
                                  <td>
                                    <p style="color:#ff8040">IT005.L18.2</p>
                                  </td>
                                  <td>Nhập môn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C211<br></td>
                                  <td>Nguyễn Thanh Nam - 80374</td>
                                  <td>48</td>
                                  <td>18</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT006.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it006l11"
                                        name="table_lophoc[IT006.L11]" value="IT006.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT006</td>
                                  <td>IT006.L11</td>
                                  <td>Kiến trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.C114<br></td>
                                  <td>Phạm Minh Quân - 80385</td>
                                  <td>60</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT006.L13">
                                      <input type="checkbox" id="edit-table-lophoc-it006l13"
                                        name="table_lophoc[IT006.L13]" value="IT006.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT006</td>
                                  <td>IT006.L13</td>
                                  <td>Kiến trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 678, P.C114<br></td>
                                  <td>Hà Lê Hoài Trung - 80211</td>
                                  <td>60</td>
                                  <td>30</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT006.L14">
                                      <input type="checkbox" id="edit-table-lophoc-it006l14"
                                        name="table_lophoc[IT006.L14]" value="IT006.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT006</td>
                                  <td>IT006.L14</td>
                                  <td>Kiến trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.C114<br></td>
                                  <td></td>
                                  <td>60</td>
                                  <td>19</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT006.L15">
                                      <input type="checkbox" id="edit-table-lophoc-it006l15"
                                        name="table_lophoc[IT006.L15]" value="IT006.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT006</td>
                                  <td>IT006.L15</td>
                                  <td>Kiến trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.C114<br></td>
                                  <td></td>
                                  <td>60</td>
                                  <td>55</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT006.L16">
                                      <input type="checkbox" id="edit-table-lophoc-it006l16"
                                        name="table_lophoc[IT006.L16]" value="IT006.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT006</td>
                                  <td>IT006.L16</td>
                                  <td>Kiến trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 123, P.C114<br></td>
                                  <td>Lầu Phi Tường - 80383</td>
                                  <td>60</td>
                                  <td>54</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it007l11"
                                        name="table_lophoc[IT007.L11]" value="IT007.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>IT007.L11</td>
                                  <td>Hệ điều hành</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 678, P.C114<br></td>
                                  <td>Lầu Phi Tường - 80383</td>
                                  <td>100</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it007l111"
                                        name="table_lophoc[IT007.L11.1]" value="IT007.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L11.1</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C111<br></td>
                                  <td>Trần Hoàng Lộc - 80402</td>
                                  <td>50</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it007l112"
                                        name="table_lophoc[IT007.L11.2]" value="IT007.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L11.2</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C111<br></td>
                                  <td>Trần Hoàng Lộc - 80402</td>
                                  <td>50</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L12">
                                      <input type="checkbox" id="edit-table-lophoc-it007l12"
                                        name="table_lophoc[IT007.L12]" value="IT007.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>IT007.L12</td>
                                  <td>Hệ điều hành</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 123, P.C114<br></td>
                                  <td>Lầu Phi Tường - 80383</td>
                                  <td>100</td>
                                  <td>48</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-it007l121"
                                        name="table_lophoc[IT007.L12.1]" value="IT007.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L12.1</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 67890, P.C214<br></td>
                                  <td>Lầu Phi Tường - 80383</td>
                                  <td>50</td>
                                  <td>33</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L12.2">
                                      <input type="checkbox" id="edit-table-lophoc-it007l122"
                                        name="table_lophoc[IT007.L12.2]" value="IT007.L12.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L12.2</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 67890, P.C214<br></td>
                                  <td>Lầu Phi Tường - 80383</td>
                                  <td>50</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L13">
                                      <input type="checkbox" id="edit-table-lophoc-it007l13"
                                        name="table_lophoc[IT007.L13]" value="IT007.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>IT007.L13</td>
                                  <td>Hệ điều hành</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.C113<br></td>
                                  <td>Nguyễn Thanh Thiện - 80354</td>
                                  <td>100</td>
                                  <td>17</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L13.1">
                                      <input type="checkbox" id="edit-table-lophoc-it007l131"
                                        name="table_lophoc[IT007.L13.1]" value="IT007.L13.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L13.1</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C214<br></td>
                                  <td>Nguyễn Thanh Thiện - 80354</td>
                                  <td>50</td>
                                  <td>14</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT007.L13.2">
                                      <input type="checkbox" id="edit-table-lophoc-it007l132"
                                        name="table_lophoc[IT007.L13.2]" value="IT007.L13.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT007</td>
                                  <td>
                                    <p style="color:#ff8040">IT007.L13.2</p>
                                  </td>
                                  <td>Hệ điều hành (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C214<br></td>
                                  <td>Nguyễn Thanh Thiện - 80354</td>
                                  <td>50</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT008.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it008l11"
                                        name="table_lophoc[IT008.L11]" value="IT008.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT008</td>
                                  <td>IT008.L11</td>
                                  <td>Lập trình trực quan</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 678, P.B6.06<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>120</td>
                                  <td>106</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT008.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it008l111"
                                        name="table_lophoc[IT008.L11.1]" value="IT008.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT008</td>
                                  <td>
                                    <p style="color:#ff8040">IT008.L11.1</p>
                                  </td>
                                  <td>Lập trình trực quan (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C307<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>60</td>
                                  <td>56</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT008.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it008l112"
                                        name="table_lophoc[IT008.L11.2]" value="IT008.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT008</td>
                                  <td>
                                    <p style="color:#ff8040">IT008.L11.2</p>
                                  </td>
                                  <td>Lập trình trực quan (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C307<br></td>
                                  <td>Nguyễn Tấn Toàn - 80320</td>
                                  <td>60</td>
                                  <td>50</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT010.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it010l11"
                                        name="table_lophoc[IT010.L11]" value="IT010.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT010</td>
                                  <td>IT010.L11</td>
                                  <td>Tổ chức và cấu trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 678, P.C113<br></td>
                                  <td>Trương Văn Cương - 80349</td>
                                  <td>100</td>
                                  <td>22</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT010.L12">
                                      <input type="checkbox" id="edit-table-lophoc-it010l12"
                                        name="table_lophoc[IT010.L12]" value="IT010.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT010</td>
                                  <td>IT010.L12</td>
                                  <td>Tổ chức và cấu trúc máy tính</td>
                                  <td>KTMT</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 678, P.C114<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L11">
                                      <input type="checkbox" id="edit-table-lophoc-it012l11"
                                        name="table_lophoc[IT012.L11]" value="IT012.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>IT012.L11</td>
                                  <td>Tổ chức và Cấu trúc Máy tính II</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B3.14<br></td>
                                  <td>Hà Lê Hoài Trung - 80211</td>
                                  <td>100</td>
                                  <td>36</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-it012l111"
                                        name="table_lophoc[IT012.L11.1]" value="IT012.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L11.1</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.C110<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>35</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-it012l112"
                                        name="table_lophoc[IT012.L11.2]" value="IT012.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L11.2</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.C110<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L12">
                                      <input type="checkbox" id="edit-table-lophoc-it012l12"
                                        name="table_lophoc[IT012.L12]" value="IT012.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>IT012.L12</td>
                                  <td>Tổ chức và Cấu trúc Máy tính II</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.C311<br></td>
                                  <td></td>
                                  <td>90</td>
                                  <td>79</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L12.2">
                                      <input type="checkbox" id="edit-table-lophoc-it012l122"
                                        name="table_lophoc[IT012.L12.2]" value="IT012.L12.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L12.2</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 12345, P.C214<br></td>
                                  <td>Nguyễn Mạnh Thảo - 80437</td>
                                  <td>45</td>
                                  <td>34</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L13">
                                      <input type="checkbox" id="edit-table-lophoc-it012l13"
                                        name="table_lophoc[IT012.L13]" value="IT012.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>IT012.L13</td>
                                  <td>Tổ chức và Cấu trúc Máy tính II</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 1234, P.C113<br></td>
                                  <td></td>
                                  <td>90</td>
                                  <td>21</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L13.1">
                                      <input type="checkbox" id="edit-table-lophoc-it012l131"
                                        name="table_lophoc[IT012.L13.1]" value="IT012.L13.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L13.1</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C214<br></td>
                                  <td></td>
                                  <td>45</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L13.2">
                                      <input type="checkbox" id="edit-table-lophoc-it012l132"
                                        name="table_lophoc[IT012.L13.2]" value="IT012.L13.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L13.2</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C214<br></td>
                                  <td></td>
                                  <td>45</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L14">
                                      <input type="checkbox" id="edit-table-lophoc-it012l14"
                                        name="table_lophoc[IT012.L14]" value="IT012.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>IT012.L14</td>
                                  <td>Tổ chức và Cấu trúc Máy tính II</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.C305<br></td>
                                  <td></td>
                                  <td>90</td>
                                  <td>82</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L14.1">
                                      <input type="checkbox" id="edit-table-lophoc-it012l141"
                                        name="table_lophoc[IT012.L14.1]" value="IT012.L14.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L14.1</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C214<br></td>
                                  <td>Trần Hoàng Lộc - 80402</td>
                                  <td>45</td>
                                  <td>44</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-IT012.L14.2">
                                      <input type="checkbox" id="edit-table-lophoc-it012l142"
                                        name="table_lophoc[IT012.L14.2]" value="IT012.L14.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>IT012</td>
                                  <td>
                                    <p style="color:#ff8040">IT012.L14.2</p>
                                  </td>
                                  <td>Tổ chức và Cấu trúc Máy tính II (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 67890, P.C214<br></td>
                                  <td>Trần Hoàng Lộc - 80402</td>
                                  <td>45</td>
                                  <td>38</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l11"
                                        name="table_lophoc[MA003.L11]" value="MA003.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L11</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B4.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l12"
                                        name="table_lophoc[MA003.L12]" value="MA003.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L12</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B3.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l13"
                                        name="table_lophoc[MA003.L13]" value="MA003.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L13</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.B4.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L14">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l14"
                                        name="table_lophoc[MA003.L14]" value="MA003.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L14</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 1234, P.C312<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L15">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l15"
                                        name="table_lophoc[MA003.L15]" value="MA003.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L15</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.B4.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L16">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l16"
                                        name="table_lophoc[MA003.L16]" value="MA003.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L16</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.C305<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L17">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l17"
                                        name="table_lophoc[MA003.L17]" value="MA003.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L17</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.B3.14<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L18">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l18"
                                        name="table_lophoc[MA003.L18]" value="MA003.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L18</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.C305<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA003.L19">
                                      <input type="checkbox" id="edit-table-lophoc-ma003l19"
                                        name="table_lophoc[MA003.L19]" value="MA003.L19" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA003</td>
                                  <td>MA003.L19</td>
                                  <td>Đại số tuyến tính</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.B5.08<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ma005l11"
                                        name="table_lophoc[MA005.L11]" value="MA005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA005</td>
                                  <td>MA005.L11</td>
                                  <td>Xác suất thống kê</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B5.08<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>14</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA005.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ma005l12"
                                        name="table_lophoc[MA005.L12]" value="MA005.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA005</td>
                                  <td>MA005.L12</td>
                                  <td>Xác suất thống kê</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.C113<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>34</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA005.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ma005l13"
                                        name="table_lophoc[MA005.L13]" value="MA005.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA005</td>
                                  <td>MA005.L13</td>
                                  <td>Xác suất thống kê</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.B5.08<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l11"
                                        name="table_lophoc[MA006.L11]" value="MA006.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L11</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 5, Tiết 90, P.C312<br>Thứ 3, Tiết 678, P.C312<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>10</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l12"
                                        name="table_lophoc[MA006.L12]" value="MA006.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L12</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 5, Tiết 678, P.C312<br>Thứ 3, Tiết 90, P.C312<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l13"
                                        name="table_lophoc[MA006.L13]" value="MA006.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L13</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 90, P.C305<br>Thứ 5, Tiết 678, P.C308<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L14">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l14"
                                        name="table_lophoc[MA006.L14]" value="MA006.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L14</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 678, P.C305<br>Thứ 5, Tiết 90, P.C308<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L15">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l15"
                                        name="table_lophoc[MA006.L15]" value="MA006.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L15</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 45, P.C312<br>Thứ 7, Tiết 123, P.C305<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L16">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l16"
                                        name="table_lophoc[MA006.L16]" value="MA006.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L16</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 4, Tiết 123, P.C114<br>Thứ 7, Tiết 45, P.C114<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L17">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l17"
                                        name="table_lophoc[MA006.L17]" value="MA006.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L17</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 6, Tiết 45, P.C308<br>Thứ 4, Tiết 123, P.C312<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L18">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l18"
                                        name="table_lophoc[MA006.L18]" value="MA006.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L18</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 6, Tiết 123, P.C308<br>Thứ 4, Tiết 45, P.C308<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-MA006.L19">
                                      <input type="checkbox" id="edit-table-lophoc-ma006l19"
                                        name="table_lophoc[MA006.L19]" value="MA006.L19" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>MA006</td>
                                  <td>MA006.L19</td>
                                  <td>Giải tích</td>
                                  <td>BMTL</td>
                                  <td>4</td>
                                  <td>Thứ 5, Tiết 90, P.C113<br>Thứ 3, Tiết 678, P.B4.14<br></td>
                                  <td>
                                  </td>
                                  <td>100</td>
                                  <td>2</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt005l11"
                                        name="table_lophoc[NT005.L11]" value="NT005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT005</td>
                                  <td>NT005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Mạng máy tính và Truyền thông dữ liệu</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 678, P.B1.14<br></td>
                                  <td>Trần Thị Dung - 80290</td>
                                  <td>100</td>
                                  <td>7</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT015.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt015l11"
                                        name="table_lophoc[NT015.L11]" value="NT015.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT015</td>
                                  <td>NT015.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;An toàn Thông tin</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 2, Tiết 678, P.B1.14<br></td>
                                  <td>Trần Thị Dung - 80290</td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT101.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt101l11antt"
                                        name="table_lophoc[NT101.L11.ANTT]" value="NT101.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT101</td>
                                  <td>NT101.L11.ANTT</td>
                                  <td>An toàn mạng máy tính</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 678, P.B6.12<br></td>
                                  <td>Lê Đức Thịnh - 80180</td>
                                  <td>90</td>
                                  <td>53</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT101.L11.ANTT.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt101l11antt1"
                                        name="table_lophoc[NT101.L11.ANTT.1]" value="NT101.L11.ANTT.1"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT101</td>
                                  <td>
                                    <p style="color:#ff8040">NT101.L11.ANTT.1</p>
                                  </td>
                                  <td>An toàn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.C211<br></td>
                                  <td>Nghi Hoàng Khoa - 80418</td>
                                  <td>35</td>
                                  <td>32</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT101.L11.ANTT.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt101l11antt2"
                                        name="table_lophoc[NT101.L11.ANTT.2]" value="NT101.L11.ANTT.2"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT101</td>
                                  <td>
                                    <p style="color:#ff8040">NT101.L11.ANTT.2</p>
                                  </td>
                                  <td>An toàn mạng máy tính (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 12345, P.C211<br></td>
                                  <td>Nghi Hoàng Khoa - 80418</td>
                                  <td>35</td>
                                  <td>21</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT113.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt113l11"
                                        name="table_lophoc[NT113.L11]" value="NT113.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT113</td>
                                  <td>NT113.L11</td>
                                  <td>Thiết kế Mạng</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 45, P.B6.08<br></td>
                                  <td>Trần Thị Dung - 80290</td>
                                  <td>70</td>
                                  <td>62</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT113.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt113l111"
                                        name="table_lophoc[NT113.L11.1]" value="NT113.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT113</td>
                                  <td>
                                    <p style="color:#ff8040">NT113.L11.1</p>
                                  </td>
                                  <td>Thiết kế Mạng (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Thị Dung - 80290</td>
                                  <td>70</td>
                                  <td>62</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT114.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt114l11antt"
                                        name="table_lophoc[NT114.L11.ANTT]" value="NT114.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT114</td>
                                  <td>NT114.L11.ANTT</td>
                                  <td>Đồ án chuyên ngành</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>90</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT117.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt117l11"
                                        name="table_lophoc[NT117.L11]" value="NT117.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT117</td>
                                  <td>NT117.L11</td>
                                  <td>Đồ án môn học Lập trình ứng dụng Mạng</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>16</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT118.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt118l11"
                                        name="table_lophoc[NT118.L11]" value="NT118.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT118</td>
                                  <td>NT118.L11</td>
                                  <td>Phát triển ứng dụng trên thiết bị di động</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 678, P.B6.12<br></td>
                                  <td>Trần Hồng Nghi - 80117</td>
                                  <td>100</td>
                                  <td>87</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT118.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt118l111"
                                        name="table_lophoc[NT118.L11.1]" value="NT118.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT118</td>
                                  <td>
                                    <p style="color:#ff8040">NT118.L11.1</p>
                                  </td>
                                  <td>Phát triển ứng dụng trên thiết bị di động (HT1 - Học cách <strong>2</strong> tuần)
                                  </td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C310<br></td>
                                  <td>Trần Hồng Nghi - 80117</td>
                                  <td>50</td>
                                  <td>47</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT118.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt118l112"
                                        name="table_lophoc[NT118.L11.2]" value="NT118.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT118</td>
                                  <td>
                                    <p style="color:#ff8040">NT118.L11.2</p>
                                  </td>
                                  <td>Phát triển ứng dụng trên thiết bị di động (HT1 - Học cách <strong>2</strong> tuần)
                                  </td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.C310<br></td>
                                  <td>Trần Hồng Nghi - 80117</td>
                                  <td>50</td>
                                  <td>40</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT132.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt132l11antt"
                                        name="table_lophoc[NT132.L11.ANTT]" value="NT132.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT132</td>
                                  <td>NT132.L11.ANTT</td>
                                  <td>Quản trị mạng và hệ thống</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 678, P.B6.08<br></td>
                                  <td>Bùi Thanh Bình - 80440</td>
                                  <td>90</td>
                                  <td>55</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT132.L11.ANTT.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt132l11antt2"
                                        name="table_lophoc[NT132.L11.ANTT.2]" value="NT132.L11.ANTT.2"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT132</td>
                                  <td>
                                    <p style="color:#ff8040">NT132.L11.ANTT.2</p>
                                  </td>
                                  <td>Quản trị mạng và hệ thống (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 6, Tiết 12345, P.B4.06<br></td>
                                  <td>Bùi Thanh Bình - 80440</td>
                                  <td>35</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT133.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt133l11antt"
                                        name="table_lophoc[NT133.L11.ANTT]" value="NT133.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT133</td>
                                  <td>NT133.L11.ANTT</td>
                                  <td>An toàn kiến trúc hệ thống</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 23, P.B6.08<br></td>
                                  <td>Trần Tuấn Dũng - 80377</td>
                                  <td>90</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT133.L11.ANTT.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt133l11antt1"
                                        name="table_lophoc[NT133.L11.ANTT.1]" value="NT133.L11.ANTT.1"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT133</td>
                                  <td>
                                    <p style="color:#ff8040">NT133.L11.ANTT.1</p>
                                  </td>
                                  <td>An toàn kiến trúc hệ thống (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Tuấn Dũng - 80377</td>
                                  <td>90</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT207.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt207l11antt"
                                        name="table_lophoc[NT207.L11.ANTT]" value="NT207.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT207</td>
                                  <td>NT207.L11.ANTT</td>
                                  <td>Quản lý rủi ro và an toàn thông tin trong doanh nghiệp</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 7, Tiết 45, P.B6.08<br></td>
                                  <td>Nguyễn Duy - 80037</td>
                                  <td>90</td>
                                  <td>89</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT207.L11.ANTT.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt207l11antt1"
                                        name="table_lophoc[NT207.L11.ANTT.1]" value="NT207.L11.ANTT.1"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT207</td>
                                  <td>
                                    <p style="color:#ff8040">NT207.L11.ANTT.1</p>
                                  </td>
                                  <td>Quản lý rủi ro và an toàn thông tin trong doanh nghiệp (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Duy - 80037</td>
                                  <td>90</td>
                                  <td>89</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT210.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt210l11"
                                        name="table_lophoc[NT210.L11]" value="NT210.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT210</td>
                                  <td>NT210.L11</td>
                                  <td>Thương mại Điện tử và Triển khai ứng dụng</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 5, Tiết 23, P.B6.08<br></td>
                                  <td>Trần Mạnh Hùng - 80066</td>
                                  <td>100</td>
                                  <td>29</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT210.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt210l111"
                                        name="table_lophoc[NT210.L11.1]" value="NT210.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT210</td>
                                  <td>
                                    <p style="color:#ff8040">NT210.L11.1</p>
                                  </td>
                                  <td>Thương mại Điện tử và Triển khai ứng dụng (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Tuấn Dũng - 80377</td>
                                  <td>100</td>
                                  <td>29</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT213.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt213l11antt"
                                        name="table_lophoc[NT213.L11.ANTT]" value="NT213.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT213</td>
                                  <td>NT213.L11.ANTT</td>
                                  <td>Bảo mật web và ứng dụng</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 45, P.B6.08<br></td>
                                  <td>Đỗ Thị Thu Hiền - 80390</td>
                                  <td>90</td>
                                  <td>75</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT213.L11.ANTT.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt213l11antt2"
                                        name="table_lophoc[NT213.L11.ANTT.2]" value="NT213.L11.ANTT.2"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT213</td>
                                  <td>
                                    <p style="color:#ff8040">NT213.L11.ANTT.2</p>
                                  </td>
                                  <td>Bảo mật web và ứng dụng (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 12345, P.A205<br></td>
                                  <td>Nghi Hoàng Khoa - 80418</td>
                                  <td>40</td>
                                  <td>35</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT215.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt215l11"
                                        name="table_lophoc[NT215.L11]" value="NT215.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT215</td>
                                  <td>
                                    <p style="color:#ff8040">NT215.L11</p>
                                  </td>
                                  <td>Thực tập doanh nghiệp (TTTN)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>67</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT215.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt215l11antt"
                                        name="table_lophoc[NT215.L11.ANTT]" value="NT215.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT215</td>
                                  <td>
                                    <p style="color:#ff8040">NT215.L11.ANTT</p>
                                  </td>
                                  <td>Thực tập doanh nghiệp (TTTN)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>90</td>
                                  <td>51</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT332.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt332l11"
                                        name="table_lophoc[NT332.L11]" value="NT332.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT332</td>
                                  <td>NT332.L11</td>
                                  <td>Xử lý tín hiệu trong truyền thông</td>
                                  <td>MMT&amp;TT</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 678, P.B6.08<br></td>
                                  <td>Nguyễn Huỳnh Quốc Việt - 80406</td>
                                  <td>80</td>
                                  <td>35</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT332.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt332l111"
                                        name="table_lophoc[NT332.L11.1]" value="NT332.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT332</td>
                                  <td>
                                    <p style="color:#ff8040">NT332.L11.1</p>
                                  </td>
                                  <td>Xử lý tín hiệu trong truyền thông (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 12345, P.C310<br></td>
                                  <td>Nguyễn Huỳnh Quốc Việt - 80406</td>
                                  <td>40</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT332.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt332l112"
                                        name="table_lophoc[NT332.L11.2]" value="NT332.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT332</td>
                                  <td>
                                    <p style="color:#ff8040">NT332.L11.2</p>
                                  </td>
                                  <td>Xử lý tín hiệu trong truyền thông (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 3, Tiết 12345, P.C310<br></td>
                                  <td>Nguyễn Huỳnh Quốc Việt - 80406</td>
                                  <td>40</td>
                                  <td>15</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT405.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt405l11"
                                        name="table_lophoc[NT405.L11]" value="NT405.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT405</td>
                                  <td>NT405.L11</td>
                                  <td>Bảo mật Internet</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 5, Tiết 45, P.B6.08<br></td>
                                  <td>Tô Nguyễn Nhật Quang - 80154</td>
                                  <td>80</td>
                                  <td>79</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT405.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt405l111"
                                        name="table_lophoc[NT405.L11.1]" value="NT405.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT405</td>
                                  <td>
                                    <p style="color:#ff8040">NT405.L11.1</p>
                                  </td>
                                  <td>Bảo mật Internet (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Tô Nguyễn Nhật Quang - 80154</td>
                                  <td>80</td>
                                  <td>79</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT505.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt505l11"
                                        name="table_lophoc[NT505.L11]" value="NT505.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT505</td>
                                  <td>NT505.L11</td>
                                  <td>Khóa luận tốt nghiệp</td>
                                  <td>MMT&amp;TT</td>
                                  <td>10</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT505.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt505l11antt"
                                        name="table_lophoc[NT505.L11.ANTT]" value="NT505.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT505</td>
                                  <td>NT505.L11.ANTT</td>
                                  <td>Khóa luận tốt nghiệp</td>
                                  <td>MMT&amp;TT</td>
                                  <td>10</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>40</td>
                                  <td>10</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT533.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt533l11"
                                        name="table_lophoc[NT533.L11]" value="NT533.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT533</td>
                                  <td>NT533.L11</td>
                                  <td>Hệ tính toán phân bố</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 45, P.B6.08<br></td>
                                  <td>Lê Trung Quân - 80312</td>
                                  <td>80</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT533.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt533l111"
                                        name="table_lophoc[NT533.L11.1]" value="NT533.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT533</td>
                                  <td>
                                    <p style="color:#ff8040">NT533.L11.1</p>
                                  </td>
                                  <td>Hệ tính toán phân bố (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.C214<br></td>
                                  <td>Nguyễn Văn Bảo - 80455</td>
                                  <td>40</td>
                                  <td>23</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT533.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-nt533l112"
                                        name="table_lophoc[NT533.L11.2]" value="NT533.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT533</td>
                                  <td>
                                    <p style="color:#ff8040">NT533.L11.2</p>
                                  </td>
                                  <td>Hệ tính toán phân bố (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ 4, Tiết 67890, P.C214<br></td>
                                  <td>Nguyễn Văn Bảo - 80455</td>
                                  <td>40</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT534.L11.ANTT">
                                      <input type="checkbox" id="edit-table-lophoc-nt534l11antt"
                                        name="table_lophoc[NT534.L11.ANTT]" value="NT534.L11.ANTT"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT534</td>
                                  <td>NT534.L11.ANTT</td>
                                  <td>An toàn mạng máy tính nâng cao</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 7, Tiết 23, P.B6.08<br></td>
                                  <td>Nguyễn Duy - 80037</td>
                                  <td>90</td>
                                  <td>65</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT534.L11.ANTT.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt534l11antt1"
                                        name="table_lophoc[NT534.L11.ANTT.1]" value="NT534.L11.ANTT.1"
                                        class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT534</td>
                                  <td>
                                    <p style="color:#ff8040">NT534.L11.ANTT.1</p>
                                  </td>
                                  <td>An toàn mạng máy tính nâng cao (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Duy - 80037</td>
                                  <td>80</td>
                                  <td>65</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT535.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt535l11"
                                        name="table_lophoc[NT535.L11]" value="NT535.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT535</td>
                                  <td>NT535.L11</td>
                                  <td>Bảo mật Internet of things</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 23, P.B6.08<br></td>
                                  <td>Nguyễn Khánh Thuật - 80451</td>
                                  <td>80</td>
                                  <td>58</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT535.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt535l111"
                                        name="table_lophoc[NT535.L11.1]" value="NT535.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT535</td>
                                  <td>
                                    <p style="color:#ff8040">NT535.L11.1</p>
                                  </td>
                                  <td>Bảo mật Internet of things (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Văn Thiên Luân - 80445<br>Nguyễn Khánh Thuật - 80451</td>
                                  <td>80</td>
                                  <td>58</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT536.L11">
                                      <input type="checkbox" id="edit-table-lophoc-nt536l11"
                                        name="table_lophoc[NT536.L11]" value="NT536.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT536</td>
                                  <td>NT536.L11</td>
                                  <td>Công nghệ truyền thông đa phương tiện</td>
                                  <td>MMT&amp;TT</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 45, P.B6.08<br></td>
                                  <td>Lê Kim Hùng - 80254</td>
                                  <td>80</td>
                                  <td>74</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-NT536.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-nt536l111"
                                        name="table_lophoc[NT536.L11.1]" value="NT536.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>NT536</td>
                                  <td>
                                    <p style="color:#ff8040">NT536.L11.1</p>
                                  </td>
                                  <td>Công nghệ truyền thông đa phương tiện (HT2)</td>
                                  <td>MMT&amp;TT</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Đỗ Thị Hương Lan - 80407</td>
                                  <td>80</td>
                                  <td>74</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L11">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l11"
                                        name="table_lophoc[PE012.L11]" value="PE012.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L11</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 3, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L12">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l12"
                                        name="table_lophoc[PE012.L12]" value="PE012.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L12</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 3, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L13">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l13"
                                        name="table_lophoc[PE012.L13]" value="PE012.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L13</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 5, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L14">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l14"
                                        name="table_lophoc[PE012.L14]" value="PE012.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L14</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 5, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L15">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l15"
                                        name="table_lophoc[PE012.L15]" value="PE012.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L15</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 4, Tiết 67890, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L16">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l16"
                                        name="table_lophoc[PE012.L16]" value="PE012.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L16</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 4, Tiết 67890, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L17">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l17"
                                        name="table_lophoc[PE012.L17]" value="PE012.L17" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L17</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 5, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L18">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l18"
                                        name="table_lophoc[PE012.L18]" value="PE012.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L18</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 5, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PE012.L19">
                                      <input type="checkbox" id="edit-table-lophoc-pe012l19"
                                        name="table_lophoc[PE012.L19]" value="PE012.L19" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PE012</td>
                                  <td>PE012.L19</td>
                                  <td>Giáo dục thể chất</td>
                                  <td>P.DTDH</td>
                                  <td>0</td>
                                  <td>Thứ 3, Tiết 12345, P.*<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH001.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ph001l11"
                                        name="table_lophoc[PH001.L11]" value="PH001.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH001</td>
                                  <td>PH001.L11</td>
                                  <td>Nhập môn điện tử</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 123, P.C113<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>31</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH001.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ph001l12"
                                        name="table_lophoc[PH001.L12]" value="PH001.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH001</td>
                                  <td>PH001.L12</td>
                                  <td>Nhập môn điện tử</td>
                                  <td>BMTL</td>
                                  <td>3</td>
                                  <td>Thứ 2, Tiết 123, P.C114<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>6</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l11"
                                        name="table_lophoc[PH002.L11]" value="PH002.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>PH002.L11</td>
                                  <td>Nhập môn mạch số</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B7.02<br></td>
                                  <td>Trần Quang Nguyên - 80123</td>
                                  <td>100</td>
                                  <td>25</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l111"
                                        name="table_lophoc[PH002.L11.1]" value="PH002.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>
                                    <p style="color:#ff8040">PH002.L11.1</p>
                                  </td>
                                  <td>Nhập môn mạch số (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.A205<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L11.2">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l112"
                                        name="table_lophoc[PH002.L11.2]" value="PH002.L11.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>
                                    <p style="color:#ff8040">PH002.L11.2</p>
                                  </td>
                                  <td>Nhập môn mạch số (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 12345, P.A205<br></td>
                                  <td></td>
                                  <td>50</td>
                                  <td>1</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l13"
                                        name="table_lophoc[PH002.L13]" value="PH002.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>PH002.L13</td>
                                  <td>Nhập môn mạch số</td>
                                  <td>KTMT</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 1234, P.C305<br></td>
                                  <td>Trương Văn Cương - 80349</td>
                                  <td>70</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L13.1">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l131"
                                        name="table_lophoc[PH002.L13.1]" value="PH002.L13.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>
                                    <p style="color:#ff8040">PH002.L13.1</p>
                                  </td>
                                  <td>Nhập môn mạch số (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C111<br></td>
                                  <td>Nguyễn Mạnh Thảo - 80437</td>
                                  <td>35</td>
                                  <td>28</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-PH002.L13.2">
                                      <input type="checkbox" id="edit-table-lophoc-ph002l132"
                                        name="table_lophoc[PH002.L13.2]" value="PH002.L13.2" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>PH002</td>
                                  <td>
                                    <p style="color:#ff8040">PH002.L13.2</p>
                                  </td>
                                  <td>Nhập môn mạch số (HT1 - Học cách <strong>2</strong> tuần)</td>
                                  <td>KTMT</td>
                                  <td>1</td>
                                  <td>Thứ 5, Tiết 67890, P.C111<br></td>
                                  <td>Nguyễn Mạnh Thảo - 80437</td>
                                  <td>35</td>
                                  <td>17</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE005.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se005l11"
                                        name="table_lophoc[SE005.L11]" value="SE005.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE005</td>
                                  <td>SE005.L11</td>
                                  <td>Giới&nbsp;thiệu&nbsp;ngành&nbsp;Kỹ thuật Phần mềm</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ 7, Tiết 678, P.B4.14<br></td>
                                  <td>Huỳnh Ngọc Tín - 80198</td>
                                  <td>100</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE100.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se100l11"
                                        name="table_lophoc[SE100.L11]" value="SE100.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE100</td>
                                  <td>SE100.L11</td>
                                  <td>Phương pháp Phát triển phần mềm hướng đối tượng</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 678, P.B6.06<br></td>
                                  <td>Huỳnh Nguyễn Khắc Huy - 80358</td>
                                  <td>100</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE100.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se100l111"
                                        name="table_lophoc[SE100.L11.1]" value="SE100.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE100</td>
                                  <td>
                                    <p style="color:#ff8040">SE100.L11.1</p>
                                  </td>
                                  <td>Phương pháp Phát triển phần mềm hướng đối tượng (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Hạnh Xuân - 80238</td>
                                  <td>100</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE100.L12">
                                      <input type="checkbox" id="edit-table-lophoc-se100l12"
                                        name="table_lophoc[SE100.L12]" value="SE100.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE100</td>
                                  <td>SE100.L12</td>
                                  <td>Phương pháp Phát triển phần mềm hướng đối tượng</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 123, P.B6.06<br></td>
                                  <td>Lê Thanh Trọng - 80209</td>
                                  <td>100</td>
                                  <td>38</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE100.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-se100l121"
                                        name="table_lophoc[SE100.L12.1]" value="SE100.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE100</td>
                                  <td>
                                    <p style="color:#ff8040">SE100.L12.1</p>
                                  </td>
                                  <td>Phương pháp Phát triển phần mềm hướng đối tượng (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Hạnh Xuân - 80238</td>
                                  <td>100</td>
                                  <td>38</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE102.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se102l11"
                                        name="table_lophoc[SE102.L11]" value="SE102.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE102</td>
                                  <td>SE102.L11</td>
                                  <td>Nhập môn phát triển game</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 1234, P.B6.06<br></td>
                                  <td>Đinh Nguyễn Anh Dũng - 80028</td>
                                  <td>100</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE102.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se102l111"
                                        name="table_lophoc[SE102.L11.1]" value="SE102.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE102</td>
                                  <td>
                                    <p style="color:#ff8040">SE102.L11.1</p>
                                  </td>
                                  <td>Nhập môn phát triển game (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Đinh Nguyễn Anh Dũng - 80028</td>
                                  <td>100</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE102.L12">
                                      <input type="checkbox" id="edit-table-lophoc-se102l12"
                                        name="table_lophoc[SE102.L12]" value="SE102.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE102</td>
                                  <td>SE102.L12</td>
                                  <td>Nhập môn phát triển game</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 6789, P.B6.06<br></td>
                                  <td>Huỳnh Hồ Thị Mộng Trinh - 80360</td>
                                  <td>100</td>
                                  <td>81</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE102.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-se102l121"
                                        name="table_lophoc[SE102.L12.1]" value="SE102.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE102</td>
                                  <td>
                                    <p style="color:#ff8040">SE102.L12.1</p>
                                  </td>
                                  <td>Nhập môn phát triển game (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Huỳnh Hồ Thị Mộng Trinh - 80360</td>
                                  <td>100</td>
                                  <td>81</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE104.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se104l11"
                                        name="table_lophoc[SE104.L11]" value="SE104.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE104</td>
                                  <td>SE104.L11</td>
                                  <td>Nhập môn Công nghệ phần mềm</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.B3.16<br></td>
                                  <td>Võ Tấn Khoa - 80266</td>
                                  <td>100</td>
                                  <td>61</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE104.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se104l111"
                                        name="table_lophoc[SE104.L11.1]" value="SE104.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE104</td>
                                  <td>
                                    <p style="color:#ff8040">SE104.L11.1</p>
                                  </td>
                                  <td>Nhập môn Công nghệ phần mềm (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Võ Tấn Khoa - 80266</td>
                                  <td>100</td>
                                  <td>61</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE104.L12">
                                      <input type="checkbox" id="edit-table-lophoc-se104l12"
                                        name="table_lophoc[SE104.L12]" value="SE104.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE104</td>
                                  <td>SE104.L12</td>
                                  <td>Nhập môn Công nghệ phần mềm</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.B5.14<br></td>
                                  <td>Võ Tấn Khoa - 80266</td>
                                  <td>120</td>
                                  <td>70</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE104.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-se104l121"
                                        name="table_lophoc[SE104.L12.1]" value="SE104.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE104</td>
                                  <td>
                                    <p style="color:#ff8040">SE104.L12.1</p>
                                  </td>
                                  <td>Nhập môn Công nghệ phần mềm (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Võ Tấn Khoa - 80266</td>
                                  <td>120</td>
                                  <td>70</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE109.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se109l11"
                                        name="table_lophoc[SE109.L11]" value="SE109.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE109</td>
                                  <td>SE109.L11</td>
                                  <td>Phát triển, vận hành, bảo trì phần mềm</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 1234, P.B7.08<br></td>
                                  <td>Nguyễn Thị Thanh Trúc - 80210</td>
                                  <td>100</td>
                                  <td>77</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE113.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se113l11"
                                        name="table_lophoc[SE113.L11]" value="SE113.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE113</td>
                                  <td>SE113.L11</td>
                                  <td>Kiểm chứng phần mềm</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.B7.08<br></td>
                                  <td>Nguyễn Thị Thanh Trúc - 80210</td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE113.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se113l111"
                                        name="table_lophoc[SE113.L11.1]" value="SE113.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE113</td>
                                  <td>
                                    <p style="color:#ff8040">SE113.L11.1</p>
                                  </td>
                                  <td>Kiểm chứng phần mềm (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Thị Thanh Trúc - 80210</td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE114.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se114l11"
                                        name="table_lophoc[SE114.L11]" value="SE114.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE114</td>
                                  <td>SE114.L11</td>
                                  <td>Nhập môn ứng dụng di động</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 2345, P.B6.06<br></td>
                                  <td>Phan Nguyệt Minh - 80113</td>
                                  <td>100</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE114.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se114l111"
                                        name="table_lophoc[SE114.L11.1]" value="SE114.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE114</td>
                                  <td>
                                    <p style="color:#ff8040">SE114.L11.1</p>
                                  </td>
                                  <td>Nhập môn ứng dụng di động (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Phan Nguyệt Minh - 80113</td>
                                  <td>100</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE114.L12">
                                      <input type="checkbox" id="edit-table-lophoc-se114l12"
                                        name="table_lophoc[SE114.L12]" value="SE114.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE114</td>
                                  <td>SE114.L12</td>
                                  <td>Nhập môn ứng dụng di động</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 6789, P.B6.06<br></td>
                                  <td>Huỳnh Tuấn Anh - 80006</td>
                                  <td>100</td>
                                  <td>66</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE114.L12.1">
                                      <input type="checkbox" id="edit-table-lophoc-se114l121"
                                        name="table_lophoc[SE114.L12.1]" value="SE114.L12.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE114</td>
                                  <td>
                                    <p style="color:#ff8040">SE114.L12.1</p>
                                  </td>
                                  <td>Nhập môn ứng dụng di động (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Huỳnh Tuấn Anh - 80006</td>
                                  <td>100</td>
                                  <td>66</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE121.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se121l11"
                                        name="table_lophoc[SE121.L11]" value="SE121.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE121</td>
                                  <td>SE121.L11</td>
                                  <td>Đồ án 1</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>120</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE220.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se220l11"
                                        name="table_lophoc[SE220.L11]" value="SE220.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE220</td>
                                  <td>SE220.L11</td>
                                  <td>Thiết kế Game</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 7, Tiết 123, P.B7.08<br></td>
                                  <td>Đinh Nguyễn Anh Dũng - 80028</td>
                                  <td>100</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE220.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se220l111"
                                        name="table_lophoc[SE220.L11.1]" value="SE220.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE220</td>
                                  <td>
                                    <p style="color:#ff8040">SE220.L11.1</p>
                                  </td>
                                  <td>Thiết kế Game (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Đinh Nguyễn Anh Dũng - 80028</td>
                                  <td>100</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE313.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se313l11"
                                        name="table_lophoc[SE313.L11]" value="SE313.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE313</td>
                                  <td>SE313.L11</td>
                                  <td>Một số thuật toán thông minh</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 1234, P.B7.08<br></td>
                                  <td>Mai Trọng Khang - 80274</td>
                                  <td>100</td>
                                  <td>26</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE330.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se330l11"
                                        name="table_lophoc[SE330.L11]" value="SE330.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE330</td>
                                  <td>SE330.L11</td>
                                  <td>Ngôn ngữ lập trình Java</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 345, P.B6.06<br></td>
                                  <td>Huỳnh Ngọc Tín - 80198</td>
                                  <td>100</td>
                                  <td>67</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE330.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se330l111"
                                        name="table_lophoc[SE330.L11.1]" value="SE330.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE330</td>
                                  <td>
                                    <p style="color:#ff8040">SE330.L11.1</p>
                                  </td>
                                  <td>Ngôn ngữ lập trình Java (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Huỳnh Tuấn Anh - 80006</td>
                                  <td>100</td>
                                  <td>67</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE332.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se332l11"
                                        name="table_lophoc[SE332.L11]" value="SE332.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE332</td>
                                  <td>SE332.L11</td>
                                  <td>Chuyên đề CSDL nâng cao</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 1234, P.B6.06<br></td>
                                  <td>Thái Thụy Hàn Uyển - 80361</td>
                                  <td>100</td>
                                  <td>24</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE344.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se344l11"
                                        name="table_lophoc[SE344.L11]" value="SE344.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE344</td>
                                  <td>SE344.L11</td>
                                  <td>Lập trình game trong các thiết bị di động</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.B7.08<br></td>
                                  <td>Hoàng Văn Hà - 80324</td>
                                  <td>100</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE344.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se344l111"
                                        name="table_lophoc[SE344.L11.1]" value="SE344.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE344</td>
                                  <td>
                                    <p style="color:#ff8040">SE344.L11.1</p>
                                  </td>
                                  <td>Lập trình game trong các thiết bị di động (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Hoàng Văn Hà - 80324</td>
                                  <td>100</td>
                                  <td>5</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE347.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se347l11"
                                        name="table_lophoc[SE347.L11]" value="SE347.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE347</td>
                                  <td>SE347.L11</td>
                                  <td>Công nghệ Web và ứng dụng</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 5, Tiết 6789, P.B6.06<br></td>
                                  <td>Trần Anh Dũng - 80031</td>
                                  <td>100</td>
                                  <td>98</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE347.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se347l111"
                                        name="table_lophoc[SE347.L11.1]" value="SE347.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE347</td>
                                  <td>
                                    <p style="color:#ff8040">SE347.L11.1</p>
                                  </td>
                                  <td>Công nghệ Web và ứng dụng (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Trần Anh Dũng - 80031</td>
                                  <td>100</td>
                                  <td>98</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE348.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se348l11"
                                        name="table_lophoc[SE348.L11]" value="SE348.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE348</td>
                                  <td>SE348.L11</td>
                                  <td>Chuyên đề M-commerce</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 1234, P.B7.08<br></td>
                                  <td>Phan Trung Hiếu - 80054</td>
                                  <td>100</td>
                                  <td>0</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE350.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se350l11"
                                        name="table_lophoc[SE350.L11]" value="SE350.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE350</td>
                                  <td>SE350.L11</td>
                                  <td>Chuyên đề E-learning</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 1234, P.B6.06<br></td>
                                  <td>Thái Thụy Hàn Uyển - 80361</td>
                                  <td>100</td>
                                  <td>3</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE357.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se357l11"
                                        name="table_lophoc[SE357.L11]" value="SE357.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE357</td>
                                  <td>SE357.L11</td>
                                  <td>Kỹ thuật phân tích yêu cầu</td>
                                  <td>CNPM</td>
                                  <td>2</td>
                                  <td>Thứ 5, Tiết 1234, P.B7.08<br></td>
                                  <td>Nguyễn Công Hoan - 80056</td>
                                  <td>100</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE357.L11.1">
                                      <input type="checkbox" id="edit-table-lophoc-se357l111"
                                        name="table_lophoc[SE357.L11.1]" value="SE357.L11.1" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE357</td>
                                  <td>
                                    <p style="color:#ff8040">SE357.L11.1</p>
                                  </td>
                                  <td>Kỹ thuật phân tích yêu cầu (HT2)</td>
                                  <td>CNPM</td>
                                  <td>1</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td>Nguyễn Công Hoan - 80056</td>
                                  <td>100</td>
                                  <td>27</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE400.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se400l11"
                                        name="table_lophoc[SE400.L11]" value="SE400.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE400</td>
                                  <td>SE400.L11</td>
                                  <td>Serminar các vấn đề hiện đại của CNPM</td>
                                  <td>CNPM</td>
                                  <td>4</td>
                                  <td>Thứ 3, Tiết 6789, P.B7.08<br></td>
                                  <td>Dương Minh Đức - 80311<br>Nguyễn Công Hoan - 80056</td>
                                  <td>100</td>
                                  <td>17</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE401.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se401l11"
                                        name="table_lophoc[SE401.L11]" value="SE401.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE401</td>
                                  <td>SE401.L11</td>
                                  <td>Mẫu thiết kế</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 6, Tiết 6789, P.B6.06<br></td>
                                  <td>Trần Anh Dũng - 80031</td>
                                  <td>100</td>
                                  <td>45</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE405.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se405l11"
                                        name="table_lophoc[SE405.L11]" value="SE405.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE405</td>
                                  <td>SE405.L11</td>
                                  <td>Chuyên đề Mobile and Pervasive Computing</td>
                                  <td>CNPM</td>
                                  <td>3</td>
                                  <td>Thứ 4, Tiết 678, P.B7.08<br></td>
                                  <td>Phan Nguyệt Minh - 80113</td>
                                  <td>100</td>
                                  <td>20</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SE505.L11">
                                      <input type="checkbox" id="edit-table-lophoc-se505l11"
                                        name="table_lophoc[SE505.L11]" value="SE505.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SE505</td>
                                  <td>SE505.L11</td>
                                  <td>Khóa luận tốt nghiệp</td>
                                  <td>CNPM</td>
                                  <td>10</td>
                                  <td>Thứ *, Tiết *, P.*<br></td>
                                  <td></td>
                                  <td>100</td>
                                  <td>42</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l11"
                                        name="table_lophoc[SS004.L11]" value="SS004.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L11</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 45, P.C114<br></td>
                                  <td>Nguyễn Thị Ngọc Diễm - 80023</td>
                                  <td>100</td>
                                  <td>71</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l12"
                                        name="table_lophoc[SS004.L12]" value="SS004.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L12</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 45, P.C114<br></td>
                                  <td>Nguyễn Thị Thanh Trúc - 80210</td>
                                  <td>100</td>
                                  <td>56</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l13"
                                        name="table_lophoc[SS004.L13]" value="SS004.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L13</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 45, P.C114<br></td>
                                  <td>Lê Thanh Trọng - 80209</td>
                                  <td>100</td>
                                  <td>18</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L14">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l14"
                                        name="table_lophoc[SS004.L14]" value="SS004.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L14</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 5, Tiết 45, P.C113<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>100</td>
                                  <td>59</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L15">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l15"
                                        name="table_lophoc[SS004.L15]" value="SS004.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L15</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 45, P.C114<br></td>
                                  <td>Thái Huy Tân - 80365</td>
                                  <td>100</td>
                                  <td>17</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS004.L16">
                                      <input type="checkbox" id="edit-table-lophoc-ss004l16"
                                        name="table_lophoc[SS004.L16]" value="SS004.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS004</td>
                                  <td>SS004.L16</td>
                                  <td>Kỹ năng nghề nghiệp</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 90, P.C114<br></td>
                                  <td>Nguyễn Đình Hiển - 80052</td>
                                  <td>100</td>
                                  <td>4</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS006.L18">
                                      <input type="checkbox" id="edit-table-lophoc-ss006l18"
                                        name="table_lophoc[SS006.L18]" value="SS006.L18" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS006</td>
                                  <td>SS006.L18</td>
                                  <td>Pháp luật đại cương</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 34, P.C113<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>135</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS007.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ss007l11"
                                        name="table_lophoc[SS007.L11]" value="SS007.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS007</td>
                                  <td>SS007.L11</td>
                                  <td>Triết học Mác – Lênin</td>
                                  <td>P.DTDH</td>
                                  <td>3</td>
                                  <td>Thứ 3, Tiết 123, P.B1.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>149</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L11">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l11"
                                        name="table_lophoc[SS009.L11]" value="SS009.L11" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L11</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 89, P.B3.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>119</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l12"
                                        name="table_lophoc[SS009.L12]" value="SS009.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L12</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 89, P.B3.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>121</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L13">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l13"
                                        name="table_lophoc[SS009.L13]" value="SS009.L13" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L13</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 4, Tiết 89, P.C305<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>124</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L14">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l14"
                                        name="table_lophoc[SS009.L14]" value="SS009.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L14</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 5, Tiết 89, P.B1.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>106</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L15">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l15"
                                        name="table_lophoc[SS009.L15]" value="SS009.L15" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L15</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 6, Tiết 89, P.B3.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>119</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS009.L16">
                                      <input type="checkbox" id="edit-table-lophoc-ss009l16"
                                        name="table_lophoc[SS009.L16]" value="SS009.L16" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS009</td>
                                  <td>SS009.L16</td>
                                  <td>Chủ nghĩa xã hội khoa học</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 7, Tiết 89, P.B3.14<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>86</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="odd">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS010.L12">
                                      <input type="checkbox" id="edit-table-lophoc-ss010l12"
                                        name="table_lophoc[SS010.L12]" value="SS010.L12" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS010</td>
                                  <td>SS010.L12</td>
                                  <td>Lịch sử Đảng Cộng sản Việt Nam</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 2, Tiết 34, P.C305<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>133</td>
                                  <td>VN</td>
                                </tr>
                                <tr class="even">
                                  <td>
                                    <div class="form-item form-type-checkbox form-item-table-lophoc-SS010.L14">
                                      <input type="checkbox" id="edit-table-lophoc-ss010l14"
                                        name="table_lophoc[SS010.L14]" value="SS010.L14" class="form-checkbox">
                                    </div>
                                  </td>
                                  <td>SS010</td>
                                  <td>SS010.L14</td>
                                  <td>Lịch sử Đảng Cộng sản Việt Nam</td>
                                  <td>P.DTDH</td>
                                  <td>2</td>
                                  <td>Thứ 3, Tiết 34, P.B5.08<br></td>
                                  <td></td>
                                  <td>150</td>
                                  <td>116</td>
                                  <td>VN</td>
                                </tr>
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
