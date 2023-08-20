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