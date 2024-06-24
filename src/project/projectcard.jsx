import { Box, IconButton, Typography } from "@mui/material";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Delete as Deleteicon } from "@mui/icons-material";
import { Edit as Editicon } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Projectcard = ({ id, name, budget, category, handleremove }) => {
  const remove = (event) => {
    event.preventDefault();
    handleremove(id);
  };

  return (
    <Box
      sx={{
        padding: "1em",
        border: "1px solid #7a7a7a",
        borderRadius: "5px",
        width: "24%",
        margin: "0.5%",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#222",
          color: "#ffbb33",
          padding: "0.4em",
          mb: "1.3em",
          fontSize: "1.3em",
        }}
        variant="h4"
      >
        {name}
      </Typography>
      <Typography sx={{ color: "#7a7a7a", mb: "1em" }}>
        <Typography sx={{ fontWeight: "bold" }} component="span" variant="span">
          Orçamento:
        </Typography>{" "}
        R${budget}
      </Typography>
      <Typography
        sx={{
          color: "#7a7a7a",
          mb: "1em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            display: "block",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ccc",
            marginRight: "5px",
          }}
          component="span"
          variant="span"
        ></Typography>
        {category}
      </Typography>
      <Box
        sx={{
          mt: "1.2em",
          display: "flex",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        <IconButton
          sx={{
            border: "1px solid #222",
            backgroundColor: "#fff",
            fontSize: "0.9em",
            marginRight: "1em",
            borderRadius: "0",
            fontWeight: "bold",
          }}
          color="#222"
          aria-label="edit"
          component={Link}
          to={`/project/${id}`}
        >
          <Editicon /> Editar
        </IconButton>
        <IconButton
          onClick={remove}
          sx={{
            border: "1px solid #222",
            backgroundColor: "#fff",
            fontSize: "0.9em",
            marginRight: "1em",
            borderRadius: "0",
            fontWeight: "bold",
          }}
          color="#222"
          aria-label="delete"
        >
          <Deleteicon /> Deletar
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projectcard;
