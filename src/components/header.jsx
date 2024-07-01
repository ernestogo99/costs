import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import logo from "../assets/costs_logo.png";

const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#222" }}>
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link to="/">
                <Box component="img" src={logo} sx={{ height: "3rem" }}></Box>
              </Link>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <Typography
                component={Link}
                variant="h5"
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "monospace",
                  fontWeight: 800,
                  fontSize: "1rem",
                  "&:hover": {
                    color: "#ffbb33",
                  },
                }}
              >
                Home
              </Typography>
              <Typography
                component={Link}
                variant="h5"
                to="/projects"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "monospace",
                  fontWeight: 800,
                  fontSize: "1rem",
                  "&:hover": {
                    color: "#ffbb33",
                  },
                }}
              >
                Projetos
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
