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
import { fortmatPhanTram } from "../utils/config";
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

const ThongKeMuChuMuc2 = () => {

    const [data, setData] = React.useState();
  
  const getThongKeMuChuMuc2s = async () => {
    try {
      const result = await googleAPI.getThongKeMuChuMuc2({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getThongKeMuChuMuc2s();
  }, []);

  
  const TSo15_25Total = data?.reduce((sum, item) => sum + (item.TSo15_25 || 0), 0)
  const Nu15_25Total = data?.reduce((sum, item) => sum + (item.Nu15_25 || 0), 0)
  const DantocSet15_25Total = data?.reduce((sum, item) => sum + (item.DantocSet15_25 || 0), 0)
  const NuDantocSet15_25Total = data?.reduce((sum, item) => sum + (item.NuDantocSet15_25 || 0), 0)

  const TSoMuchu15_25Total = data?.reduce((sum, item) => sum + (item.TSoMuchu15_25 || 0), 0)
  
  const NuMuchu15_25Total = data?.reduce((sum, item) => sum + (item.NuMuchu15_25 || 0), 0)
  const DantocMuchuSet15_25Total = data?.reduce((sum, item) => sum + (item.DantocMuchuSet15_25 || 0), 0)
  const NuDantocMuchuSet15_25Total = data?.reduce((sum, item) => sum + (item.NuDantocMuchuSet15_25 || 0), 0)

  const TSo15_35Total = data?.reduce((sum, item) => sum + (item.TSo15_35 || 0), 0)
  const Nu15_35Total = data?.reduce((sum, item) => sum + (item.Nu15_35 || 0), 0)
  const DantocSet15_35Total = data?.reduce((sum, item) => sum + (item.DantocSet15_35 || 0), 0)
  const NuDantocSet15_35Total = data?.reduce((sum, item) => sum + (item.NuDantocSet15_35 || 0), 0)
  const TSoMuchu15_35Total = data?.reduce((sum, item) => sum + (item.TSoMuchu15_35 || 0), 0)
  const NuMuchu15_35Total = data?.reduce((sum, item) => sum + (item.NuMuchu15_35 || 0), 0)
  const DantocMuchuSet15_35Total = data?.reduce((sum, item) => sum + (item.DantocMuchuSet15_35 || 0), 0)
  const NuDantocMuchuSet15_35Total = data?.reduce((sum, item) => sum + (item.NuDantocMuchuSet15_35 || 0), 0)

  const TSo15_60Total = data?.reduce((sum, item) => sum + (item.TSo15_60 || 0), 0)
  const Nu15_60Total = data?.reduce((sum, item) => sum + (item.Nu15_60 || 0), 0)
  const DantocSet15_60Total = data?.reduce((sum, item) => sum + (item.DantocSet15_60 || 0), 0)
  const NuDantocSet15_60Total = data?.reduce((sum, item) => sum + (item.NuDantocSet15_60 || 0), 0)
  const TSoMuchu15_60Total = data?.reduce((sum, item) => sum + (item.TSoMuchu15_60 || 0), 0)
  const NuMuchu15_60Total = data?.reduce((sum, item) => sum + (item.NuMuchu15_60 || 0), 0)
  const DantocMuchuSet15_60Total = data?.reduce((sum, item) => sum + (item.DantocMuchuSet15_60 || 0), 0)
  const NuDantocMuchuSet15_60Total = data?.reduce((sum, item) => sum + (item.NuDantocMuchuSet15_60 || 0), 0)
  
    return <Fragment>
        <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800 "
        >
            {" "}
            THỐNG KÊ HIỆN TRẠNG MÙ CHỮ MỨC 2{" "}
        </div>
        <Button variant="contained" onClick={() => HookExportHTMLExcel('my-table-4', 'thong-ke-hien-trang-mu-chu-muc-2')}>Export to Excel</Button >
        <TableContainer
            id="my-table-4"
            component={Paper}
            sx={{ overflowX: "auto", marginTop: "20px" }}
        >
            <Table aria-label="a dense table" size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" rowSpan={3} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Số TT</TableCell>
                        <TableCell align="center" rowSpan={3} sx={{ minWidth: '200px', border: '1px solid rgba(224, 224, 224, 1)' }}>Đơn vị</TableCell>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân số trong độ tuổi</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Người mù chữ trong độ tuổi</TableCell>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân số trong độ tuổi</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Người mù chữ trong độ tuổi</TableCell>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân số trong độ tuổi</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Người mù chữ trong độ tuổi</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 25</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 25</TableCell>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 35</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 35</TableCell>
                        <TableCell align="center" colSpan={4} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 60</TableCell>
                        <TableCell align="center" colSpan={8} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15 - 60</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ Dân tộc</TableCell>

                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>

                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ Dân tộc</TableCell>

                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>

                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân Tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ Dân tộc</TableCell>

                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tổng số</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>
                        <TableCell align="center" sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Nữ dân tộc</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tỷ lệ %</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>1</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>2</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>3</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>4</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>5</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>6</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>7</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>8</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>9</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>10</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>11</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>12</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>13</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>14</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>15</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>16</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>17</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>18</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>19</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>20</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>21</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>22</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>23</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>24</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>25</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>26</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>27</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>28</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>29</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>30</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>31</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>32</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>33</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>34</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>35</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>36</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>37</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>38</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data && data.map((item, index) => {
                            return  <StyledTableRow key={index}>
                                <StyledTableCell  align="center" >{index}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.ThonAp}</StyledTableCell>
                                {/* 15 -25 */}
                                <StyledTableCell  align="center" >{item.TSo15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.Nu15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocSet15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocSet15_25}</StyledTableCell>

                                <StyledTableCell  align="center" >{item.TSoMuchu15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.TSoMuchu15_25/item.TSo15_25)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuMuchu15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuMuchu15_25/item.Nu15_25)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocMuchuSet15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.DantocMuchuSet15_25/item.NuDantocSet15_25)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocMuchuSet15_25}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuDantocMuchuSet15_25/item.NuDantocSet15_25)*100)} %</StyledTableCell>

                                 {/* 15 -35 */}
                                 <StyledTableCell  align="center" >{item.TSo15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.Nu15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocSet15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocSet15_35}</StyledTableCell>

                                <StyledTableCell  align="center" >{item.TSoMuchu15_35}</StyledTableCell>
                                 <StyledTableCell  align="center" >{fortmatPhanTram((item.TSoMuchu15_35/item.TSo15_35)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuMuchu15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuMuchu15_35/item.Nu15_35)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocMuchuSet15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.DantocMuchuSet15_35/item.NuDantocSet15_35)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocMuchuSet15_35}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuDantocMuchuSet15_35/item.NuDantocSet15_35)*100)} %</StyledTableCell>


                                 {/* 15 -60 */}
                                 <StyledTableCell  align="center" >{item.TSo15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.Nu15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocSet15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocSet15_60}</StyledTableCell>

                                 <StyledTableCell  align="center" >{item.TSoMuchu15_60}</StyledTableCell>
                                 <StyledTableCell  align="center" >{fortmatPhanTram((item.TSoMuchu15_60/item.TSo15_60)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuMuchu15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuMuchu15_60/item.Nu15_60)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.DantocMuchuSet15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.DantocMuchuSet15_60/item.NuDantocSet15_60)*100)} %</StyledTableCell>
                                <StyledTableCell  align="center" >{item.NuDantocMuchuSet15_60}</StyledTableCell>
                                <StyledTableCell  align="center" >{fortmatPhanTram((item.NuDantocMuchuSet15_60/item.NuDantocSet15_60)*100)} %</StyledTableCell>
                            </StyledTableRow>
                        })
                    }

                    <StyledTableRow key={1}>
                          
                        <StyledTableCell colSpan={2}  align="center" >Tổng Số</StyledTableCell>
                        {/* 15-25 */}
                        <StyledTableCell   align="center" >{TSo15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{Nu15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocSet15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocSet15_25Total}</StyledTableCell>

                        <StyledTableCell   align="center" >{TSoMuchu15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((TSoMuchu15_25Total/TSo15_25Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuMuchu15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuMuchu15_25Total/Nu15_25Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocMuchuSet15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((DantocMuchuSet15_25Total/DantocSet15_25Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocMuchuSet15_25Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuDantocMuchuSet15_25Total/NuDantocSet15_25Total)*100) } %</StyledTableCell>
                        
                        {/* 15-35 */}
                        <StyledTableCell   align="center" >{TSo15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{Nu15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocSet15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocSet15_35Total}</StyledTableCell>

                        <StyledTableCell   align="center" >{TSoMuchu15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((TSoMuchu15_35Total/TSo15_35Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuMuchu15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuMuchu15_35Total/Nu15_35Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocMuchuSet15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((DantocMuchuSet15_35Total/DantocSet15_35Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocMuchuSet15_35Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuDantocMuchuSet15_35Total/NuDantocSet15_35Total)*100) } %</StyledTableCell>

                        {/* 15-60 */}
                        <StyledTableCell   align="center" >{TSo15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{Nu15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocSet15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocSet15_60Total}</StyledTableCell>

                        <StyledTableCell   align="center" >{TSoMuchu15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((TSoMuchu15_60Total/TSo15_60Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuMuchu15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuMuchu15_60Total/Nu15_60Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{DantocMuchuSet15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((DantocMuchuSet15_60Total/DantocSet15_60Total)*100) } %</StyledTableCell>
                        <StyledTableCell   align="center" >{NuDantocMuchuSet15_60Total}</StyledTableCell>
                        <StyledTableCell   align="center" >{fortmatPhanTram((NuDantocMuchuSet15_60Total/NuDantocSet15_60Total)*100) } %</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Fragment>
}

export default ThongKeMuChuMuc2