import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto }) => {
  const eliminar = () => {
    setMostrarProductosCargados({});
    localStorage.removeItem("productoAgregado");
  };

  return (
    <>
      {producto.nombreProducto ? (
        <tr>
          <td>1</td>
          <td className="fs-5">{producto.nombreProducto}</td>
          <td className="fs-5">{producto.precio}</td>
          <td>{producto.imagen}</td>
          <td className="fs-5">{producto.categoria}</td>
          <td className="d-flex flex-nowrap">
            <Button variant="danger" onClick={eliminar}>
              X
            </Button>
            <Link
              className="fs-5 fw-bold mx-2 btn btn-warning"
              to={`/administrador/editar/${producto.id}`}
            >
              Edit🖌️
            </Link>
          </td>
        </tr>
      ) : (
        <>
          <tr>
            <td className="fs-1">-</td>
          </tr>
        </>
      )}
    </>
  );
};

export default ItemProducto;
