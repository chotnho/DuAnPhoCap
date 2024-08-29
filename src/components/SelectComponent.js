
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const SelectComponent = (props) => {
    const {data, label, value, handleChange, error=false} = props
   


    return <FormControl sx={{ width:'100%' }} size="small">
    <InputLabel id="demo-select-small-label">{label}</InputLabel>
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      defaultValue=""
      value={value || ""}
      label={label}
      onChange={handleChange}
      error={error}
    >
      
      {
            data && data.map((item, index) => {
                return <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
            })
         }
    </Select>
  </FormControl>
}

export default SelectComponent