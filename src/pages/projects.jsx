import { Box, Typography } from "@mui/material";
import Message from "../components/message";
import { useLocation } from "react-router-dom";
import Linkbutton from "../components/linkbutton";
import Projectcard from "../project/projectcard";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import axios from "axios";

const Projects = () => {
  const location = useLocation();
  const [removeloading, setremoveloading] = useState(false);
  const [projects, setprojects] = useState([]);
  const [projectmessage, setprojectmessage] = useState("");
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3001/projects")
        .then((response) => {
          setprojects(response.data);
          console.log(response.data);
          setremoveloading(true);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, []);

  const removeproject = (id) => {
    if (window.confirm("deseja excluir?")) {
      axios
        .delete(`http://localhost:3001/projects/${id}`)
        .then((response) => {
          const resultado = projects.filter(
            (fornecedor) => fornecedor.id !== id
          );
          setprojects(resultado);
          setprojectmessage("projeto removido com sucesso");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        minHeight: "100vh", // Garante que o contêiner ocupe a altura total da tela
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "2em",
        }}
      >
        <Typography component="h6" variant="h5">
          Meus projetos
        </Typography>
        <Linkbutton text="novo projeto" to="/newproject" />
      </Box>
      {message && <Message msg={message} />}
      {projectmessage && <Message msg={projectmessage} />}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {projects.length > 0 &&
          projects.map((project) => (
            <Projectcard
              id={project.id}
              budget={project.budget}
              name={project.name}
              category={project.categoria?.name}
              key={project.id}
              handleremove={removeproject}
            />
          ))}
        {!removeloading && <Loading />}
        {removeloading && projects.length === 0 && (
          <Typography>Não há projetos cadastrados</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
