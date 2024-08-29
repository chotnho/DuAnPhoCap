import { Button, TableBody } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Fragment } from "react";
import ModelThomXom from "../components/ModelThonXom";
import { thonXomAPI } from "../apis/thonXom.api";
import { toast } from "react-toastify";
import moment from 'moment';
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
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

const VillageManagement = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [name, setName] = React.useState('');
    const [data, setData] = React.useState([]);
    const [id, setId] = React.useState('')

    const handleCreate = () => {
        setOpen(true)
        setTitle('Tạo ')
    };

    const createThonAp = async () => {
        try {
            if(name === ''){
                return toast.warning('Thôn xóm không được bỏ trống!')
            }
            if(id) {
                const result = await thonXomAPI.updateThonAp(id, {name});
                if(result.data.status === 1){
                    toast.success(`${result.data.message}`)
                    setOpen(false)
                    getAllThonAps()
                }
            } else {
                const result = await thonXomAPI.create({name})
                if(result.data.status === 1){
                    toast.success(`${result.data.message}`)
                    setOpen(false)
                    getAllThonAps()
                }
            }
            
        } catch (error) {
            toast.warning('Thôn xóm đã tồn tại')
        }
       
    }

    const getAllThonAps = async () => {
        const result = await thonXomAPI.getAllThonAp()
        setData(result.data.data)
    }

    React.useEffect(() => {
        getAllThonAps()
    }, [])

    const onClickEdit = (value) => {
        setName(value.name);
        setId(value.id)
        setTitle('Cập nhật thôn xóm')
        setOpen(true)
        setTitle('Cập nhật')
    }

    

    const onclickDelete = async(id) => {
        const result = await thonXomAPI.deleteThonAp(id);
        if(result.data.status === 1){
            toast.success(`${result.data.message}`)
            getAllThonAps()
        }
    }
  return (
    <Fragment>
        <div className="flex justify-between  " >
            <div className="text-2xl" >Quản lý thôn xóm</div>
            <Button onClick={handleCreate}  variant="contained" >Thêm mới</Button>
        </div>
        {
            data && 
       
        <TableContainer
            component={Paper}
            sx={{ overflowX: "auto", marginTop: "20px" }}
        >
            <Table aria-label="a dense table" size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"  sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Số TT</TableCell>
                        <TableCell align="center"  sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Thôn xóm</TableCell>
                        <TableCell align="center"  sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Ngày tạo</TableCell>
                        <TableCell align="center"  sx={{ minWidth: '100px', border: '1px solid rgba(224, 224, 224, 1)' }}>Thao tác</TableCell>
                    </TableRow>
                   
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) => {
                            return <StyledTableRow key={item.id}>
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="center">{item.name}</StyledTableCell>
                                <StyledTableCell align="center">{moment(item.createdAt).format('DD/MM/YYYY')}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center items-center gap-2" >
                                    <MdDelete onClick={() => onclickDelete(item.id)} size={25} className="cursor-pointer" color="red" />
                                    <RiEdit2Fill onClick={() => onClickEdit(item)} size={25} className="cursor-pointer" color="#068289" />
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        })
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
         }
        <ModelThomXom open={open} setOpen={setOpen} title={title} setName={setName} createThonAp={createThonAp} name={name}/>
    </Fragment>
  );
};

export default VillageManagement;
