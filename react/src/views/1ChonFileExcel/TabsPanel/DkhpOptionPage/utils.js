// How to check if a string is JSON: https://stackoverflow.com/a/3710226/9787887
export function tryParseJson(str) {
  try {
    var object = JSON.parse(str);
  } catch (e) {
    return false;
  }
  return object;
}

export const getDataDkhpScript = `
main();

function main() {
  var lopHocDaDKTag = document.querySelector(
    '#table_lophoc_dadk_wrapper table.tableheader-processed'
  );
  var lopHocDaDK = tableTagToArray(lopHocDaDKTag);

  var lopHocChuaDkTag = document.querySelector(
    '#table_lophoc_wrapper table.tableheader-processed'
  );
  var lopHocChuaDk = tableTagToArray(lopHocChuaDkTag);

  var tatCaLopHoc = lopHocDaDK ? lopHocDaDK.concat(lopHocChuaDk) : lopHocChuaDk;
  var tatCaLopHocJson = JSON.stringify(tatCaLopHoc);
  if (Array.isArray(JSON.parse(tatCaLopHocJson))) {
    copyToClipboard(tatCaLopHocJson);
    console.log('Copy to clipboard successfully, good luck');
  } else {
    console.log("Can't copy to clipboard!!!");
  }
}

function tableTagToArray(tableTag) {
  if (!tableTag) return null;
  var allRows = [...tableTag.querySelectorAll('tbody tr')];
  return allRows.reduce((acc, cur) => {
    var isScrapingAnhVan = !cur.querySelector('td:nth-child(11)');
    if (isScrapingAnhVan) {
      var ThuTietPhong =
        cur.querySelector('td:nth-child(6)').textContent.trim() || undefined;

      if (ThuTietPhong?.match(/Thứ/giu)?.length > 1) {
      }
    }

    return [...acc, ...tdTagToClassObjects(cur)];
  }, []);

  function tdTagToClassObjects(tdTag) {
    var isScrapingAnhVan = !tdTag.querySelector('td:nth-child(11)');

    var MaMH =
      tdTag.querySelector('td:nth-child(2)').textContent.trim() || undefined;
    var MaLop =
      tdTag.querySelector('td:nth-child(3)').textContent.trim() || undefined;
    var TenMH =
      tdTag.querySelector('td:nth-child(4)').textContent.trim() || undefined;
    if (isScrapingAnhVan) {
      var SoTc =
        tdTag.querySelector('td:nth-child(5)').textContent.trim() || undefined;
      var ThuTietPhong =
        tdTag.querySelector('td:nth-child(6)').textContent.trim() || undefined;
      var GiangVien =
        tdTag.querySelector('td:nth-child(7)').textContent.trim() || undefined;
      var SiSo =
        tdTag.querySelector('td:nth-child(8)').textContent.trim() || undefined;
      var NgonNgu =
        tdTag.querySelector('td:nth-child(10)').textContent.trim() || undefined;
    } else {
      var KhoaQL =
        tdTag.querySelector('td:nth-child(5)').textContent.trim() || undefined;
      var SoTc =
        tdTag.querySelector('td:nth-child(6)').textContent.trim() || undefined;
      var ThuTietPhong =
        tdTag.querySelector('td:nth-child(7)').textContent.trim() || undefined;
      var GiangVien =
        tdTag.querySelector('td:nth-child(8)').textContent.trim() || undefined;
      var SiSo =
        tdTag.querySelector('td:nth-child(9)').textContent.trim() || undefined;
      var NgonNgu =
        tdTag.querySelector('td:nth-child(11)').textContent.trim() || undefined;
    }

    var result = { MaMH, MaLop, TenMH, SoTc: parseInt(SoTc), SiSo, NgonNgu };
    if (!isScrapingAnhVan) {
      result.KhoaQL = KhoaQL;
    }

    if (GiangVien) {
      var [_, TenGV, MaGV] = /(.+) - (\\d+)/giu.exec(GiangVien);
      result.TenGV = TenGV;
      result.MaGV = MaGV;
    }

    // count number of occurence in string: https://stackoverflow.com/a/4009768/9787887
    var is2BuoiTrenTuan = ThuTietPhong?.match(/Thứ/giu)?.length > 1;

    if (ThuTietPhong) {
      if (is2BuoiTrenTuan) {
        var [
          _,
          Thu1,
          Tiet1,
          PhongHoc1,
          Thu2,
          Tiet2,
          PhongHoc2,
        ] = /Thứ (\\*|\\d), Tiết (\\*|\\d+), P.(\\*|.+).*Thứ (\\*|\\d), Tiết (\\*|\\d+), P.(\\*|.+)/gisu.exec(
          ThuTietPhong
        );
        return [
          { ...result, Thu: Thu1, Tiet: Tiet1, PhongHoc: PhongHoc1 },
          { ...result, Thu: Thu2, Tiet: Tiet2, PhongHoc: PhongHoc2 },
        ];
      } else {
        var [
          _,
          Thu,
          Tiet,
          PhongHoc,
        ] = /Thứ (\\*|\\d), Tiết (\\*|\\d+), P.(\\*|.+)/giu.exec(ThuTietPhong);
        result.Thu = Thu;
        result.Tiet = Tiet;
        result.PhongHoc = PhongHoc;
        return [result];
      }
    }

    return [result];
  }
}

// How to copy text to clipboard with Javascript: https://stackoverflow.com/a/51126086/9787887
function copyToClipboard(txt) {
  txt = document.createTextNode(txt);
  var m = document;
  var w = window;
  var b = m.body;
  b.appendChild(txt);
  if (b.createTextRange) {
    var d = b.createTextRange();
    d.moveToElementText(txt);
    d.select();
    m.execCommand('copy');
  } else {
    var d = m.createRange();
    var g = w.getSelection;
    d.selectNodeContents(txt);
    g().removeAllRanges();
    g().addRange(d);
    m.execCommand('copy');
    g().removeAllRanges();
  }
  txt.remove();
}
`.trim();
