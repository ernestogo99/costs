import { Box, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Input = ({ type, text, name, handleonchange, value }) => {
  // Cria um tema personalizado
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label.Mui-focused": {
              color: "#ffbb33", // Cor da label quando focada
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#ffbb33", // Cor da borda quando focada
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc", // Cor da borda padrão
              },
              "&:hover fieldset": {
                borderColor: "#ffbb33", // Cor da borda ao passar o mouse
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffbb33", // Cor da borda quando focada
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        margin="normal"
        fullWidth
        InputLabelProps={{
          style: {
            fontSize: "0.9rem",
          },
        }}
        label={text}
        type={type}
        id={name}
        name={name}
        onChange={handleonchange}
        value={value}
      ></TextField>
    </ThemeProvider>
  );
};

export default Input;
