export const getScriptDkhp = (listMonDangKy: string[]) =>
  `
// Chỉ cần thay mỗi môn trên một hàng cho biến monDangKy này là xong
// Lưu ý: Nếu sau này trường update website, các thẻ query không còn đúng nữa, thì bạn liên hệ messenger.com/t/loia5tqd001 để báo mình nhé

var monDangKy = \`
${listMonDangKy.join('\n')}
\`;

var successLog = (message) => console.log('%c' + message, 'font-weight:bold; color:green;');
var errorLog = (message) => console.log('%c' + message, 'font-weight:bold; color:red;');
var errorStep = '';

;(function () {
  BypassMathCaptcha();
  DangKy(monDangKy);
  Submit();
})()

function BypassMathCaptcha() {
  try {
    var hasCaptcha = document.querySelector('#edit-captcha-response');
    if (hasCaptcha) {
      var answerCaptchaMath = eval(document.querySelector('.captcha .field-prefix')?.textContent.replace('=', '').trim());
      hasCaptcha.value = answerCaptchaMath;
    } else {
      throw 'mịa';
    }
    successLog('1. Làm captcha toán tự động thành công!');
  } catch {
    errorLog('1. Làm captcha toán tự động không thành công! Bạn tự làm captcha toán đi nhé!');
    errorStep += '1';
  }
}

function DangKy(monDangKyString) {
  try {
    var listMonDangKy = monDangKyString.trim().split('\\n').map((it) => it.trim())
    
    var allRows = [...document.querySelectorAll('#table_lophoc_wrapper tr')]

    if (!allRows.length) throw 'mịa';
    
    var rowsToDangKy = allRows.filter((it) => listMonDangKy.includes(it.querySelector('td:nth-child(3)')?.textContent?.trim()))
    
    rowsToDangKy.forEach((it) => it.querySelector('td:first-child input[type="checkbox"]').checked = true)

    successLog('2. Click danh sách lớp thành công!');
  } catch {
    errorLog('2. Click danh sách lớp không thành công! Bạn tự click danh sách lớp đi nhé!');
    errorStep += '2';
  }
}

function Submit() {
  try {
    if (errorStep.includes('12')) {
      errorLog('3. Làm xong tự submit tay đi nhé. Lỗi quá!');
    }
    else if (errorStep.includes('1')) {
      errorLog('3. Làm toán captcha xong rồi tự submit luôn nhé!');
    }
    else if (errorStep.includes('2')) {
      errorLog('3. Click chọn lớp xong rồi tự submit luôn nhé!');
    } else {
      document.querySelector('#edit-submit').click()
      successLog('3. Submit thành công!');
    }
  } catch {
    errorLog('3. Bấm submit không thành công! Bạn tự bấm submit đi nhé!');
  }
}
`.trim();
