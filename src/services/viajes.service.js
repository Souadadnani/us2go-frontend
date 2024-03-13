import { URL_SERVER } from "../../constantes";

const getViajesPublicados = (setViajes, setCargados, setMensaje) =>   {
    fetch(`${URL_SERVER}viajes`)
        .then(response=>{
            if(response.ok){
                setCargados(false);
                return response.json();
            }else{ throw new Error(`Error en la solicitud ${response.statusText}`);}
        })
        .then(viajes=>{
            if(viajes.length > 0) setViajes(viajes);
        })
        .catch(error=>{console.error(error)})
}

const publicarViaje = (viaje,logueado, setPublicados) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        },
        body: JSON.stringify(viaje)
    }
    fetch(`${URL_SERVER}viajes/publicar`, options)
        .then(response=>{
            if(response.ok) {
                setPublicados(false);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{
            if(!logueado){
                setMensaje("Inicia sesión o registrarte para poder publicar tu viaje");
            }
        })
        .catch(error=>{console.error(error)})
}

const unirseAViaje = (idViaje) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}viajes/unirse/${idViaje}`, options)
        .then(response=>{
            if(response.ok) return response.json();
            else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{console.error(error)})
}

const salirDelGrupo = (idviaje, mensaje) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}viajes/salir/miembro/${idviaje}`, options)
        .then(response=>{
            if(response.ok) return response.json();
            else{throw new Error(`Error en la solocitud ${response.statusText}`)}
        })
        .then(data=>{
            if(data){
                mensaje = `Ya no eres miembro de este grupo`;
            }
        })
        .catch(error=>{console.error(error)});
}


export {getViajesPublicados, publicarViaje, unirseAViaje, salirDelGrupo}
