# Tool Đăng Ký Học Phần UIT

## [ 👉 TODOLIST](https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT/issues/20)

## Giới thiệu

Tool Đăng Ký Học Phần UIT là một ứng dụng hỗ trợ các bạn sinh viên UIT đăng ký học phần được dễ dàng, tiện lợi.

Vì sẽ có rất nhiều đối tượng sinh viên, và rất nhiều trong số đó chỉ muốn sử dụng **một số tính năng nhất định** của ứng dụng mà **không muốn sử dụng toàn bộ ứng dụng**. Do đó, các tính năng của ứng dụng đã được **tách rời**, **làm cho không phụ thuộc vào nhau**, giúp phục vụ nhiều đối tượng sinh viên nhất có thể. <br/> Chẳng hạn, bạn master Excel, có thể tự soạn thời khoá biểu cho bản thân mình nên không cần sử dụng tính năng _<ins>Soạn thời khoá biểu</ins>_ của ứng dụng này, thì bạn vẫn có thể sử dụng tính năng _<ins>Vẽ thời khoá biểu</ins>_ để xem thời khoá biểu bạn đã soạn, hoặc sử dụng tính năng _<ins>Tạo script ĐKHP nhanh</ins>_ để tạo lợi thế ĐKHP nhờ script tự động thao tác nhanh hơn so với đăng ký học phần thủ công.

## Usecase

### Lược đồ usecase tổng quát

![Lược đồ usecase tổng quát](./docs/diagrams/out/usecase/usecase-page2.svg)
_So với usecase trên trường học thì «cần» ở đây là «include», «có thể giúp» là «extend»_

### Tách usecase

![Lược đồ tách usecase](./docs/diagrams/out/usecase/usecase-page3.svg)

## Phân tích tính năng

`Input + Hành động người dùng + Hệ thống xử lý = Output`

| Tính năng                  | Input                                                 | Hành động người dùng                                                                          | Output                                                                |
| -------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| _0._ Tạo nguồn dữ liệu     |                                                       | - Sử dụng dữ liệu mặc định <br /> - Tải lên file excel <br/> - Crawl từ trang dkhp.uit.edu.vn | _Dữ liệu lớp học_                                                     |
| _1._ Soạn thời khoá biểu   | _Dữ liệu lớp học_                                     | Sort, filter, pick lớp                                                                        | _Danh sách lớp học sẽ ĐK_                                             |
| _2._ Vẽ thời khoá biểu     | - _Dữ liệu lớp học_ <br/> - _Danh sách lớp học sẽ ĐK_ |                                                                                               | Giao diện thời khoá biểu <br/> - Copy to clipboard <br/> - Tải về máy |
| _3._ Tạo script ĐKHP nhanh | _Danh sách lớp học sẽ ĐK_                             |                                                                                               | Script ĐKHP nhanh                                                     |
| _4._ Xem giao diện ĐKHP    |                                                       |                                                                                               | Giao diện ĐKHP mẫu                                                    |

### Mối quan hệ giữa các tính năng

![Lược đồ mối quan hệ giữa các tính năng](./docs/diagrams/out/activity/activity-page1.svg)

<details>
  <summary>Tách tính năng <ins><i>Vẽ thời khoá biểu</i></ins></summary>
  <img src="./docs/diagrams/out/activity/activity-page2.svg" alt="Lược đồ tách tính năng vẽ thời khoá biểu">
</details>
<details>
  <summary>Tách tính năng <ins><i>Tạo script ĐKHP nhanh</i></ins></summary>
  <img src="./docs/diagrams/out/activity/activity-page3.svg" alt="Lược đồ tách tính năng tạo script ĐKHP nhanh">
</details>

## Phân rã chức năng

![Lược đồ phân rã chức năng](./docs/diagrams/out/functional-decomposition/functional-decomposition.svg)

## Cấu trúc giao diện

Giao diện gồm 5 màn hình tương ứng với 5 tính năng bên trên:

- Tính năng <ins>_Tạo nguồn dữ liệu_</ins> → Màn hình `Tạo dữ liệu`
- Tính năng <ins>_Soạn thời khoá biểu_</ins> → Màn hình `Soạn TKB`
- Tính năng <ins>_Vẽ thời khoá biểu_</ins> → Màn hình `Vẽ TKB`
- Tính năng <ins>_Tạo script ĐKHP nhanh_</ins> → Màn hình `Script ĐKHP nhanh`
- Tính năng <ins>_Xem giao diện ĐKHP_</ins> → Màn hình `Giao diện ĐKHP`

## Hướng dẫn bảo trì dự án

### Về thiết kế hệ thống, bảo trì các lược đồ (diagrams)

### Bảo trì mã nguồn

#### Cách khởi chạy dự án

#### Code convention

#### Cách chạy testcase

#### Cập nhật thời khoá biểu mặc định
