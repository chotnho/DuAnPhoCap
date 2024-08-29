import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ComponentSelect(props) {
const {data, setAge, age} = props
  
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-controlled-open-select-label">Chọn độ tuổi</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Chọn độ tuổi"
          onChange={handleChange}
        >
         {
            data && data.map((item, index) => {
                return <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
            })
         }
          
          
        </Select>
      </FormControl>
    </div>
  );
}