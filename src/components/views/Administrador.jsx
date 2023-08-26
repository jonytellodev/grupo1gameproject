import { Container, Button, Table, Row, Card } from "react-bootstrap";
import ItemProducto from "./products/ItemProducto";
import CrearProducto from "./products/CrearProducto";
import { Link, useNavigate } from "react-router-dom";
import { listarProductos } from "../helpers/queries";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos().then((respuestaProductos) => {
      if (respuestaProductos) {
        setProductos(respuestaProductos);
      } else {
        Swal.fire(
          "Ocurrió un error!",
          "Intente realizar esta operación más tarde",
          "error"
        );
      }
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className="display-4 text-center mb-5">Agregar Producto</h1>
        <hr />
        <Row>
          <CardProducto>
            <Card.Img
              style={{ width: "300px", height: "250px" }}
              variant="top"
              src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
              alt="imagenMario"
            />
            <Card.Body>
              <Card.Title>MARIO BROSS</Card.Title>
              <Card.Text>$2500</Card.Text>
              <Link variant="primary" to={"/administrador/crear"}>
                Agregar
              </Link>
            </Card.Body>
          </CardProducto>
        </Row>
      </Container>

      <hr />
      <Table className="my-5" responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto key={producto.id} producto={producto}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Administrador;
