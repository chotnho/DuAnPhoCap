import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { Fragment, useState } from "react";
import { thonXomAPI } from "../apis/thonXom.api";
import SelectComponent from "../components/SelectComponent";
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";
import { useLocation, useNavigate } from "react-router-dom";

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

const ThongKeThonXom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataTX, setDataTX] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const searchParams = new URLSearchParams(location.search);

  const query = {
    id: search,
  };

  const getAllThonAps = async () => {
    const result = await thonXomAPI.getAllThonAp();
    setDataTX(result.data.data);
  };

  const dataTXs = dataTX.map((item) => {
    return {
      id: item.id,
      name: item.name,
      value: item.id,
    };
  });

  const getThongKeByThonAps = async () => {
    const result = await googleAPI.getThongKeByThonAp(query);

    setData(result.data.data);
    setTitle(result.data.thonAp);
  };

  React.useEffect(() => {
    const searchParams = new URLSearchParams(query).toString();
    navigate(`?${searchParams}`);
    getThongKeByThonAps();
  }, [query.id]);

  React.useEffect(() => {
    getAllThonAps();
  }, []);

  const handleChangeTX = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <div className="w-[300px] mt-4">
        <SelectComponent
          label="Chọn thôn xóm"
          data={dataTXs}
          handleChange={handleChangeTX}
          value={search}
        />
      </div>
      <div
        style={{ textTransform: "uppercase" }}
        className="text-center text-xl font-bold text-teal-800 mt-4 "
      >
        {" "}
        thống kê trẻ em từ 6 -10 tuổi {title.id && title.name}
      </div>
      {data?.tuoi6 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="medium" aria-label="simple table bg-[#0e7490]">
            <TableHead>
              <TableRow sx={{ height: "30px" }}>
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
                <StyledTableCell component="th" scope="row">
                  Tổng số
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.total}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi7.total}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi8.total}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi9.total}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi10.total}
                </StyledTableCell>
                <StyledTableCell align="center">
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
                <StyledTableCell component="th" scope="row">
                  Nữ
                </StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi6.female}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi7.female}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi8.female}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi9.female}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi10.female}</StyledTableCell>
                <StyledTableCell align="center">
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
                <StyledTableCell component="th" scope="row">
                  Dân tộc
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.DanToc}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi7.DanToc}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi8.DanToc}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi9.DanToc}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi10.DanToc}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.DanToc +
                    data?.tuoi7.DanToc +
                    data?.tuoi8.DanToc +
                    data?.tuoi9.DanToc +
                    data?.tuoi10.DanToc}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Khuyết tật
                </StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi6.khuyetTat}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi7.khuyetTat}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi8.khuyetTat}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi9.khuyetTat}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi10.khuyetTat}</StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.khuyetTat +
                    data?.tuoi7.khuyetTat +
                    data?.tuoi8.khuyetTat +
                    data?.tuoi9.khuyetTat +
                    data?.tuoi10.khuyetTat}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Chuyển đến
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.chuyenDen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi7.chuyenDen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi8.chuyenDen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi9.chuyenDen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi10.chuyenDen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.chuyenDen +
                    data?.tuoi7.chuyenDen +
                    data?.tuoi8.chuyenDen +
                    data?.tuoi9.chuyenDen +
                    data?.tuoi10.chuyenDen}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Chuyển đi
                </StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi6.chuyenDi}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi7.chuyenDi}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi8.chuyenDi}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi9.chuyenDi}</StyledTableCell>
                <StyledTableCell align="center">{data?.tuoi10.chuyenDi}</StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.chuyenDi +
                    data?.tuoi7.chuyenDi +
                    data?.tuoi8.chuyenDi +
                    data?.tuoi9.chuyenDi +
                    data?.tuoi10.chuyenDi}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  Chết
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi6.chet}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi7.chet}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi8.chet}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi9.chet}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data?.tuoi10.chet}
                </StyledTableCell>
                <StyledTableCell align="center">
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
      ) : (
        <LazyLoading />
      )}
    </Fragment>
  );
};

export default ThongKeThonXom;
