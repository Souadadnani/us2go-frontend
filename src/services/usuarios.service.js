import { URL_SERVER } from "../../constantes";

const registrar = (usuario, navigate) =>{
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
        .then(usuario=>{
            navigate("/login"); 
        })
        .catch(error=>{console.error(error)});
}

const login = (usuario, setLogueado, navigate) =>{
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
        .then(data=>{
            localStorage.setItem("token", data.token);
            const user ={
                email: data.usuario.email,
                nombre: data.usuario.nombre
            }
            setLogueado(user);
            navigate("/"); 
        })
        .catch(error=>{console.error(error)});
}

export {registrar, login}