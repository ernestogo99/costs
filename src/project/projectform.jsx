import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Input from "../form/input";
import { useState } from "react";
import Selectt from "./select";

const Projectform = ({ handlesubmit, btntext, projectdata }) => {
  const theme = createTheme({
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& label.Mui-focused": {
              color: "#ffbb33",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#ffbb33",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffbb33",
              },
            },
          },
        },
      },
    },
  });

  const [project, setproject] = useState(
    projectdata || {
      name: "",
      budget: "",
      categoria: { id: "1", name: "infra" }, // Garantir que o ID seja uma string
    }
  );
  const [categoria, setcategoria] = useState(project.categoria.id);

  const categoryOptions = [
    { value: "1", label: "infra" },
    { value: "2", label: "desenvolvimento" },
    { value: "3", label: "design" },
    { value: "4", label: "planejamento" },
  ];

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    const selectedCategoryLabel = categoryOptions.find(
      (option) => option.value === selectedCategoryId
    )?.label;

    if (selectedCategoryLabel) {
      setcategoria(selectedCategoryId);
      setproject({
        ...project,
        categoria: {
          id: selectedCategoryId, // Manter como string
          name: selectedCategoryLabel,
        },
      });
    }
  };

  const handlechange = (e) => {
    setproject({ ...project, [e.target.name]: e.target.value });
  };

  const generateId = () => {
    const lastId = localStorage.getItem("lastId") || "0";
    const newId = (Number(lastId) + 1).toString(); // Certificar que o ID seja uma string
    localStorage.setItem("lastId", newId);
    return newId;
  };

  const submit = (e) => {
    e.preventDefault();
    const newProject = {
      ...project,
      id: generateId(),
      categoria: project.categoria || { id: "1", name: "infra" }, // Garantir que o ID seja uma string
    };
    newProject.budget = Number(newProject.budget);
    console.log("Projeto enviado para o backend:", newProject);
    handlesubmit(newProject);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: "600px", mx: "auto", mt: 2 }}>
        <Box component="form" onSubmit={submit}>
          <Typography
            sx={{ fontWeight: "bold" }}
            component="label"
            variant="h6"
          >
            Nome do projeto:
          </Typography>
          <Input
            type="text"
            text="Insira o nome do projeto"
            name="name"
            fullWidth
            sx={{ mb: 2 }}
            handleonchange={handlechange}
            value={project.name || ""}
          />
          <Typography
            sx={{ fontWeight: "bold" }}
            component="label"
            variant="h6"
          >
            Orçamento do projeto:
          </Typography>
          <Input
            type="number"
            text="Insira o orçamento total"
            name="budget"
            handleonchange={handlechange}
            fullWidth
            sx={{ mb: 2 }}
            value={project.budget || ""}
          />
          <Typography
            sx={{ fontWeight: "bold", mt: 2 }}
            component="label"
            variant="h6"
          >
            Categoria:
          </Typography>
          <Selectt
            sx={{ mt: 1 }}
            text="Categoria"
            name="categoria"
            options={categoryOptions}
            handleonchange={handleCategoryChange}
            value={categoria}
          />
          <Box align="center" sx={{ mt: 2 }}>
            <Button
              sx={{ backgroundColor: "black", color: "#ffbb33", mb: 2 }}
              type="submit"
              color="primary"
            >
              {btntext || "Criar projeto"}
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Projectform;
