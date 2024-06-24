import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import Projectform from "../project/projectform";
import Message from "../components/message";
import Serviceform from "../service/serviceform";
import Servicecard from "../service/servicecard";
import { v4 as uuidv4 } from "uuid";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState("");
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [services, setservices] = useState([]);

  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const createservice = (updatedProject) => {
    const lastService =
      updatedProject.services[updatedProject.services.length - 1];
    lastService.id = uuidv4();
    const newCost =
      parseFloat(updatedProject.cost) + parseFloat(lastService.cost);
    if (newCost > parseFloat(updatedProject.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      updatedProject.services.pop();
      return false;
    }

    updatedProject.cost = newCost;
    axios
      .put(` http://localhost:3001/projects/${id}, updatedProject`)
      .then((response) => {
        setProject(response.data);
        setservices(response.data.services);
        setShowServiceForm(false);
        setMessage("Serviço adicionado com sucesso.");
      })
      .catch((error) => console.log(error));
  };

  const editpost = (project) => {
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo.");
      return false;
    }
    axios
      .put(`http://localhost:3001/projects/${id}, project`)
      .then((response) => {
        setProject(response.data);
        setShowProjectForm(false);
        setMessage("Projeto atualizado.");
      })
      .catch((error) => console.log(error));
  };

  const removeservice = () => {};

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3001/projects/${id}`)
        .then((response) => {
          setProject(response.data);
          setservices(response.data.services);
        })
        .catch((error) => console.log(error));
    }, 300);
  }, [id]);

  return (
    <>
      {project ? (
        <Box
          sx={{
            minHeight: "100vh",
            padding: "2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {message && <Message msg={message} />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "1.2em",
            }}
          >
            <Typography
              sx={{
                mb: "0.5em",
                backgroundColor: "#222",
                color: "#ffbb33",
                padding: "1.4em",
                fontSize: "1.25rem",
                flexShrink: 0,
              }}
              variant="h5"
            >
              Projeto: {project.name}
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                color: "#ffbb33",
                mb: 2,
                padding: "0.5em 1em",
                fontSize: "0.875rem",
                minWidth: "auto",
                flexShrink: 0,
              }}
              onClick={toggleProjectForm}
            >
              {!showProjectForm ? "Editar projeto" : "Fechar"}
            </Button>
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid #7a7a7a",
              paddingBottom: "1.2em",
              mb: "1.2em",
            }}
          >
            {!showProjectForm ? (
              <Box>
                <Typography sx={{ mb: "0.5em" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    component="span"
                    variant="span"
                  >
                    Categoria:{" "}
                  </Typography>
                  {project.categoria.name}
                </Typography>
                <Typography sx={{ mb: "0.5em" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    component="span"
                    variant="span"
                  >
                    Total de orçamento:{" "}
                  </Typography>
                  R$ {project.budget}
                </Typography>
                <Typography sx={{ mb: "0.5em" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    component="span"
                    variant="span"
                  >
                    Total utilizado:{" "}
                  </Typography>
                  R$ {project.cost}
                </Typography>
              </Box>
            ) : (
              <Box>
                <Projectform
                  btntext="Concluir edição"
                  projectdata={project}
                  handlesubmit={editpost}
                />
              </Box>
            )}
          </Box>

          {!showProjectForm && (
            <>
              <Box
                sx={{
                  borderBottom: "1px solid #7a7a7a",
                  mb: "1.2em",
                  paddingBottom: "1.2em",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }} variant="h6">
                    Adicione um serviço
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "black",
                      color: "#ffbb33",
                      mb: 2,
                      padding: "0.5em 1em",
                      fontSize: "0.875rem",
                      minWidth: "auto",
                      flexShrink: 0,
                    }}
                    onClick={toggleServiceForm}
                  >
                    {!showServiceForm ? "Adicionar serviço" : "Fechar"}
                  </Button>
                </Box>
                {showServiceForm && (
                  <Box sx={{ mt: 2 }}>
                    <Serviceform
                      handlesubmit={createservice}
                      projectdata={project}
                    />
                  </Box>
                )}
              </Box>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Serviços
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                {services.length > 0 &&
                  services.map((service) => (
                    <Servicecard
                      id={service.id}
                      name={service.name}
                      description={service.description}
                      cost={service.cost}
                      key={service.id}
                      handleremove={removeservice}
                    />
                  ))}
                {services.length === 0 && (
                  <Typography>Não há serviços</Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      ) : (
        <Box sx={{ height: "31.8rem" }}>
          <Loading />
        </Box>
      )}
    </>
  );
};

export default Project;
