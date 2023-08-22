export const agregarProducto = async (producto) => {
  try {
    //pedir mi lista de productos
    const respuesta = await fetch("http://localhost:3004/productos");
    const listaProductos = await respuesta.json();
    //buscar si está el producto que quiero agregar en mi lista de json server
    const productoBuscado = listaProductos.find((itemProducto) => {
      itemProducto.nombreProducto === producto.nombreProducto;
    });

    if (productoBuscado) {
      if (
        productoBuscado.categoria === producto.categoria &&
        productoBuscado.precio === producto.precio
      ) {
        console.log("producto agregado");
        return productoBuscado;
      } else {
        console.log("la categoría o el precio del producto es incorrecto");
        return null;
      }
    } else {
      console.log("el nombre del producto es incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
