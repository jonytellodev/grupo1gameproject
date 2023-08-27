import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { eliminarProducto, listarProductos } from "../../helpers/queries";

const ItemProducto = ({ producto, id, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Eliminar Producto",
      text: "¿Está seguro que quiere eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(producto.id).then((respuesta) => {
          console.log(respuesta);
          if (respuesta.status === 200) {
            listarProductos().then((respuesta) => {
              console.log(respuesta);
              setProductos(respuesta);
              localStorage.setItem(
                "productoAgregado",
                JSON.stringify(respuesta)
              );
            });

            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente borrado",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operacion mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <>
      {producto.nombreProducto ? (
        <tr>
          <td>{producto.id}</td>
          <td className="fs-5">{producto.nombreProducto}</td>
          <td className="fs-5">{producto.precio}</td>
          <td>{producto.imagen}</td>
          <td className="fs-5">{producto.categoria}</td>
          <td className="d-flex flex-nowrap">
            <Button variant="danger" onClick={borrarProducto}>
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
          <p className="display-4">No hay ningún producto cargado</p>
        </>
      )}
    </>
  );
};

export default ItemProducto;
