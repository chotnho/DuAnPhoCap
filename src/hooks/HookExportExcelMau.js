import React from 'react';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from '@mui/material';

export const HookExportExcelMau = ({ fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (fileName) => {
    // Define your headers here
    const headers = [
      {
          SoPhieu:'',
          HoVaTen:'',
          Ngay:'',
          Thang:'',
          Nam:'',
          GioiTinh:'',
          DanToc:'',
          HoanCanhDB:'',
          KhuyetTat:false,
          TenTruongDaiHoc:'',
          TenHuyen:'',
          Khoi:'',
          Lop:'',
          MaLop:'',
          BacTN:'',
          NamTN:'',
          KhoiHocXong:'',
          NamHocXong:'',
          KhoiNghiHoc:'',
          NamNghiHoc:'',
          ChuHo:'',
          GhiChu:'',
      }
    ];

    // Convert headers to sheet
    const ws = XLSX.utils.json_to_sheet(headers, { skipHeader: false });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button variant="outlined" color='warning' onClick={() => exportToCSV(fileName)}>File excel mẫu</Button>
  );
};
