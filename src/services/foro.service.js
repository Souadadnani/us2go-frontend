import { URL_SERVER } from "../../constantes";

const getForo = (setForo, mensaje) =>{
    fetch(`${URL_SERVER}foro`)
        .then(response=>{
            if(response.ok){
                setActualizados(false);
                return response.json();
            }else{ throw new Error(`Error en la solicitud ${response.statusText}`);}
        })
        .then(data=>{
            if(data) setForo(viajes);
            else {mensaje = `Escribe un mensaje`};
        })
        .catch(error=>{console.error(error)})
}

const publicarMensaje = (mensaje, idViaje, setMensajes) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(("token"))}`
        },
        body: JSON.stringify(mensaje)
    }
    fetch(`${URL_SERVER}foro/publicar/mensaje/${idViaje}`, options)
        .then(response=>{
            if(response.ok){
                setMensajes(true);
                return response.json();
            }
            else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{console.error(error)})
}

const eliminarMensaje = (idViaje, idMensaje) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}foro/eliminar/${idViaje}/${idMensaje}`, options)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{console.error(error)})
}

const editarMensaje = (idMensaje, setCargados) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}foro/editar/${idMensaje}`, options)
        .then(response=>{
            if(response.ok){
                setCargados(true);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{console.error(error)})
}

export {getForo, publicarMensaje, eliminarMensaje, editarMensaje}