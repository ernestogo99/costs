import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#222" }}>
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                mt: 1,
                gap: "1rem",
                cursor: "pointer",
              }}
            >
              <Box sx={{ "&:hover": { color: "#ffbb33" } }}>
                <FaFacebook />
              </Box>
              <Box sx={{ "&:hover": { color: "#ffbb33" } }}>
                <FaInstagram />
              </Box>
              <Box sx={{ "&:hover": { color: "#ffbb33" } }}>
                <FaLinkedin />
              </Box>
            </Box>
            <Typography variant="h6" sx={{ color: "#ffbb33" }}>
              Costs
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
