import { Fragment } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";
import { Button } from "@mui/material";
import { HookExportHTMLExcel } from "../hooks/HookExportHTMLExcel";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid rgba(224, 224, 224, 1)'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: '1px solid rgba(224, 224, 224, 1)'
  },
}));
function fortmatPhanTram(number) {

  return parseFloat(number.toFixed(2));
}
const LiteracyResults = () => {
  const [data, setData] = React.useState();

  const getSoNguoiMuChuTrongCacDoTuois = async () => {
    try {
      const result = await googleAPI.getSoNguoiMuChuTrongCacDoTuoi({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getSoNguoiMuChuTrongCacDoTuois();
  }, []);

  const ageRangeData = data?.filter(item => item.tuoi >= 15 && item.tuoi <= 25);

  const totalTSTrongDoTuoi = ageRangeData?.reduce((sum, item) => sum + item.TSTrongDoTuoi, 0);
  const totalNuTrongDoTuoi = ageRangeData?.reduce((sum, item) => sum + item.NuTrongDoTuoi, 0);
  const totalDanTocTrongDoTuoi = ageRangeData?.reduce((sum, item) => sum + item.DanTocTrongDoTuoi, 0);
  const totalNuDanTocTrongDoTuoi = ageRangeData?.reduce((sum, item) => sum + item.NuDanTocTrongDoTuoi, 0);

  const totalTSMuchuMuc1 = ageRangeData?.reduce((sum, item) => sum + item.TSMuchuMuc1, 0);
  const totalNuMuchuMuc1 = ageRangeData?.reduce((sum, item) => sum + item.NuMuchuMuc1, 0);
  const totalDanTocMuchuMuc1 = ageRangeData?.reduce((sum, item) => sum + item.DanTocMuchuMuc1, 0);
  const totalNuDanTocMuchuMuc1 = ageRangeData?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc1, 0);

  const totalTSMuchuMuc2 = ageRangeData?.reduce((sum, item) => sum + item.TSMuchuMuc2, 0);
  const totalNuMuchuMuc2 = ageRangeData?.reduce((sum, item) => sum + item.NuMuchuMuc2, 0);
  const totalDanTocMuchuMuc2 = ageRangeData?.reduce((sum, item) => sum + item.DanTocMuchuMuc2, 0);
  const totalNuDanTocMuchuMuc2 = ageRangeData?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc2, 0);

  const totalKhongTrongMuc1Va2TS = totalTSTrongDoTuoi - (totalTSMuchuMuc1 + totalTSMuchuMuc2);
  const totalKhongTrongMuc1Va2Nu = totalNuTrongDoTuoi - (totalNuMuchuMuc1 + totalNuMuchuMuc2);
  const totalKhongTrongMuc1Va2DanToc = totalDanTocTrongDoTuoi - (totalDanTocMuchuMuc1 + totalDanTocMuchuMuc2);
  const totalKhongTrongMuc1Va2NuDanToc = totalNuDanTocTrongDoTuoi - (totalNuDanTocMuchuMuc1 + totalNuDanTocMuchuMuc2);

  const percentageKhongTrongMuc1Va2 = fortmatPhanTram((totalKhongTrongMuc1Va2TS / totalTSTrongDoTuoi) * 100);

  // Lọc dữ liệu theo độ tuổi từ 15 đến 35
  const ageRangeData_15_35 = data?.filter(item => item.tuoi >= 15 && item.tuoi <= 35);

  // Tính tổng cho các cột
  const totalTSTrongDoTuoi_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.TSTrongDoTuoi, 0);
  const totalNuTrongDoTuoi_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuTrongDoTuoi, 0);
  const totalDanTocTrongDoTuoi_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.DanTocTrongDoTuoi, 0);
  const totalNuDanTocTrongDoTuoi_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuDanTocTrongDoTuoi, 0);

  const totalTSMuchuMuc1_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.TSMuchuMuc1, 0);
  const totalNuMuchuMuc1_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuMuchuMuc1, 0);
  const totalDanTocMuchuMuc1_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.DanTocMuchuMuc1, 0);
  const totalNuDanTocMuchuMuc1_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc1, 0);

  const totalTSMuchuMuc2_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.TSMuchuMuc2, 0);
  const totalNuMuchuMuc2_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuMuchuMuc2, 0);
  const totalDanTocMuchuMuc2_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.DanTocMuchuMuc2, 0);
  const totalNuDanTocMuchuMuc2_15_35 = ageRangeData_15_35?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc2, 0);

  const totalKhongTrongMuc1Va2TS_15_35 = totalTSTrongDoTuoi_15_35 - (totalTSMuchuMuc1_15_35 + totalTSMuchuMuc2_15_35);
  const totalKhongTrongMuc1Va2Nu_15_35 = totalNuTrongDoTuoi_15_35 - (totalNuMuchuMuc1_15_35 + totalNuMuchuMuc2_15_35);
  const totalKhongTrongMuc1Va2DanToc_15_35 = totalDanTocTrongDoTuoi_15_35 - (totalDanTocMuchuMuc1_15_35 + totalDanTocMuchuMuc2_15_35);
  const totalKhongTrongMuc1Va2NuDanToc_15_35 = totalNuDanTocTrongDoTuoi_15_35 - (totalNuDanTocMuchuMuc1_15_35 + totalNuDanTocMuchuMuc2_15_35);

  const percentageKhongTrongMuc1Va2_15_35 = fortmatPhanTram((totalKhongTrongMuc1Va2TS_15_35 / totalTSTrongDoTuoi_15_35) * 100);


  // Lọc dữ liệu theo độ tuổi từ 15 đến 60
const ageRangeData_15_60 = data?.filter(item => item.tuoi >= 15 && item.tuoi <= 60);

// Tính tổng cho các cột
const totalTSTrongDoTuoi_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.TSTrongDoTuoi, 0);
const totalNuTrongDoTuoi_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuTrongDoTuoi, 0);
const totalDanTocTrongDoTuoi_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.DanTocTrongDoTuoi, 0);
const totalNuDanTocTrongDoTuoi_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuDanTocTrongDoTuoi, 0);

const totalTSMuchuMuc1_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.TSMuchuMuc1, 0);
const totalNuMuchuMuc1_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuMuchuMuc1, 0);
const totalDanTocMuchuMuc1_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.DanTocMuchuMuc1, 0);
const totalNuDanTocMuchuMuc1_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc1, 0);

const totalTSMuchuMuc2_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.TSMuchuMuc2, 0);
const totalNuMuchuMuc2_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuMuchuMuc2, 0);
const totalDanTocMuchuMuc2_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.DanTocMuchuMuc2, 0);
const totalNuDanTocMuchuMuc2_15_60 = ageRangeData_15_60?.reduce((sum, item) => sum + item.NuDanTocMuchuMuc2, 0);

const totalKhongTrongMuc1Va2TS_15_60 = totalTSTrongDoTuoi_15_60 - (totalTSMuchuMuc1_15_60 + totalTSMuchuMuc2_15_60);
const totalKhongTrongMuc1Va2Nu_15_60 = totalNuTrongDoTuoi_15_60 - (totalNuMuchuMuc1_15_60 + totalNuMuchuMuc2_15_60);
const totalKhongTrongMuc1Va2DanToc_15_60 = totalDanTocTrongDoTuoi_15_60 - (totalDanTocMuchuMuc1_15_60 + totalDanTocMuchuMuc2_15_60);
const totalKhongTrongMuc1Va2NuDanToc_15_60 = totalNuDanTocTrongDoTuoi_15_60 - (totalNuDanTocMuchuMuc1_15_60 + totalNuDanTocMuchuMuc2_15_60);

const percentageKhongTrongMuc1Va2_15_60 = fortmatPhanTram((totalKhongTrongMuc1Va2TS_15_60 / totalTSTrongDoTuoi_15_60) * 100);
  return (
    <Fragment>
      <div
        style={{ textTransform: "uppercase" }}
        className="text-center text-xl font-bold text-teal-800 "
      >
        {" "}
        TỔNG HỢP KẾT QUẢ XÓA MÙ CHỮ{" "}
      </div>
      <Button variant="contained" onClick={() => HookExportHTMLExcel('my-table-1', 'ket-qua-xoa-mu-chu')}>Export to Excel</Button >
      {
        data ?

          <TableContainer
          id="my-table-1"
            component={Paper}
            sx={{ overflowX: "auto", marginTop: "20px" }}
          >
            <Table aria-label="a dense table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center" rowSpan={3} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Độ tuổi</TableCell>
                  <TableCell align="center" rowSpan={3} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Năm sinh</TableCell>
                  <TableCell align="center" rowSpan={2} colSpan={4} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>TRONG ĐỘ TUỔI</TableCell>
                  <TableCell align="center" colSpan={8} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>MÙ CHỮ</TableCell>
                  <TableCell align="center" rowSpan={2} colSpan={4} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>BIẾT CHỮ</TableCell>
                  <TableCell align="center" rowSpan={3} sx={{ minWidth: '200px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỉ lệ % biết chữ</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={4} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Mù chữ mức 1</TableCell>
                  <TableCell align="center" colSpan={4} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Mù chữ mức 2</TableCell>

                </TableRow>
                <TableRow>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>TS</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                  <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>TS</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                  <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>TS</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                  <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>TS</TableCell>
                  <TableCell align="center" sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                  <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.slice(0, 11).map((item, index) => (
                  <StyledTableRow key={item.tuoi}>
                    <StyledTableCell align="center" component="th" scope="row">{item.tuoi} tuổi</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.namSinh}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.NuMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.DanTocMuchuMuc1} </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc1}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc2}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi - (item.NuMuchuMuc1 + item.NuMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi - (item.DanTocMuchuMuc1 + item.DanTocMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi - (item.NuDanTocMuchuMuc1 + item.NuDanTocMuchuMuc2)}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{fortmatPhanTram((item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)) / item.TSTrongDoTuoi * 100)} %</StyledTableCell>

                  </StyledTableRow>
                ))}
                <StyledTableRow>
                  <StyledTableCell colSpan={2} align="center" component="th" scope="row">Cộng 15-25</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalTSTrongDoTuoi}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuTrongDoTuoi}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocTrongDoTuoi}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocTrongDoTuoi}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc1}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc1}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc1}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc1}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc2}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc2}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc2}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc2}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2TS}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2Nu}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2DanToc}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2NuDanToc}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{percentageKhongTrongMuc1Va2} %</StyledTableCell>
                </StyledTableRow>

                {/* 15 - 35 */}
                {data && data.slice(11, 21).map((item, index) => (
                  <StyledTableRow key={item.tuoi}>
                    <StyledTableCell align="center" component="th" scope="row">{item.tuoi} tuổi</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.namSinh}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.NuMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.DanTocMuchuMuc1} </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc1}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc2}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi - (item.NuMuchuMuc1 + item.NuMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi - (item.DanTocMuchuMuc1 + item.DanTocMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi - (item.NuDanTocMuchuMuc1 + item.NuDanTocMuchuMuc2)}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{fortmatPhanTram((item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)) / item.TSTrongDoTuoi * 100)} %</StyledTableCell>

                  </StyledTableRow>
                ))}
                {/* Rows for totals from 15-35 */}
                <StyledTableRow>
                  <StyledTableCell colSpan={2} align="center" component="th" scope="row">Cộng 15-35</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalTSTrongDoTuoi_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuTrongDoTuoi_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocTrongDoTuoi_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocTrongDoTuoi_15_35}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc1_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc1_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc1_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc1_15_35}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc2_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc2_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc2_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc2_15_35}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2TS_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2Nu_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2DanToc_15_35}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2NuDanToc_15_35}</StyledTableCell>

                  <StyledTableCell align="center" component="th" scope="row">{percentageKhongTrongMuc1Va2_15_35} %</StyledTableCell>
                </StyledTableRow>

                {/* 15 - 35 */}
                {data && data.slice(21, 70).map((item, index) => (
                  <StyledTableRow key={item.tuoi}>
                    <StyledTableCell align="center" component="th" scope="row">{item.tuoi} tuổi</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.namSinh}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.NuMuchuMuc1}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row"> {item.DanTocMuchuMuc1} </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc1}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocMuchuMuc2}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocMuchuMuc2}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuTrongDoTuoi - (item.NuMuchuMuc1 + item.NuMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.DanTocTrongDoTuoi - (item.DanTocMuchuMuc1 + item.DanTocMuchuMuc2)}</StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">{item.NuDanTocTrongDoTuoi - (item.NuDanTocMuchuMuc1 + item.NuDanTocMuchuMuc2)}</StyledTableCell>

                    <StyledTableCell align="center" component="th" scope="row">{fortmatPhanTram((item.TSTrongDoTuoi - (item.TSMuchuMuc1 + item.TSMuchuMuc2)) / item.TSTrongDoTuoi * 100)} %</StyledTableCell>

                  </StyledTableRow>
                ))}
                 {/* Rows for totals from 15-60 */}
        <StyledTableRow>
          <StyledTableCell colSpan={2} align="center" component="th" scope="row">Cộng 15-60</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalTSTrongDoTuoi_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuTrongDoTuoi_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalDanTocTrongDoTuoi_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocTrongDoTuoi_15_60}</StyledTableCell>

          <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc1_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc1_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc1_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc1_15_60}</StyledTableCell>

          <StyledTableCell align="center" component="th" scope="row">{totalTSMuchuMuc2_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuMuchuMuc2_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalDanTocMuchuMuc2_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalNuDanTocMuchuMuc2_15_60}</StyledTableCell>

          <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2TS_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2Nu_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2DanToc_15_60}</StyledTableCell>
          <StyledTableCell align="center" component="th" scope="row">{totalKhongTrongMuc1Va2NuDanToc_15_60}</StyledTableCell>

          <StyledTableCell align="center" component="th" scope="row">{percentageKhongTrongMuc1Va2_15_60} %</StyledTableCell>
        </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer> : <LazyLoading />}
    </Fragment>
  );
};

export default LiteracyResults;
