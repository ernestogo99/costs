import { Box, TextField, Typography } from "@mui/material";
import savings from "../assets/savings.svg";
import Linkbutton from "../components/linkbutton";
const Home = () => {
  return (
    <Box
      sx={{
        height: "31.8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ mb: 2 }} component="h1" variant="h5">
        Bem vindo ao{" "}
        <Typography
          sx={{ color: "#ffbb33", backgroundColor: "#222", padding: "0.2em" }}
          component="span"
          variant="h5"
        >
          Costs
        </Typography>
      </Typography>
      <Typography sx={{ mb: "1.5em", color: "#7b7b7b" }} component="p">
        Comece a gerenciar seus projetos agora mesmo!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Linkbutton to="/newproject" text="criar projeto" />
        <Box
          component="img"
          src={savings}
          sx={{ height: "15rem", my: 2 }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Home;
