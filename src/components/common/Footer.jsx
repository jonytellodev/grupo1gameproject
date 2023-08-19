import { Navbar, Nav, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar expand="lg" bg="dark" className="bg-body-dark p-4">
      <Container className="flex-row justify-content-evenly">
        <div>
          <Navbar.Brand href="#home" className="text-light fw-bold">
            Gamers Landing
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-light fw-bold">
                Inicio
              </Nav.Link>
              <Nav.Link href="#link" className="text-light fw-bold">
                Registro
              </Nav.Link>
              <Nav.Link href="#link" className="text-light fw-bold">
                Administrador
              </Nav.Link>
              <Nav.Link href="#link" className="text-light fw-bold">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
