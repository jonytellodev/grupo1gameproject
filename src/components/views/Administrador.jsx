import React, { useState, useEffect } from "react";
import { Container, Table, Row } from "react-bootstrap";
import ItemProducto from "./products/ItemProducto";
import { listarProductos } from "../helpers/queries";
import CardProducto from "./products/CardProducto";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos().then((respuestaProductos) => {
      console.log(respuestaProductos);
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
        <h1 className="display-4 text-center fw-bold mb-5">Agregar Producto</h1>
        <hr />
        <Row className="mb-4">
          <CardProducto />
        </Row>
        <hr />
        {productos.length === 0 ? (
          <div className="container" style={{ backgroundColor: "lightblue" }}>
            <h3 className="m-3 p-4 text-center">No hay citas</h3>
          </div>
        ) : (
          <div className="table-responsive">
            <Table className="my-5" striped bordered hover>
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
                  <ItemProducto
                    key={producto.id}
                    producto={producto}
                    setProductos={setProductos}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default Administrador;

// import { Container, Button, Table, Row, Card } from "react-bootstrap";
// import ItemProducto from "./products/ItemProducto";
// import { listarProductos } from "../helpers/queries";
// import CardProducto from "./products/CardProducto";
// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// const Administrador = () => {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     listarProductos().then((respuestaProductos) => {
//       console.log(respuestaProductos);
//       if (respuestaProductos) {
//         setProductos(respuestaProductos);
//       } else {
//         Swal.fire(
//           "Ocurrió un error!",
//           "Intente realizar esta operación más tarde",
//           "error"
//         );
//       }
//     });
//   }, []);

//   return (
//     <>
//       <Container>
//         <h1 className="display-4 text-center fw-bold mb-5">Agregar Producto</h1>
//         <hr />
//         <Row>
//           <CardProducto></CardProducto>
//         </Row>
//         <hr />
//         {productos.length === 0 ? (
//           <div className="container" style={{ backgroundColor: "lightblue" }}>
//             <h3 className="m-3 p-4 text-center">No hay citas</h3>
//           </div>
//         ) : (
//           <Table className="my-5" responsive striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Cod</th>
//                 <th>Producto</th>
//                 <th>Precio</th>
//                 <th>URL de Imagen</th>
//                 <th>Categoría</th>
//                 <th>Opciones</th>
//               </tr>
//             </thead>

//             <tbody>
//               {productos.map((producto) => (
//                 <ItemProducto
//                   key={producto.id}
//                   producto={producto}
//                   setProductos={setProductos}
//                 ></ItemProducto>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Container>
//     </>
//   );
// };

// export default Administrador;
