import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const HookExportHTMLExcel = (tableId, fileName) => {
  // Lấy bảng HTML bằng ID
  const table = document.getElementById(tableId);

  // Chuyển đổi bảng HTML thành một WorkSheet
  const ws = XLSX.utils.table_to_sheet(table);

  // Tạo một WorkBook mới và thêm WorkSheet vào
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Xuất file Excel
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  // Lưu file với tên được truyền vào
  saveAs(dataBlob, `${fileName}.xlsx`);
};
