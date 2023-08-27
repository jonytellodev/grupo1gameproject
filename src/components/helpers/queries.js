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

const uriUsuario = import.meta.env.VITE_API_USUARIO;

export const login  = async (usuario)=>{
    try {
        //pedir la lista de usuarios a JSON-server
        const respuesta = await fetch(uriUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar si el usuario que completo el formulario esta dentro dentro de la lista de JSON-Server
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        //el find devuelve un -1 si no lo encuentra, sino devuelve el objeto
        if(usuarioBuscado)
        {
            if(usuarioBuscado.password === usuario.password){
                console.log('Esta perfecto el logueo')
                return usuarioBuscado;
            }else
            {
                console.log('el password es erroneo')
                return null;
            }
        }else{
            console.log('el email es incorrecto')
            return null;
        }
        //si encontro el usuario y el password es correcto, OK
        //caso contrario tendria que decir que hay un error, mail o password no encontrado

    } catch (error) {
        console.log(error)
    }
}

