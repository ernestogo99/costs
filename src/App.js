import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { Container } from "@mui/material";
import Footer from "./components/footer";
import Home from "./pages/home";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Newproject from "./pages/newproject";
import Projects from "./pages/projects";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/newproject" element={<Newproject />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
