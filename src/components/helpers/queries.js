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
    console.log(respuesta.json());

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

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

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(variable_entornoProductos);
    console.log(respuesta);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
    return "En estos momentos no se pueden cargar los productos. Intente más tarde.";
  }
};

export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`);
    const dato = await respuesta.json();
    return dato;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${variable_entornoProductos}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
