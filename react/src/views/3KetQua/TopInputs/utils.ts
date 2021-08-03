export const getScriptDkhp = (monDangKy: string, monDangKyAnhVan = '') =>
  `
var monDangKy = \`
${monDangKy}
${monDangKyAnhVan}
\`;

;(function () {
  BypassMathCaptcha();
  DangKy(monDangKy);
})()

function BypassMathCaptcha() {
  var hasCaptcha = document.querySelector('#edit-captcha-response');
  if (hasCaptcha) {
    var answerCaptchaMath = eval(document.querySelector('.captcha .field-prefix')?.textContent.replace('=', '').trim());
    hasCaptcha.value = answerCaptchaMath;
  }
}

function DangKy(monDangKyString) {
  var listMonDangKy = monDangKyString.trim().split('\\n').map((it) => it.trim())

  var allRows = [...document.querySelectorAll('#table_lophoc_wrapper tr')]

  var rowsToDangKy = allRows.filter((it) => listMonDangKy.includes(it.querySelector('td:nth-child(3)')?.textContent?.trim()))

  rowsToDangKy.forEach((it) => it.querySelector('td:first-child input[type="checkbox"]').checked = true)

  document.querySelector('#edit-submit').click()
}
`.trim();
