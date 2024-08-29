import { Box, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Fragment } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { googleAPI } from "../apis/google.api";
import LazyLoading from "../components/LazyLoading";



const dataSelect = [];
const currentYear = new Date().getFullYear();

for (let year = 1900; year <= currentYear; year++) {
  const age = currentYear - year;
  dataSelect.push({
    id: year - 1899,  // id bắt đầu từ 1
    value: year,
    name: `${year} --- ${age} tuổi`
  });
}
dataSelect.reverse();
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '4px'
};

const Lookup = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState();
  const [soPhieu, setSoPhieu] = React.useState("");
  const [hoVaTen, setHoVaTen] = React.useState("");
  const [ChuHo, setChuHo] = React.useState("");
  const [GioiTinh, setGioiTinh] = React.useState("");
  const [YearFrom, setYearFrom] = React.useState("");
  const [YearTo, setYearTo] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const query = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    soPhieu: soPhieu || "",
    hoVaTen: hoVaTen || "",
    ChuHo: ChuHo || "",
    GioiTinh: GioiTinh || "",
    YearFrom: YearFrom || "",
    YearTo: YearTo || "",
  };

  React.useEffect(() => {
    const searchParams = new URLSearchParams(query).toString();
    navigate(`?${searchParams}`);
  }, [query.pageIndex, query.pageSize, query.soPhieu, query.hoVaTen, query.ChuHo, query.GioiTinh, query.YearFrom, query.YearTo])

  const getThongKe6Den10s = async () => {
    try {
      const result = await googleAPI.getpaging(query, { timeout: 5000 }); // 5000ms = 5 seconds
      
      setData(result.data);
      setPageSize(result.data.pageSize);
      setCount(result.data.count);
      setPageIndex(result.data.pageIndex);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getThongKe6Den10s();
  }, [query.pageIndex, query.pageSize]);

  const handleChangePage = (event, newPage) => {
    setPageIndex(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPageIndex(0);
  };

  const handleGenderChange = (event) => {
    setGioiTinh(event.target.value);
  };

  const handleChangeYearFrom = (e) => {
    setYearFrom(e.target.value)
  }

  const handleChangeYearTo = (e) => {

    if (Number(e.target.value) < Number(YearFrom)) {
      return toast.warning('Năm sinh đến phải lớn hơn năm sinh từ')
    } else {
      return setYearTo(e.target.value)
    }

  }

  const handleSearch = () => {
    getThongKe6Den10s();
    setOpen(false);
    setPageIndex(0)
  };
  return (
    <Fragment>
      {data ? (
        <div>

          <Button variant="contained" color="success" onClick={handleOpen}>Tìm kiếm</Button>
          <div className="mt-5">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}}>STT</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Số phiếu điều tra</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Họ và tên</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Năm sinh</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Giới tính</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Dân tộc</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Thôn xóm</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Học Lớp</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Trường</TableCell>
                    <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">Ghi chú</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.data &&
                    data.data.map((item, index) => {
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: '1px solid rgba(224, 224, 224, 1)' },
                          }}
                        >
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.SoPhieu}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.HoVaTen}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.Nam}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.GioiTinh}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.DanToc}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.ThonAp.name}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.Lop}</TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">
                            {item.TenTruongDaiHoc}
                          </TableCell>
                          <TableCell sx={{border: '1px solid rgba(224, 224, 224, 1)'}} align="center">{item.GhiChu}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={count}
              page={pageIndex -1}
              onPageChange={handleChangePage}
              rowsPerPage={pageSize}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      ) : (
        <LazyLoading />
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex items-center justify-center">
              <Box className="w-[500px] min-h-[300px] bg-slate-300 p-4">
                <div className="text-2xl text-orange-700 font-bold text-center ">
                  Tra cứu
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[35%] text-lg ">Số phiếu :</div>
                  <input
                    onChange={(e) => {
                      setSoPhieu(e.target.value);
                    }}
                    value={searchParams.get('soPhieu')}
                    className="w-[65%] h-[30px] p-2"
                  />
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[35%] text-lg ">Đối tượng - Họ tên :</div>
                  <input
                    onChange={(e) => {
                      setHoVaTen(e.target.value);
                    }}
                    value={searchParams.get('hoVaTen')}
                    className="w-[65%] h-[30px] p-2"
                  />
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[35%] text-lg ">Chủ hộ - Họ tên :</div>
                  <input
                    onChange={(e) => {
                      setChuHo(e.target.value);
                    }}
                    value={searchParams.get('ChuHo')}
                    className="w-[65%] h-[30px] p-2"
                  />
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[35%] text-lg ">Năm sinh từ :</div>
                  <Select
                    className="w-[65%] h-[35px] p-2 bg-white"
                    value={searchParams.get('YearFrom')}
                    onChange={handleChangeYearFrom}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {
                      dataSelect && dataSelect.map((item, index) => {
                        return <MenuItem key={item.id} value={item.value}>
                          <em>{item.name}</em>
                        </MenuItem>
                      })
                    }


                  </Select>
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-[35%] text-lg ">Năm sinh đến :</div>
                  <Select
                    className="w-[65%] h-[35px] p-2 bg-white"
                    value={searchParams.get('YearTo')}
                    onChange={handleChangeYearTo}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {
                      dataSelect && dataSelect.map((item, index) => {
                        return <MenuItem key={item.id} value={item.value}>
                          <em>{item.name}</em>
                        </MenuItem>
                      })
                    }
                  </Select>
                </div>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="nam"
                    name="radio-buttons-group"
                    onChange={handleGenderChange}
                    value={searchParams.get('GioiTinh')}
                  >
                    <FormControlLabel
                      value="Nam"
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                  </RadioGroup>
                </FormControl>
                <div className="flex justify-center">
                  <Button onClick={handleSearch} variant="contained">
                    Tìm kiếm
                  </Button>
                </div>
              </Box>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default Lookup;
