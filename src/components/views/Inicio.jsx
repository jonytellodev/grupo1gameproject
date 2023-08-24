import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
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
    <Container>
      <h1 className="display-4 text-center mb-5">Nuestros Productos</h1>
      <hr />
      <Row>
        <CardProducto></CardProducto>
      </Row>
    </Container>
  );
};

export default Inicio;
