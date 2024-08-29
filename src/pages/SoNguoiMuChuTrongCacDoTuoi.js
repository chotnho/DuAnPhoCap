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
const SoNguoiMuChuTrongCacDoTuoi = () => {
  const [data, setData] = React.useState();
  
  const getThongKeMuChuTrongCacDoTuois = async () => {
    try {
      const result = await googleAPI.getThongKeMuChuTrongCacDoTuoi({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getThongKeMuChuTrongCacDoTuois();
  }, []);

    return  (
        <Fragment>
          <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800 "
          >
            {" "}
            THỐNG KÊ SỐ NGƯỜI MÙ CHỮ TRONG CÁC ĐỘ TUỔI{" "}
          </div>
          <Button variant="contained" onClick={() => HookExportHTMLExcel('my-table-2', 'so-nguoi-mu-chu-trong-cac-do-tuoi')}>Export to Excel</Button >
          {
            data ? 
          
          <TableContainer
          id="my-table-2"
            component={Paper}
            sx={{ overflowX: "auto", marginTop: "20px" }}
          >
            <Table aria-label="a dense table" size="medium">
              <TableHead>
                <TableRow>
                  <TableCell align="center" rowSpan={3} sx={{minWidth:'150px', border:'1px solid rgba(224, 224, 224, 1)'}}>Nhóm tuổi</TableCell>
                  <TableCell align="center" rowSpan={2} colSpan={4} sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số trong nhóm tuổi</TableCell>
                  <TableCell align="center" rowSpan={1} colSpan={8} sx={{minWidth:'50px', border:'1px solid rgba(224, 224, 224, 1)'}}>Số người mù chữ</TableCell>
                  <TableCell align="center" rowSpan={3} sx={{minWidth:'200px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tỷ lệ mù chữ </TableCell>
                  <TableCell align="center" rowSpan={2} colSpan={4} sx={{minWidth:'50px', border:'1px solid rgba(224, 224, 224, 1)'}}>Số người tái mù chữ</TableCell>
                  <TableCell align="center" rowSpan={3}  sx={{minWidth:'200px', border:'1px solid rgba(224, 224, 224, 1)'}}>Ghi chú</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={4} sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Mù chữ mức 1</TableCell>
                  <TableCell align="center" colSpan={4} sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Mù chữ mức 2</TableCell>
                </TableRow> 
                <TableRow>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tổng số</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Nữ</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Dân tộc</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tôn giáo</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tổng số</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Nữ</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Dân tộc</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tôn giáo</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tổng số</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Nữ</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Dân tộc</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tôn giáo</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tổng số</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Nữ</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Dân tộc</TableCell>
                  <TableCell align="center"  sx={{minWidth:'100px', border:'1px solid rgba(224, 224, 224, 1)'}}>Tôn giáo</TableCell>
                 
                </TableRow> 
              </TableHead>
              <TableBody>
                {/* 15 -25 */}
                  <StyledTableRow>
                      <StyledTableCell align="center">{data['15-25'].nhom}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].TSDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].NuDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].DanTocDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].TSMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].NuMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].DanTocMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].TSMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].NuMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].DanTocMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{fortmatPhanTram(data['15-25'].TyLeMuChu)} %</StyledTableCell>
                      
                      <StyledTableCell align="center">{data['15-25'].TSTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].NuTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['15-25'].DanTocTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                  </StyledTableRow>
                  {/* 26-35 */}
                  <StyledTableRow>
                      <StyledTableCell align="center">{data['26-35'].nhom}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].TSDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].NuDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].DanTocDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].TSMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].NuMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].DanTocMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].TSMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].NuMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].DanTocMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{fortmatPhanTram(data['26-35'].TyLeMuChu)} %</StyledTableCell>
                      
                      <StyledTableCell align="center">{data['26-35'].TSTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].NuTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['26-35'].DanTocTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                  </StyledTableRow>
                   {/* 36-60 */}
                   <StyledTableRow>
                      <StyledTableCell align="center">{data['36-60'].nhom}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{fortmatPhanTram(data['36-60'].TyLeMuChu)} %</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                  </StyledTableRow>
                   {/* 36-60 */}
                   <StyledTableRow>
                      <StyledTableCell align="center">Cộng</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSDanTrongNhomTuoi + data['26-35'].TSDanTrongNhomTuoi + data['15-25'].TSDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuDanTrongNhomTuoi + data['26-35'].NuDanTrongNhomTuoi + data['15-25'].NuDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocDanTrongNhomTuoi + data['26-35'].DanTocDanTrongNhomTuoi + data['15-25'].DanTocDanTrongNhomTuoi}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSMuchuMuc1 + data['26-35'].TSMuchuMuc1 + data['15-25'].TSMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuMuchuMuc1 + data['26-35'].NuMuchuMuc1 + data['15-25'].NuMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocMuchuMuc1 + data['26-35'].DanTocMuchuMuc1 + data['15-25'].DanTocMuchuMuc1}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSMuchuMuc2 + data['26-35'].TSMuchuMuc2 + data['15-25'].TSMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuMuchuMuc2 + data['26-35'].NuMuchuMuc2 + data['15-25'].NuMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocMuchuMuc2 + data['26-35'].DanTocMuchuMuc2 + data['15-25'].DanTocMuchuMuc2}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">{fortmatPhanTram((data['36-60'].TyLeMuChu + data['26-35'].TyLeMuChu + data['15-25'].TyLeMuChu) / 3)} %</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].TSTaiMuchu + data['26-35'].TSTaiMuchu + data['15-25'].TSTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].NuTaiMuchu + data['26-35'].NuTaiMuchu + data['15-25'].NuTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center">{data['36-60'].DanTocTaiMuchu + data['26-35'].DanTocTaiMuchu + data['15-25'].DanTocTaiMuchu}</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          : <LazyLoading />}
        </Fragment>
      );
}

export default SoNguoiMuChuTrongCacDoTuoi