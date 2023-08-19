import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="danger" className="p-3 mb-5" variant="dark" expand="lg">
      <Container className="d-flex">
        <div>
          <Navbar.Brand href="#home">Gamers Landing</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className={"nav-link"}>Inicio</NavLink>
              <NavLink className={"nav-link"}>Registro</NavLink>
              <NavLink className={"nav-link"} end to={"/administrador"}>
                Administrador
              </NavLink>
              <NavLink className={"nav-link"}>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
