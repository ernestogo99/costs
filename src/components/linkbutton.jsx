import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Linkbutton = ({ to, text }) => {
  return (
    <Link to={to}>
      <Button
        sx={{ backgroundColor: "#222", color: "#ffbb33" }}
        color="primary"
      >
        {text}
      </Button>
    </Link>
  );
};

export default Linkbutton;
