// ================================ Upload file

function dataArrayToObject(array) {
  return {
    STT: array[0],
    MaMH: array[1],
    MaLop: array[2],
    TenMH: array[3],
    MaGV: array[4],
    TenGV: array[5],
    SiSo: array[6],
    SoTc: array[7],
    ThucHanh: array[8],
    HTGD: array[9],
    Thu: array[10],
    Tiet: array[11],
    CachTuan: array[12],
    PhongHoc: array[13],
    KhoaHoc: array[14],
    HocKy: array[15],
    NamHoc: array[16],
    HeDT: array[17],
    KhoaQL: array[18],
    NBD: array[19],
    NKT: array[20],
    GhiChu: array[21],
    NgonNgu: array[22]
  }
}

function filterBySchedule(data, toSchedule) {
  const result = []
  toSchedule = [...toSchedule] // make the outside immutable

  for (const lop of data) {
    const foundLop = toSchedule.indexOf(lop.MaLop)

    if (foundLop !== -1) {
      result.push(lop)

      toSchedule.splice(foundLop, 1)
      if (toSchedule.length === 0) break // got all for toSchedule
    }
  }

  return result
}

function classifyBySchedulable(classes) {
  const schedulable = classes.filter(x => x.Thu !== '*')
  const unschedulable = classes.filter(x => x.Thu === '*')
  return { schedulable, unschedulable }
}

// =============================== Arrange schedule

function getClassCell({
  MaLop,
  NgonNgu,
  TenMH,
  TenGV = '',
  PhongHoc = '',
  NBD,
  NKT
}) {
  return `
    <strong>${MaLop} - ${NgonNgu}</strong><br>
    ${TenMH}<br>
    <strong>${TenGV}</strong><br>
    ${PhongHoc}<br>
    BĐ: ${NBD}<br>
    KT: ${NKT}<br>
  `
}

function handleSchedulable(processedData) {
  function getSchedulableCell(data) {
    return `
      <td rowspan="${data.Tiet.length}" class="class-center_white">
        ${getClassCell(data)}
      </td>
    `
  }
  function getLessonTime(tiet) {
    switch (tiet) {
      case 1:
        return `<td class="lesson-center_bold">Tiết 1<br>(7:30 - 8:15)</td>`
      case 2:
        return `<td class="lesson-center_bold">Tiết 2<br>(8:15 - 9:00)</td>`
      case 3:
        return `<td class="lesson-center_bold">Tiết 3<br>(9:00 - 9:45)</td>`
      case 4:
        return `<td class="lesson-center_bold">Tiết 4<br>(10:00 - 10:45)</td>`
      case 5:
        return `<td class="lesson-center_bold">Tiết 5<br>(10:45 - 11:30)</td>`
      case 6:
        return `<td class="lesson-center_bold">Tiết 6<br>(13:00 - 13:45)</td>`
      case 7:
        return `<td class="lesson-center_bold">Tiết 7<br>(13:45 - 14:30)</td>`
      case 8:
        return `<td class="lesson-center_bold">Tiết 8<br>(14:30 - 15:15)</td>`
      case 9:
        return `<td class="lesson-center_bold">Tiết 9<br>(15:30 - 16:15)</td>`
      case 10:
        return `<td class="lesson-center_bold">Tiết 10<br>(16:15 - 17:00)</td>`
    }
  }

  const listTiet = [...Array(10)].map((_, index) => {
    return processedData.schedulable.filter(x => x.Tiet.includes((index + 1) % 10))
  })

  // check trung tkb
  for (const arr of listTiet) {
    const listThu = arr.map(x => x.Thu)
    const listUniqueThu = new Set(listThu)
    const isUnique = listThu.length === listUniqueThu.size
    if (!isUnique) {
      const thuBug = listThu.find(x => listThu.count(x) > 1)
      const bugs = arr.filter(x => x.Thu === thuBug)
      const bugsDisplay = bugs.map(({MaLop, Thu, Tiet}) => `<strong>${MaLop}:Thứ${Thu}Tiết${Tiet}</strong>`)
      return {
        hasBug: true,
        message: `Trùng thời khóa biểu: ` + bugsDisplay.join(' - ') + '. '
      }
    }
  }

  let toAppend = ''
  for (let index = 0; index < 10; index++) {
    toAppend += `<tr>`
    toAppend += getLessonTime(index + 1)

    for (let thu = 2; thu <= 7; thu++) {
      const foundClass = listTiet[index].find(_class =>
        _class.Thu.includes(thu)
      )

      if (!foundClass) {
        toAppend += `<td></td>`
      } else {
        if (foundClass.Tiet[0] == index + 1) {
          toAppend += getSchedulableCell(foundClass)
        }
      }
    }

    toAppend += `</tr>`
  }
  tableBody.innerHTML += toAppend
  return { hasBug: false }
}

function handleUnschedulable(processedData) {
  function getUnschedulableCell(data) {
    return `
      <td colspan="7" class="class-center_white">
        ${getClassCell(data)}
      </td>
    `
  }

  const extraRows = processedData.unschedulable.map(item => {
    return `<tr>${getUnschedulableCell(item)}</tr>`
  })
  tableBody.innerHTML += extraRows.join('\n')
}

// ======================== main

var data = null

function handleFile(file) {
  const reader = new FileReader()
  const rABS = !!reader.readAsBinaryString
  reader.onload = e => {
    const bstr = e.target.result
    const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' })
    const wsLyThuyet = wb.Sheets[wb.SheetNames[0]]
    const wsThucHanh = wb.Sheets[wb.SheetNames[1]]
    const dataLyThuyet = XLSX.utils.sheet_to_json(wsLyThuyet, { header: 1 })
    const dataThucHanh = XLSX.utils.sheet_to_json(wsThucHanh, { header: 1 })
    const dataInArray = [...dataLyThuyet, ...dataThucHanh].filter(
      row => typeof row[0] === 'number'
    )
    data = dataInArray.map(array => dataArrayToObject(array))
  }
  reader.onloadend = () => {
    alertEle.style.display = 'none'
    custLabel.classList.remove('text-danger')
    custLabel.classList.add('text-success')
    custLabel.textContent = file.name
  }
  if (rABS) reader.readAsBinaryString(file)
  else reader.readAsArrayBuffer(file)
}

// https://stackoverflow.com/a/6121234/9787887
Object.defineProperties(Array.prototype, {
  count: {
    value: function(value) {
      return this.filter(x => x == value).length
    }
  }
})

function checkTrungMaMH (filteredClasses) {
  const verifyStrings = filteredClasses.map(x => x.MaMH + "-" + x.HTGD)
  const uniqueStrings = new Set(verifyStrings)
  const isUnique = verifyStrings.length === (uniqueStrings).size
  if (!isUnique) {
    const bugs = verifyStrings.filter(x => verifyStrings.count(x) > 1)
    return {
      hasBug: true,
      message: `Trùng mã môn học cho lớp: <strong>` + bugs.join(', ') + '</strong>. '
    }
  } else {
    return {
      hasBug: false
    }
  }
}

function alertError (message) {
  const linkGithub = 'https://github.com/loia5tqd001/Dang-Ky-Hoc-Phan-UIT/issues'
  const reportBugStr = `Nếu bạn thấy lỗi là do chương trình vui lòng báo lỗi <a href="${linkGithub}" target="_blank" class="alert-link">tại đây</a>`
  alertEle.innerHTML = message + reportBugStr
  alertEle.style.display = 'block'
  return
}

function process (dataInObject) {
  tableBody.innerHTML = ''
  
  if (dataInObject === null) {
    return alertError('Có vẻ như bạn chưa tải file excel dữ liệu TKB của trường (ở bước 1) lên. ')
  }
  const toSchedule = textInp.value.split('\n').map(s => s.trim()).filter(s => s !== '')
  
  const filteredClasses = filterBySchedule(dataInObject, toSchedule)
  if (filteredClasses.length === 0) {
    return alertError('Không tìm thấy mã lớp học nào hợp lệ cho bạn! Bạn kiểm tra kĩ chưa? ')
  } 
  else {
    const { hasBug, message } = checkTrungMaMH(filteredClasses)
    if (hasBug) {
      return alertError(message)
    }
  }
  const processedData = classifyBySchedulable(filteredClasses)
  const { hasBug, message } = handleSchedulable(processedData)
  if (hasBug) {
    return alertError(message)
  }
  handleUnschedulable(processedData)
  if (filteredClasses.length === toSchedule.length) {
    alertEle.style.display = 'none'
  } else {
    const listCantFind = toSchedule.filter(x => !filteredClasses.find(({MaLop}) => MaLop === x))
    const styledListCantFind = listCantFind.map(x => `<strong>${x}</strong>`)
    const message = `Không thể xếp lịch cho các mã lớp: ${styledListCantFind.join(', ')}. `
    alertError(message)
  }
}

const xlf = document.getElementById('xlf')
const btn = document.getElementById('submit')
const textInp = document.getElementById('text-input')
const alertEle = document.getElementById('alert-error')
const tableBody = document.getElementById('table-body')
const custLabel = document.querySelector('.custom-file-label')
xlf.addEventListener('change', e => handleFile(e.target.files[0]))
btn.addEventListener('click', e => process(data))