import { Fragment } from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";
import { HookExportHTMLExcel } from "../hooks/HookExportHTMLExcel";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
  
    border: '1px solid rgba(224, 224, 224, 1)',
  },
}));




function fortmatPhanTram(number) {
  
  return parseFloat(number.toFixed(2));
}
const LiteracyWork = () => {
  const [data, setData] = React.useState();
  const getSoLieuCongTacChongMuChus = async () => {
    try {
      const result = await googleAPI.getSoLieuCongTacChongMuChu({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getSoLieuCongTacChongMuChus();
  }, []);

   
    return <Fragment>
         <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800 "
          >
            {" "}
            TỔNG HỢP TÌNH HÌNH SỐ LIỆU CÔNG TÁC CHỐNG MÙ CHỮ  {" "}
          </div>
          <Button variant="contained" onClick={() => HookExportHTMLExcel('my-table', 'so-lieu-cong-tac-chong-mu-chu')}>Export to Excel</Button >
          {
            data ? 
         
          <TableContainer id="my-table" component={Paper} sx={{  overflowX:'auto', marginTop:'20px' }}>
      <Table   aria-label="a dense table" size="medium" >
        <TableHead>
          <TableRow>
            <TableCell align="center" rowSpan={3} sx={{minWidth:'50px', border:'1px solid rgba(224, 224, 224, 1)'}} >TT</TableCell>
            <TableCell align="center" rowSpan={3} sx={{minWidth:'170px',border:'1px solid rgba(224, 224, 224, 1)'}}>Tên đơn vị</TableCell>
            <TableCell align="center" colSpan={4} rowSpan={2} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}  >Tổng dân số</TableCell>
            <TableCell align="center" colSpan={4} rowSpan={2} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 - 25 tuổi</TableCell>
            <TableCell align="center" colSpan={16} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 - 25 tuổi mù chữ</TableCell>
            <TableCell align="center" rowSpan={2} colSpan={4} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 - 35 tuổi</TableCell>
            <TableCell align="center" colSpan={16} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 - 35 tuổi mù chữ</TableCell>
            <TableCell align="center" rowSpan={2} colSpan={4} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 - 60 tuổi</TableCell>
            <TableCell align="center" colSpan={16} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}>Dân số từ 15 đến 60 tuổi mù chữ</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}  >Mức độ 1 (chưa hoàn thành lớp 3)</TableCell>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}  >Mức độ 2 (chưa hoàn thành lớp 5)</TableCell>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}   >Mức độ 1 (chưa hoàn thành lớp 3)</TableCell>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}   >Mức độ 2 (chưa hoàn thành lớp 5)</TableCell>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}   >Mức độ 1 (chưa hoàn thành lớp 3)</TableCell>
            <TableCell align="center" colSpan={8} sx={{border:'1px solid rgba(224, 224, 224, 1)'}}   >Mức độ 2 (chưa hoàn thành lớp 5)</TableCell>
          </TableRow>
          <TableRow>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>

          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >TS</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'50px'}} >Nữ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Dân Tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'150px'}} >Nữ dân tộc</TableCell>
          <TableCell align="center" colSpan={1}  sx={{border:'1px solid rgba(224, 224, 224, 1)', minWidth:'100px'}} >Tỷ lệ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data && data.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{item.ThonAp}</StyledTableCell>
              <StyledTableCell align="center">{item.TDanSo}</StyledTableCell>
              <StyledTableCell align="center">{item.TDanSoNu}</StyledTableCell>
              <StyledTableCell align="center">{item.TDantoc}</StyledTableCell>
              <StyledTableCell align="center">{item.TNuDanToc}</StyledTableCell>

              {/* 15-25 */}
              <StyledTableCell align="center">{item.TSo15_25}</StyledTableCell>
              <StyledTableCell align="center">{item.Nu15_25}</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSet15_25}</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSet15_25}</StyledTableCell>
              {/* 15 - 25 mức độ 1 */}
              <StyledTableCell align="center">{item.TSoMucDo115_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo115_25/item.TSo15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo115_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo115_25/item.Nu15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo15_25/item.DantocSet15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo15_25/item.NuDantocSet15_25) * 100)} %</StyledTableCell>

              {/* 15 - 25 mức độ 2 */}
              <StyledTableCell align="center">{item.TSoMucDo2_15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo2_15_25/item.TSo15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo2_15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo2_15_25/item.Nu15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo2_15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo2_15_25/item.DantocSet15_25) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo2_15_25}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo2_15_25/item.NuDantocSet15_25) * 100)} %</StyledTableCell>

              {/* 15 - 35 */}

              {/* 15-35 */}
              <StyledTableCell align="center">{item.TSo15_35}</StyledTableCell>
              <StyledTableCell align="center">{item.Nu15_35}</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSet15_35}</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSet15_35}</StyledTableCell>
              {/* 15 - 35 mức độ 1 */}
              <StyledTableCell align="center">{item.TSoMucDo115_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo115_35/item.TSo15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo115_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo115_35/item.Nu15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo15_35/item.DantocSet15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo15_35/item.NuDantocSet15_35) * 100)} %</StyledTableCell>

              {/* 15 - 35 mức độ 2 */}
              <StyledTableCell align="center">{item.TSoMucDo2_15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo2_15_35/item.TSo15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo2_15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo2_15_35/item.Nu15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo2_15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo2_15_35/item.DantocSet15_35) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo2_15_35}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo2_15_35/item.NuDantocSet15_35) * 100)} %</StyledTableCell>

              {/* 15 - 60 */}

              {/* 15-60 */}
              <StyledTableCell align="center">{item.TSo15_60}</StyledTableCell>
              <StyledTableCell align="center">{item.Nu15_60}</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSet15_60}</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSet15_60}</StyledTableCell>
              {/* 15 - 60 mức độ 1 */}
              <StyledTableCell align="center">{item.TSoMucDo115_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo115_60/item.TSo15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo115_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo115_60/item.Nu15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo15_60/item.DantocSet15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo15_60/item.NuDantocSet15_60) * 100)} %</StyledTableCell>

              {/* 15 - 60 mức độ 2 */}
              <StyledTableCell align="center">{item.TSoMucDo2_15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.TSoMucDo2_15_60/item.TSo15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuMucDo2_15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuMucDo2_15_60/item.Nu15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.DantocSetMucDo2_15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.DantocSetMucDo2_15_60/item.DantocSet15_60) * 100)} %</StyledTableCell>
              <StyledTableCell align="center">{item.NuDantocSetMucDo2_15_60}</StyledTableCell>
              <StyledTableCell align="center">{fortmatPhanTram((item.NuDantocSetMucDo2_15_60/item.NuDantocSet15_60) * 100)} %</StyledTableCell>
            </StyledTableRow>
          )) }
         
        </TableBody>
      </Table>
    </TableContainer>
    : <LazyLoading /> }
    </Fragment>
}

export default LiteracyWork