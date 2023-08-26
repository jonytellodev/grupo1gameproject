import { Col, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardProducto = () => {
  const navegacion = useNavigate();

  const redireccionar = () => {
    navegacion("/administrador/crear");
  };

  return (
    <Container className="d-flex justify-content-center">
      <Col md={4} ld={3} className="mb-3">
        <Card.Img
          style={{ width: "310px", height: "260px" }}
          variant="top"
          src="https://img.freepik.com/vector-premium/plantilla-logo-videojuego-mando-juego_23-2147836903.jpg?w=360"
          alt="imagenGame"
        />
        <Card.Body>
          <Card.Title className="mt-3 fw-bold text-uppercase">
            Nuevo Producto
          </Card.Title>
          <Card.Text className="mt-1 fw-bold">Juego para play</Card.Text>
          <div className="me-5 d-flex justify-content-end">
            <Button
              variant="primary"
              className="me-5 fw-bold fs-4"
              onClick={redireccionar}
            >
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Col>
    </Container>
  );
};

export default CardProducto;
