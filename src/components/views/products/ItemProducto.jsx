import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemProducto = ({
  mostrarProductosCargados,
  setMostrarProductosCargados,
}) => {
  const eliminar = () => {
    setMostrarProductosCargados({});
    localStorage.removeItem("productoAgregado");
  };

  const navegacion = useNavigate();
  const redireccionar = () => {
    navegacion("/administrador/editar");
  };

  return (
    <>
      <tr>
        <td>1</td>
        <td className="fs-5">MARIO BROSS</td>
        <td className="fs-5">$3200</td>
        <td>
          https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg
        </td>
        <td className="fs-5">Entretenimiento</td>
        <td className="d-flex flex-nowrap">
          <Button variant="danger">X</Button>
          <Button
            className="fs-5 fw-bold mx-2 btn btn-warning"
            onClick={redireccionar}
          >
            Edit🖌️
          </Button>
        </td>
      </tr>
      {mostrarProductosCargados.nombreProducto ? (
        <tr>
          <td>1</td>
          <td className="fs-5">{mostrarProductosCargados.nombreProducto}</td>
          <td className="fs-5">{mostrarProductosCargados.precio}</td>
          <td>{mostrarProductosCargados.imagen}</td>
          <td className="fs-5">{mostrarProductosCargados.categoria}</td>
          <td className="d-flex flex-nowrap">
            <Button variant="danger" onClick={eliminar}>
              X
            </Button>
            <Button
              className="fs-5 fw-bold mx-2 btn btn-warning"
              onClick={redireccionar}
            >
              Edit🖌️
            </Button>
          </td>
        </tr>
      ) : (
        <>
          <tr>
            <td className="fs-1">-</td>
          </tr>
          <h1>No tienes ningún producto cargado</h1>
        </>
      )}
    </>
  );
};

export default ItemProducto;
