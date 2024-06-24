import { Box, TextField, Button, Typography } from "@mui/material";
import Input from "../form/input";
import { useState } from "react";

const Serviceform = ({ handlesubmit, projectdata }) => {
  const [service, setservice] = useState({});

  const submit = (e) => {
    e.preventDefault();
    projectdata.services.push(service);
    handlesubmit(projectdata);
    console.log(projectdata);
  };
  const handlechange = (e) => {
    setservice({ ...service, [e.target.name]: e.target.value }); //estou pegando o que tem no objeto e inserindo a propriedade que vem do evento
  };
  return (
    <Box
      sx={{ maxWidth: "600px", mx: "auto", mt: 2 }}
      onSubmit={submit}
      component="form"
      variant="form"
    >
      <Typography sx={{ fontWeight: "bold" }} component="label" variant="h6">
        Nome do serviço:
      </Typography>
      <Input
        handleonchange={handlechange}
        name="name"
        type="text"
        text="nome do serviço"
      ></Input>
      <Typography sx={{ fontWeight: "bold" }} component="label" variant="h6">
        Valor total:
      </Typography>
      <Input
        handleonchange={handlechange}
        name="cost"
        type="number"
        text="insira o valor total"
      ></Input>
      <Typography sx={{ fontWeight: "bold" }} component="label" variant="h6">
        Descrição:
      </Typography>
      <Input
        handleonchange={handlechange}
        name="description"
        type="text"
        text="descreva o serviço"
      ></Input>
      <Box align="center" sx={{ mt: 2 }}>
        <Button
          sx={{ backgroundColor: "black", color: "#ffbb33", mb: 2 }}
          type="submit"
          color="primary"
        >
          Adicionar serviço
        </Button>
      </Box>
    </Box>
  );
};

export default Serviceform;
