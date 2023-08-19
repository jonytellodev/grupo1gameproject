import { Navbar, Nav, Container } from "react-bootstrap";

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
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Registro</Nav.Link>
              <Nav.Link href="#link">Administrador</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
