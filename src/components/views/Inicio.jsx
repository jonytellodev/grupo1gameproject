import React from "react";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";
import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, InputGroup, Form, Button, Row } from "react-bootstrap";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [busquedaResultados, setBusquedaResultados] = useState([]);
  const [catalogoVacio, setCatalogoVacio] = useState(false);

  useEffect(() => {
    // Cargar juegos al montar el componente
    cargarProductos();
  }, []);

  // Función para cargar juegos
  const cargarProductos = async () => {
    const productosData = await listarProductos();
    setProductos(productosData);
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/16THfg5/PORTADA1.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/ZJnZgHR/PORTADA2.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/pRfhBs6/PORTADA3.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="searchGameBar mt-3">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Busca tu juego favorito..."
            aria-label="Busca tu juego favorito..."
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            className="searchGameButton"
            onChange={(e) => {
              setBusqueda(e.target.value);
              const resultados = productos.filter((producto) =>
                producto.nombreProducto
                  .toLowerCase()
                  .includes(busqueda.toLowerCase())
              );
              setBusquedaResultados(resultados);
              setCatalogoVacio(false);
            }}
          >
            Buscar
          </Button>
        </InputGroup>
      </Container>

      <Container className="featured-games">
  <h2 className="text-center">CATÁLOGO DE TÍTULOS</h2>
  <div className="row">
    {busqueda.length > 0 && busquedaResultados.length === 0 && (
      <p className="text-center">
        La búsqueda no obtuvo resultados, intente nuevamente.
      </p>
    )}
    {busquedaResultados.length > 0 ||
    (busqueda.length === 0 && !catalogoVacio) ? (
      productos.map((producto) => (
        <div className="col-md-4 col-sm-6 col-lg-3" key={producto.id}>
          <div className="game-card text-center">
            <img src={producto.imagen} alt="gta" className="img-fluid" />
            <h3>{producto.nombreProducto}</h3>
            <span>{producto.precio}</span>
            <p>{producto.descripcion}</p>
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${producto.id}`}
            >
              DETALLES
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id={`modal-${producto.id}`}
              tabIndex="-1"
              aria-labelledby={`modal-${producto.id}-label`}
              aria-hidden="true"
            >
              {/* ... contenido del modal */}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-12 text-center">
        <p>El catálogo está vacío.</p>
        <button className="btn btn-light" onClick={cargarProductos}>
          Recargar Catálogo
        </button>
      </div>
    )}
  </div>
</Container>
    </>
  );
};

export default Inicio;
