import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SelectComponent from "./SelectComponent";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as XLSX from "xlsx";
import { thonXomAPI } from "../apis/thonXom.api";
import { toast } from "react-toastify";
import { googleAPI } from "../apis/google.api";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
};

const ModalExcelComponent = (props) => {
    const {fecthData} = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [excelData, setExcelData] = React.useState(null);
    const [dataTX, setDataTX] = React.useState([]);
    const [form, setform] = React.useState({
        ThonAp: "",
    });

    const [formError, setformError] = React.useState({
        ThonAp: false,
    });

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            // Chọn sheet đầu tiên trong workbook
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            // Chuyển dữ liệu từ sheet sang dạng JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            // Cập nhật state với dữ liệu JSON
            setExcelData(jsonData);
        };
        reader.readAsBinaryString(file);
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

    React.useEffect(() => {
        getAllThonAps();
    }, []);

    const handleChangeTX = (e) => {
        setform((prevForm) => ({
            ...prevForm,
            ThonAp: e.target.value,
        }));
    };

    const createFileExcel = async () => {
        const errors = {
            ThonAp: form.ThonAp.trim() === "",
        };
        setformError(errors);
        // Nếu có lỗi, không tiếp tục gọi API
        if (Object.values(errors).includes(true)) {
            toast.warning("Thôn xóm không được bỏ trống!");
            return;
        }
        const dataForm = excelData.map((item, index) => {
            return {
                ThonAp: form.ThonAp,
                SoPhieu: item.SoPhieu,
                HoVaTen: item.HoVaTen,
                Ngay: item.Ngay,
                Thang: item.Thang,
                Nam: item.Nam,
                GioiTinh: item.GioiTinh,
                DanToc: item.DanToc,
                HoanCanhDB: item.HoanCanhDB,
                KhuyetTat: item.KhuyetTat,
                TenTruongDaiHoc: item.TenTruongDaiHoc,
                TenHuyen: item.TenHuyen,
                Khoi: item.Khoi,
                Lop: item.Lop,
                MaLop: item.MaLop,
                BacTN: item.BacTN,
                NamTN: item.NamTN,
                KhoiHocXong: item.KhoiHocXong,
                NamHocXong: item.NamHocXong,
                KhoiNghiHoc: item.KhoiNghiHoc,
                NamNghiHoc: item.NamNghiHoc,
                ChuHo: item.ChuHo,
                GhiChu: item.GhiChu,
            };
        });

        try {
            const result = await googleAPI.createFileExcelDoiTuong(dataForm);
            if (result.data.status === 1) {
                toast.success(result.data.message);
                setOpen(false);
                fecthData();
                setform({ThonAp:''});
                setExcelData(null)
            }
        } catch (error) {
            console.log(error);
            if(error.response.data.message === 'request entity too large'){
                toast.error('kích thước file quá lớn, bạn nên giảm kích thước file xuống!')
            }
            if(error.response.data.message === 'Đã xảy ra lỗi khi lưu dữ liệu.'){
                toast.error('dữ liệu trong file excel bị lỗi')
            }
            
        }

    };

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="secondary">
                Import excel
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Import file excel
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <SelectComponent
                            label="Thôn xóm"
                            data={dataTXs}
                            handleChange={handleChangeTX}
                            value={form.ThonAp}
                            error={formError.ThonAp}
                        />
                        <Box sx={{ marginTop: "15px" }}>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload file
                                <VisuallyHiddenInput
                                    onChange={handleFileUpload}
                                    type="file"
                                    accept=".xlsx, .xls"
                                />
                            </Button>
                        </Box>
                    </Box>

                    <Box className="flex gap-3 justify-end mt-6">
                        <Button onClick={createFileExcel} variant="contained">
                            Lưu
                        </Button>
                        <Button onClick={handleClose} variant="contained" color="error">
                            Thoát
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalExcelComponent;
