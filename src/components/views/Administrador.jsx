import { Button, Table } from "react-bootstrap";
import ItemProducto from "./products/ItemProducto";
import CrearProducto from "./products/CrearProducto";
import { useNavigate } from "react-router-dom";

const Administrador = ({
  mostrarProductosCargados,
  setMostrarProductosCargados,
}) => {
  const navegacion = useNavigate();

  const redireccionar = () => {
    navegacion("/administrador/crear");
  };
  return (
    <section className="container mainSection">
      <h1 className="mb-5 text-center">Productos Disponibles</h1>
      <div className="my-5 d-flex flex-wrap justify-content-between align-items-center">
        <div className="m-2">
          <h3>Producto 1</h3>
          <Button className="btn btn-primary" onClick={redireccionar}>
            Agregar
          </Button>
        </div>
        <div className="m-2">
          <h3>Producto 2</h3>
          <Button className="btn btn-primary">Agregar</Button>
        </div>
        <div className="m-2">
          <h3>Producto 3</h3>
          <Button className="btn btn-primary">Agregar</Button>
        </div>
      </div>

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
          <ItemProducto
            mostrarProductosCargados={mostrarProductosCargados}
            setMostrarProductosCargados={setMostrarProductosCargados}
          ></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
