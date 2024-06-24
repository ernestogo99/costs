import { Box } from "@mui/material";
import loading from "../assets/loading.svg";
const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component="img" src={loading} alt="carregando"></Box>
    </Box>
  );
};

export default Loading;
