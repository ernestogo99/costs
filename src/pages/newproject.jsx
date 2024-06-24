import { Box, Container, TextField, Typography } from "@mui/material";
import Projectform from "../project/projectform";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Newproject = () => {
  const navigate = useNavigate();

  const createpost = (project) => {
    //inicializar costs e serviços
    project.cost = 0;
    project.services = [];
    axios
      .post("http://localhost:3001/projects", project)
      .then((response) => {
        console.log(response);
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <Box
      sx={{
        height: "31.8rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "0.5rem",
      }}
    >
      <Typography sx={{ my: "0.5em" }} component="h1" variant="h4">
        Criar projetos
      </Typography>
      <Typography sx={{ color: "#7b7b7b" }} component="p">
        Crie seu projeto para depois adicionar os serviços
      </Typography>
      <Projectform handlesubmit={createpost} />
    </Box>
  );
};

export default Newproject;
