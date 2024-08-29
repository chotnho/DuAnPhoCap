import { Button, TablePagination } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Fragment } from "react";
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { googleAPI } from '../apis/google.api';
import { thonXomAPI } from '../apis/thonXom.api';
import ModalExcelComponent from '../components/ModalExcelComponent';
import ModalPhieuDieuTra from '../components/ModalPhieuDieuTra';
import SelectComponent from '../components/SelectComponent';
import { HookExportExcelMau } from '../hooks/HookExportExcelMau';


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
const SurveyManagement = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [data, setData] = React.useState([])
    const [pageIndex, setPageIndex] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const [count, setCount] = React.useState(1)
    const [dataTX, setDataTX] = React.useState([]);
    const [search, setSearch] = React.useState('')
    const [form, setform] = React.useState({
        id: '',
        SoPhieu: '',
        ThonAp: '',
        HoVaTen: '',
        Ngay: '',
        Thang: '',
        Nam: '',
        GioiTinh: '',
        DanToc: '',
        HoanCanhDB: '',
        KhuyetTat: false,
        ChuHo: '',
        TenTruongDaiHoc: '',
        Khoi: '',
        Lop: '',
        TenHuyen: '',
        BacTN: '',
        KhoiHocXong: '',
    })

    const [formError, setformError] = React.useState({
        SoPhieu: false,
        ThonAp: false,
        HoVaTen: false,
        GioiTinh: false,
       
    })

    const navigate = useNavigate();
    const location = useLocation();
  
    // eslint-disable-next-line no-unused-vars
    const searchParams = new URLSearchParams(location.search);

    const query = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        search: search,
    }

    const handleOpenModal = () => {
        setOpen(true)
        setTitle('Thêm mới')
    };

    const createPhieuDieuTra = async () => {
        // Kiểm tra các trường và cập nhật trạng thái lỗi
        const errors = {
            SoPhieu: form.SoPhieu.trim() === '',
            ThonAp: form.ThonAp.trim() === '',
            HoVaTen: form.HoVaTen.trim() === '',
            GioiTinh: form.GioiTinh.trim() === '',
        };
        setformError(errors);
        // Nếu có lỗi, không tiếp tục gọi API
        if (Object.values(errors).includes(true)) {
            toast.warning('Vui lòng điền thông tin vào các ô đỏ.');
            return;
        }
        // Nếu không có lỗi, gọi API và reset form
        try {
            if(form.id !== ''){
                const body = {
                    SoPhieu: form.SoPhieu,
                    ThonAp: form.ThonAp.id,
                    HoVaTen: form.HoVaTen,
                    Ngay: form.Ngay,
                    Thang: form.Thang,
                    Nam: form.Nam,
                    GioiTinh: form.GioiTinh,
                    DanToc: form.DanToc,
                    HoanCanhDB: form.HoanCanhDB,
                    KhuyetTat: form.KhuyetTat,
                    ChuHo: form.ChuHo,
                    TenTruongDaiHoc: form.TenTruongDaiHoc,
                    Khoi: form.Khoi,
                    Lop: form.Lop,
                    TenHuyen: form.TenHuyen,
                    BacTN: form.BacTN,
                    KhoiHocXong: form.KhoiHocXong,
                }
                const updateResult = await googleAPI.updateDoiTuong(form.id ,body);
                if (updateResult.data.status === 1) {
                    toast.success(updateResult.data.message);
                    setOpen(false);
                    setform({
                        id: '',
                        SoPhieu: '',
                        ThonAp: '',
                        HoVaTen: '',
                        Ngay: '',
                        Thang: '',
                        Nam: '',
                        GioiTinh: '',
                        DanToc: '',
                        HoanCanhDB: '',
                        KhuyetTat: false,
                        ChuHo: '',
                        TenTruongDaiHoc: '',
                        Khoi: '',
                        Lop: '',
                        TenHuyen: '',
                        BacTN: '',
                        KhoiHocXong: '',
                    });
                    getPagingDoiTuongs()
                }
                
            } else {
                const result = await googleAPI.createDataDoiTuong(form);
                if (result.data.status === 1) {
                    toast.success(result.data.message);
                    setOpen(false);
                    setform({
                        id: '',
                        SoPhieu: '',
                        ThonAp: '',
                        HoVaTen: '',
                        Ngay: '',
                        Thang: '',
                        Nam: '',
                        GioiTinh: '',
                        DanToc: '',
                        HoanCanhDB: '',
                        KhuyetTat: false,
                        ChuHo: '',
                        TenTruongDaiHoc: '',
                        Khoi: '',
                        Lop: '',
                        TenHuyen: '',
                        BacTN: '',
                        KhoiHocXong: '',
                    });
                    getPagingDoiTuongs()
                }
            }
            
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi tạo phiếu điều tra.');
        }
    };

    const getPagingDoiTuongs = async() => {
        const result = await googleAPI.getPagingDoiTuong(query);
        setData(result.data.data)
        setPageIndex(result.data.pageIndex)
        setPageSize(result.data.pageSize)
        setCount(result.data.count)
    }

    React.useEffect(() => {
        const searchParams = new URLSearchParams(query).toString();
        navigate(`?${searchParams}`);
        getPagingDoiTuongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageIndex, pageSize, search])

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

    React.useEffect(() => {
        getAllThonAps();
    }, []);


    const handleChangePage = (event, newPage) => {
        setPageIndex(newPage + 1);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setPageIndex(1);
      };

    const onClickOpenModalEdit = (item) => {
        setOpen(true);
        setTitle('Cập nhật');
        setform({
            id: item.id,
            SoPhieu: item.SoPhieu,
            ThonAp: item.ThonAp.id,
            HoVaTen: item.HoVaTen,
            Ngay: item.Ngay,
            Thang: item.Thang,
            Nam: item.Nam,
            GioiTinh: item.GioiTinh,
            DanToc: item.DanToc,
            HoanCanhDB: item.HoanCanhDB,
            KhuyetTat: item.KhuyetTat,
            ChuHo: item.ChuHo,
            TenTruongDaiHoc: item.TenTruongDaiHoc,
            Khoi: item.Khoi,
            Lop: item.Lop,
            TenHuyen: item.TenHuyen,
            BacTN: item.BacTN,
            KhoiHocXong: item.KhoiHocXong,
        });
    }

    const onclickDelete = async(id) => {
        const result = await googleAPI.deleteDoiTuong(id);
        if(result.data.status === 1){
            toast.success(`${result.data.message}`);
            getPagingDoiTuongs()
        }   
    }

    const handleChangeTX = (e) => {
       
        setSearch(e.target.value)
    }
 
    return <Fragment>
        <div className="flex justify-between  " ></div>
        <div className="text-xl" >Quản lý phiếu điều tra</div>
        <div className="flex justify-between mt-3" >
            
            <div className='w-[300px]' >
                <SelectComponent
                    label="Thôn xóm"
                    data={dataTXs}
                    handleChange={handleChangeTX}
                    value={search}
                    // error={formError.ThonAp}
                />
            </div>
            <div className='gap-3 flex  ' >
               
               <HookExportExcelMau fileName='phieu_dieu_tra' />
                <ModalExcelComponent fecthData={getPagingDoiTuongs} />
                <Button onClick={handleOpenModal} variant="contained" >Thêm mới</Button>
            </div>
            
        </div>
        <TableContainer component={Paper} className='mt-3' >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '50px', border: '1px solid rgba(224, 224, 224, 1)' }}>Số TT</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Số phiếu điều tra</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '150px', border: '1px solid rgba(224, 224, 224, 1)' }}>Họ và tên</TableCell>
                        <TableCell align="center" colSpan={3} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Năm sinh</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Giới tính</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Dân tộc</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '200px', border: '1px solid rgba(224, 224, 224, 1)' }}>Thôn Ấp</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Ghi chú</TableCell>
                        <TableCell align="center" rowSpan={2} sx={{ minWidth: '200px', border: '1px solid rgba(224, 224, 224, 1)' }}>Thao tác</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Ngày</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Tháng</TableCell>
                        <TableCell align="center" sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Năm</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       data && data.map((item, index) => {
                            return <StyledTableRow key={item.id}>
                            <StyledTableCell>{index + 1}</StyledTableCell>
                            <StyledTableCell>{item.SoPhieu}</StyledTableCell>
                            <StyledTableCell>{item.HoVaTen}</StyledTableCell>
                            <StyledTableCell>{item.Ngay}</StyledTableCell>
                            <StyledTableCell>{item.Thang}</StyledTableCell>
                            <StyledTableCell>{item.Nam}</StyledTableCell>
                            <StyledTableCell>{item.GioiTinh}</StyledTableCell>
                            <StyledTableCell>{item.DanToc}</StyledTableCell>
                            <StyledTableCell>{item.ThonAp.name}</StyledTableCell>
                            <StyledTableCell>{item.GhiChu}</StyledTableCell>
                            <StyledTableCell>
                            <div className="flex justify-center items-center gap-2" >
                                    <MdDelete onClick={() => onclickDelete(item.id)} size={25} className="cursor-pointer" color="red" />
                                    <RiEdit2Fill onClick={() => onClickOpenModalEdit(item)} size={25} className="cursor-pointer" color="#068289" />
                                    </div>
                            </StyledTableCell>
                        </StyledTableRow>
                        })
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            component="div"
            count={count}
            page={pageIndex -1}
            onPageChange={handleChangePage}
            rowsPerPage={Number(pageSize)}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <ModalPhieuDieuTra open={open} setOpen={setOpen} title={title} setform={setform} form={form} createPhieuDieuTra={createPhieuDieuTra} formError={formError} />
        
    </Fragment>
}

export default SurveyManagement