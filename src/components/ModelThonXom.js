import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid ",
  boxShadow: 24,
  p: 2,
};

export default function ModelThomXom(props) {
  const { open, setOpen, title, setName, createThonAp, name } = props;

  const handleClose = () => {
    setOpen(false);
    setName('');
  };

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
          
                <div className="text-2xl text-lime-600 ">
                {title} thôn xóm
                </div>
              
            <Typography id="transition-modal-description" component="div" sx={{ mt: 1 }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { margin:'10px 0px', width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  className="w-[100%]"
                  id="outlined-basic"
                  label="Tên thôn xóm"
                  variant="outlined"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                />
              </Box>
              <Box className="flex gap-3 justify-end mt-2" >
                    <Button onClick={createThonAp} variant="contained">{title}</Button>
                    <Button onClick={handleClose} variant="contained" color="error">Thoát</Button>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
