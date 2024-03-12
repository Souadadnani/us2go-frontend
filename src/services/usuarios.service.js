import { URL_SERVER } from "../../constantes";

const registrar = (usuario) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    fetch(`${URL_SERVER}usuarios/registrar`, options)
        .then(response=>{
            if(response.ok) return response.json();
            else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{console.error(error)});
}

const login = (usuario, setLogeado) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    fetch(`${URL_SERVER}usuarios/login`, options)
        .then(response=>{
            if(response.ok) return response.json();
            else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .than(data=>{
            if(data.length > 0){
                const userServer = data[0];
                setLogeado(userServer.usuario.nombre);
                localStorage.setItem('token', data.token);
            }else{
                throw new Error("Usuario/contraseña incorrectos")
            }
        })
        .catch(error=>{console.error(error)});
}



export {registrar, login}