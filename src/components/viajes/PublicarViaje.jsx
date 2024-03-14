import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom";
import { publicarViaje } from "../../services/viajes.service";

export default function PublicarViaje() {

    const [destino, setDestino] = useState("");
    const [itinerarios, setItinerarios] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [logueado, setLogueado] = useOutletContext();
    const [publicados, setPublicados] = useState(false);
    const navigate = useNavigate();

    const viaje = {
        destino,
        itinerarios,
        fechaInicio,
        fechaFin
    }
    const publicar = (e) =>{
        e.preventDefault(e);
        publicarViaje(viaje, logueado, setPublicados, navigate);
    }
    return(
        <form onSubmit={publicar}>
            <label>Destino</label>
            <input type="text" placeholder="Ciudad, País" value={destino} onChange={(e)=>setDestino(e.target.value)}/>
            <label>Itinerarios</label>
            <input type="text" placeholder="Itinerario1, Itinerario2..." value={itinerarios} onChange={(e)=>setItinerarios(e.target.value)}/>
            <label>Fecha Inicio</label>
            <input type="date" placeholder="dd-mm-aaaa" value={fechaInicio} onChange={(e)=>setFechaInicio(e.target.value)}/>
            <label>Fecha de vuelta</label>
            <input type="date" placeholder="dd-mm-aaaa" value={fechaFin} onChange={(e)=>setFechaFin(e.target.value)}/>
            <button type="submit">Publicar Viaje</button>
        </form>
    )
}