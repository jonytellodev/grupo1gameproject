import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Navbar expand="lg" bg="dark" className="fixFooter bg-body-dark mt-5 p-4">
      <Container className="d-flex flex-column justify-content-evenly FooterText">
        <div className="smFooterMenu">
          <Navbar.Brand as={Link} to={"/"} className="text-light fw-bold">
            <img
              src="src\assets\glp1white.svg"
              alt="logo GLP"
              className="logoFixFooter"
            />
          </Navbar.Brand>

          <Nav className="me-auto smCenterFooterMenu">
            <NavLink className={"nav-link text-light fw-bold"} end to={"/"}>
              Inicio
            </NavLink>
            <NavLink className={"nav-link text-light fw-bold"}>
              Registro
            </NavLink>
            <NavLink className={"nav-link text-light fw-bold"} end to={"/nosotros"}>Acerca de Nosotros</NavLink>
          </Nav>
        </div>
        <div className="copyrightGLPTeam mt-3 d-flex flex-column">
          <span> Copyright 2023 || GLP Team</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
