import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  return (
    <Navbar expand="lg" bg="dark" className="fixFooter bg-body-dark mt-5 p-4">
      <Container className="flex-row justify-content-evenly">
        <div>
          <Navbar.Brand as={Link} to={"/"} className="text-light fw-bold">
            Gamers Landing
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={"nav-link text-light fw-bold"} end to={"/"}>
                Inicio
              </NavLink>
              <NavLink className={"nav-link text-light fw-bold"}>
                Registro
              </NavLink>
              <NavLink
                className={"nav-link text-light fw-bold"}
                end
                to={"/administrador"}
              >
                Administrador
              </NavLink>
              <NavLink className={"nav-link text-light fw-bold"}>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
