import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";
import ComponentSelect from "../components/select";


const dataSelect = [
  { id: 1, value: 6, name: "Trẻ 6 tuổi" },
  { id: 2, value: 7, name: "Trẻ 7 tuổi" },
  { id: 3, value: 8, name: "Trẻ 8 tuổi" },
  { id: 4, value: 9, name: "Trẻ 9 tuổi" },
  { id: 5, value: 10, name: "Trẻ 10 tuổi" },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border : '1px solid rgba(224, 224, 224, 1)'
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

const StatisticM1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [data, setData] = React.useState();
  const [dataSearch, setDataSearch] = React.useState();
  const [age, setAge] = React.useState('');

  const query = {
    age: age
  }
  const getThongKe6Den10s = async () => {
    try {
      const result = await googleAPI.getThongKe6Den10({ timeout: 5000 }); // 5000ms = 5 seconds
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getThongKeByTuois = async () => {
    try {
      const result = await googleAPI.getThongKeByTuoi(query, { timeout: 5000 });
      setDataSearch(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  React.useEffect(() => {
    getThongKe6Den10s();
  }, []);

  React.useEffect(() => {

    const searchParams = new URLSearchParams(query).toString();
    navigate(`?${searchParams}`);
    getThongKeByTuois()
  }, [query.age])

  console.log(dataSearch,'dataSearch');
  
  return (
    <div>
      {data?.tuoi6 ? (
        <>
          <div>
            <ComponentSelect data={dataSelect} setAge={setAge} age={age} />
          </div>
          <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800 "
          >
            {" "}
            thống kê trẻ em từ 6 -10 tuổi{" "}
          </div>
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow sx={{height:'30px'}} >
                  <StyledTableCell>Độ tuổi</StyledTableCell>
                  <StyledTableCell align="center">6 tuổi</StyledTableCell>
                  <StyledTableCell align="center">7 tuổi</StyledTableCell>
                  <StyledTableCell align="center">8 tuổi</StyledTableCell>
                  <StyledTableCell align="center">9 tuổi</StyledTableCell>
                  <StyledTableCell align="center">10 tuổi</StyledTableCell>
                  <StyledTableCell align="center">Tổng (6-10)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Tổng số
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.total}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.total}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.total}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.total}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.total}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.total +
                      data?.tuoi7.total +
                      data?.tuoi8.total +
                      data?.tuoi9.total +
                      data?.tuoi10.total}
                  </StyledTableCell>
                </StyledTableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Nữ
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.female}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.female}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.female}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.female}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.female}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.female +
                      data?.tuoi7.female +
                      data?.tuoi8.female +
                      data?.tuoi9.female +
                      data?.tuoi10.female}
                  </StyledTableCell>
                </TableRow>
                <StyledTableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Dân tộc
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.DanToc}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.DanToc}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.DanToc}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.DanToc}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.DanToc}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.DanToc +
                      data?.tuoi7.DanToc +
                      data?.tuoi8.DanToc +
                      data?.tuoi9.DanToc +
                      data?.tuoi10.DanToc}
                  </StyledTableCell>
                </StyledTableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Khuyết tật
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.khuyetTat}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.khuyetTat}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.khuyetTat}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.khuyetTat}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.khuyetTat}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.khuyetTat +
                      data?.tuoi7.khuyetTat +
                      data?.tuoi8.khuyetTat +
                      data?.tuoi9.khuyetTat +
                      data?.tuoi10.khuyetTat}
                  </StyledTableCell>
                </TableRow>
                <StyledTableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Chuyển đến
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.chuyenDen}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.chuyenDen}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.chuyenDen}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.chuyenDen}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.chuyenDen}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.chuyenDen +
                      data?.tuoi7.chuyenDen +
                      data?.tuoi8.chuyenDen +
                      data?.tuoi9.chuyenDen +
                      data?.tuoi10.chuyenDen}
                  </StyledTableCell>
                </StyledTableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Chuyển đi
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.chuyenDi}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.chuyenDi}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.chuyenDi}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.chuyenDi}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.chuyenDi}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.chuyenDi +
                      data?.tuoi7.chuyenDi +
                      data?.tuoi8.chuyenDi +
                      data?.tuoi9.chuyenDi +
                      data?.tuoi10.chuyenDi}
                  </StyledTableCell>
                </TableRow>
                <StyledTableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                    Chết
                  </StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi6.chet}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi7.chet}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi8.chet}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi9.chet}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{data?.tuoi10.chet}</StyledTableCell>
                  <StyledTableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                    {data?.tuoi6.chet +
                      data?.tuoi7.chet +
                      data?.tuoi8.chet +
                      data?.tuoi9.chet +
                      data?.tuoi10.chet}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>


        </>
      ) : (
        <LazyLoading />
      )}
      {
        searchParams.get('age') &&
        <>
          <div
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl font-bold text-teal-800 mt-10 "
          >
            {" "}
            thống kê trẻ em từ {searchParams.get('age')} tuổi{" "}
          </div>
          {
            dataSearch ? <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}  aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell colSpan={2} scope="2">
                      Lớp
                    </StyledTableCell>
                    <StyledTableCell align="center">Lớp 1</StyledTableCell>
                    <StyledTableCell align="center">Lớp 2</StyledTableCell>
                    <StyledTableCell align="center">Lớp 3</StyledTableCell>
                    <StyledTableCell align="center">Lớp 4</StyledTableCell>
                    <StyledTableCell align="center">Lớp 5</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell colSpan={2} component="th" scope="row">
                      Số phải phổ cập (PPC)
                    </StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop1 > 0 ? dataSearch.phoCapTC.lop1 + dataSearch.phoCapNK.lop1 : 0 }</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop2 > 0 ? dataSearch.phoCapTC.lop2 + dataSearch.phoCapNK.lop2 + dataSearch.phoCapTC.luubanLop1 : 0 }</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop3 > 0 ? dataSearch.phoCapTC.lop3 + dataSearch.phoCapNK.lop3 + dataSearch.phoCapTC.luubanLop1 + dataSearch.phoCapTC.luubanLop2 : 0 }</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop4 > 0 ? dataSearch.phoCapTC.lop4 + dataSearch.phoCapNK.lop4 + dataSearch.phoCapTC.luubanLop1 + dataSearch.phoCapTC.luubanLop2 + dataSearch.phoCapTC.luubanLop3 : 0 }</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop5 > 0 ? dataSearch.phoCapTC.lop5 + dataSearch.phoCapNK.lop5 + dataSearch.phoCapTC.luubanLop1 + dataSearch.phoCapTC.luubanLop2 + dataSearch.phoCapTC.luubanLop3 + dataSearch.phoCapTC.luubanLop4 : 0 }</StyledTableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell rowSpan={2}>Số PPC</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      Tại chỗ
                    </StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop1  || dataSearch.phoCapTC.luubanLop1 }</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop2  || dataSearch.phoCapTC.luubanLop2}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop3  || dataSearch.phoCapTC.luubanLop3}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop4  || dataSearch.phoCapTC.luubanLop4}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapTC.lop5}</StyledTableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      Nơi khác
                    </StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapNK.lop1}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapNK.lop2}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapNK.lop3}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapNK.lop4}</StyledTableCell>
                    <StyledTableCell align="center">{dataSearch.phoCapNK.lop5}</StyledTableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell rowSpan={2} component="th" scope="row">
                      Nới khác đến
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer> : <LazyLoading />
          }

        </>
      }
    </div>
  );
};

export default StatisticM1;
