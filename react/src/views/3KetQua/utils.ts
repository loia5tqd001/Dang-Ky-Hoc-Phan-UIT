export const getScriptDkhp = (listMonDangKy: string[]) =>
  `
// Chỉ cần thay mỗi môn trên một hàng cho biến monDangKy này là xong
// Lưu ý: Nếu sau này trường update website, các thẻ query không còn đúng nữa, thì bạn liên hệ messenger.com/t/loia5tqd001 để báo mình nhé

var monDangKy = \`
${listMonDangKy.join('\n')}
\`;

var successLog = (message) => console.log('%c' + message, 'font-weight:bold; color:green;');
var errorLog = (message) => console.log('%c' + message, 'font-weight:bold; color:red;');

DangKy(monDangKy);

function DangKy(monDangKyString) {
  try {
    var listMonDangKy = monDangKyString.trim().split('\\n').map((it) => it.trim())
    
    var allRows = [...document.querySelectorAll('#table_lophoc_wrapper tr')]

    var rowsToDangKy = allRows.filter((it) => listMonDangKy.includes(it.querySelector('td:nth-child(3)')?.textContent?.trim()))
    
    rowsToDangKy.forEach((it, index) => {
      it.querySelector('td:first-child input[type="checkbox"]').checked = true;
      var tenLop = it.querySelector('td:nth-child(3)')?.textContent?.trim();
      successLog(index + 1 + '.Đã chọn lớp ' + tenLop);
    })
  } catch {
    errorLog('Chọn lớp không thành công! Bạn tự chọn lớp đi nhé!');
  }
}
`.trim();
