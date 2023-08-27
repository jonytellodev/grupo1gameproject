import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar className="p-3 mb-3 bgLightGrey sticky-top" variant="dark" expand="lg">
      <Container className="d-flex">
        <div>
          <Navbar.Brand as={Link} to={"/"}>
            <img src="./assets/glp1.svg" alt="logo GLP" className="logoFixNavbar" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className={"textViolet navLinkText p-2"} end to={"/"}>
                Inicio
              </NavLink>
              <NavLink className={"textViolet navLinkText p-2"}>Registro</NavLink>
              <NavLink className={"textViolet navLinkText p-2"} end to={"/administrador"}>
                Administrador
              </NavLink>
              <NavLink className={"textViolet navLinkText p-2"} end to="/login">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
