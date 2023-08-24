const variable_entornoProductos = import.meta.env.VITE_API_PRODUCTOS;

export const agregarProducto = async (producto) => {
  try {
    //pedir mi lista de productos
    const respuesta = await fetch(variable_entornoProductos);
    const listaProductos = await respuesta.json();
    //buscar si está el producto que quiero agregar en mi lista de json server
    const productoBuscado = listaProductos.find(
      (itemProducto) => itemProducto.nombreProducto === producto.nombreProducto
    );

    if (productoBuscado) {
      if (
        productoBuscado.categoria === producto.categoria &&
        productoBuscado.precio == producto.precio
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
