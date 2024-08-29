import { Checkbox, FormControlLabel } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { thonXomAPI } from "../apis/thonXom.api";
import { GIOITINH, HOANCANHDB, NGAYSINH, THANGSINH } from "../utils/config";
import SelectComponent from "./SelectComponent";
import TextFieldComponent from "./TextFieldComponent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid ",
  boxShadow: 24,
  p: 2,
};
const ModalPhieuDieuTra = (props) => {
  const { open, setOpen, title, createPhieuDieuTra, setform, form, formError } = props;
  const [dataTX, setDataTX] = React.useState([]);

  const handleClose = () => {
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

  const handleChangeSPDT = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        SoPhieu: e.target.value
    }));
  }

  const handleChangeTX = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        ThonAp: e.target.value
    }));
  }

  const handleChangeHTDT = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        HoVaTen: e.target.value
    }));
  }

  const handleChangeDT = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        DanToc: e.target.value
    }));
  }

  const handleChangeNS = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        Ngay: e.target.value
    }));
  }

  const handleChangeTS = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        Thang: e.target.value
    }));
  }

  const handleChangeNamSinh = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        Nam: e.target.value
    }));
  }

  const handleChangeGT = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        GioiTinh: e.target.value
    }));
  }

  const handleChangeHCDB = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        HoanCanhDB: e.target.value
    }));
  }

  const handleCheckboxChange = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        KhuyetTat: e.target.checked
    }));
  }

  const handleChangeHTCH = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        ChuHo: e.target.value
    }));
  }

  const handleChangeTT = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        TenTruongDaiHoc: e.target.value
    }));
  }

  const handleChangeTH = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        TenHuyen: e.target.value
    }));
  }

  const handleChangeKhoi = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        Khoi: e.target.value
    }));
  }

  const handleChangeLop = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        Lop: e.target.value
    }));
  }

  const handleChangeBTN = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        BacTN: e.target.value
    }));
  }

  const handleChangeKHX = (e) => {
    setform((prevForm) => ({
        ...prevForm,
        KhoiHocXong: e.target.value
    }));
  }
  
  return (
    <div>
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
            <div className="text-2xl text-lime-600 ">{title} đối tượng</div>
            <Typography
              id="transition-modal-description"
              component="div"
              sx={{ mt: 1 }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { margin: "10px 0px", width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Số phiếu điều tra" onChange = {handleChangeSPDT} value={form.SoPhieu} error={formError.SoPhieu}/>
                  </Grid>
                  <Grid item xs={6}>
                    <SelectComponent
                      label="Thôn xóm"
                      data={dataTXs}
                      handleChange={handleChangeTX}
                      value={form.ThonAp}
                      error={formError.ThonAp}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Họ tên đối tượng" onChange = {handleChangeHTDT} value={form.HoVaTen}  error={formError.HoVaTen} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Dân tộc" onChange = {handleChangeDT} value={form.DanToc} />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectComponent label="Ngày sinh" data={NGAYSINH}  handleChange={handleChangeNS} value={form.Ngay} />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectComponent label="Tháng sinh" data={THANGSINH} handleChange={handleChangeTS} value={form.Thang} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextFieldComponent label="Năm sinh" type="number" onChange = {handleChangeNamSinh} value={form.Nam} />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectComponent label="Giới tính" data={GIOITINH} handleChange={handleChangeGT} value={form.GioiTinh} error={formError.GioiTinh} />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectComponent label="Hoàn cảnh đặt biệt" data={HOANCANHDB} handleChange={handleChangeHCDB} value={form.HoanCanhDB}/>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox checked={form.KhuyetTat} onChange={handleCheckboxChange} />}
                      label="Khuyết tật"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Họ tên chủ hộ" onChange = {handleChangeHTCH} value={form.ChuHo} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Tên trường" onChange = {handleChangeTT} value={form.TenTruongDaiHoc} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Tên huyện"  onChange = {handleChangeTH} value={form.TenHuyen}/>
                  </Grid>
                  <Grid item xs={3}>
                    <TextFieldComponent label="Khối" type="number"  onChange = {handleChangeKhoi} value={form.Khoi}/>
                  </Grid>
                  <Grid item xs={3}>
                    <TextFieldComponent label="Học lớp" type="number"  onChange = {handleChangeLop} value={form.Lop}/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Bậc tốt nghiệp" onChange = {handleChangeBTN} value={form.BacTN}/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldComponent label="Khối học xong" onChange = {handleChangeKHX} value={form.KhoiHocXong}/>
                  </Grid>
                </Grid>
              </Box>
              <Box className="flex gap-3 justify-end mt-6">
                <Button onClick={createPhieuDieuTra} variant="contained">
                  {title}
                </Button>
                <Button onClick={handleClose} variant="contained" color="error">
                  Thoát
                </Button>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalPhieuDieuTra;
