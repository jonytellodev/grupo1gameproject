const variable_entornoProductos = import.meta.env.VITE_API_PRODUCTOS;

export const agregarProducto = async (producto) => {
  try {
    const respuesta = await fetch(variable_entornoProductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;

    /*const listaProductos = await respuesta.json();

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
    }*/
  } catch (error) {
    console.log(error);
  }
};

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(variable_entornoProductos);
    console.log(respuesta);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return "En estos momentos no se pueden cargar los productos. Intente más tarde.";
  }
};
