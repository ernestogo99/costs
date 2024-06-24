import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Selectt = ({ text, name, options = [], handleonchange, value }) => {
  return (
    <FormControl fullWidth sx={{ mb: 0.3 }}>
      <InputLabel id={`${name}-label`} sx={{ fontSize: "0.9rem" }}>
        {text}
      </InputLabel>
      <Select
        name={name}
        value={value || ""}
        onChange={handleonchange}
        label={text}
        labelId={`${name}-label`}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ color: "black", backgroundColor: "white" }}
            key={index}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selectt;
