import { TextField } from "@mui/material";

const TextFieldComponent = (props) => {
  const { label, value, onChange, error = false, type = "text" } = props;
  return (
    <TextField
      className="w-[100%] p-[10px]"
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      error={error}
      value={value || ''}
      onChange={onChange}
      type={type}
    />
  );
};

export default TextFieldComponent;
