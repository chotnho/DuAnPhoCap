import { Fragment } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";

const ThongKeXMC = () => {
  const [data, setData] = React.useState();
  
  const getThongKeXMCs = async () => {
    try {
      const result = await googleAPI.getThongKeXMC({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getThongKeXMCs();
  }, []);

  const renderRow = (label, key) => (
    <TableRow key={key}>
      <TableCell  sx={{ fontSize: "18px", fontWeight: "500", border: '1px solid rgba(224, 224, 224, 1)', }} component="th" scope="row">
        {label}
      </TableCell>
      <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="right">{data?.[key]?.TSo}</TableCell>
      <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="right">{data?.[key]?.Nu}</TableCell>
      <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="right">{data?.[key]?.DanToc}</TableCell>
      <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="right">{data?.[key]?.NuDanToc}</TableCell>
    </TableRow>
  );

  return (
    <Fragment>
      {data ? (
        <>
          <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800"
          >
            THỐNG KẾ SỐ DÂN TRÊN ĐỊA BÀN
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontSize: "20px", fontWeight: "700",border: '1px solid rgba(224, 224, 224, 1)' }}
                    rowSpan={2}
                    component="th"
                    scope="row"
                  >
                    Tên đơn vị
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "24px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)' }}
                    colSpan={4}
                    align="center"
                  >
                    Tổng dân số
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)' }} align="right">
                    TSố
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)' }} align="right">
                    Nữ
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)' }} align="right">
                    Dân tộc
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)' }} align="right">
                    Nữ dân tộc
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderRow("Khu Chiêu", "khuChieu")}
                {renderRow("Khu Dát - Vảo", "khuDatVao")}
                {renderRow("Khu Én", "khuEn")}
                {renderRow("Khu Múc Thanh Phú", "khuMucThanhPhu")}
                {renderRow("Khu Tảng", "khuTang")}
                {renderRow("Khu Vai", "khuVai")}
                <TableRow key="Tong">
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Cộng
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)'}} align="right">
                    {data?.Tong.TSo}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)'}} align="right">
                    {data?.Tong.Nu}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)'}} align="right">
                    {data?.Tong.DanToc}
                  </TableCell>
                  <TableCell sx={{ fontSize: "18px", fontWeight: "700" ,border: '1px solid rgba(224, 224, 224, 1)'}} align="right">
                    {data?.Tong.NuDanToc}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <LazyLoading />
      )}
    </Fragment>
  );
};

export default ThongKeXMC;
