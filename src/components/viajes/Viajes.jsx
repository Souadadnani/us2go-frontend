import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getViajesPublicados } from "../../services/viajes.service";


export default function Viajes() {

    const [cargados, setCargados] = useState(false);
    const [viajes, setViajes] = useState([]);

    useEffect(()=>{
        getViajesPublicados(setViajes, setCargados);
    }, [cargados]);

    return(
        <main>
            <h2>Viajes Publicados</h2>
            <section>
                {
                    viajes.map(viaje=>{
                        return(
                            <ul key={viaje.id}>
                                <li>Destino: {viaje.destino}</li>
                                <li>Itinerarios: {viaje.itinerarios}</li>
                                <li>Fecha Inicio: {new Date(viaje.fechaInicio).toLocaleDateString()}</li>
                                <li>Fecha Vuelta: {new Date(viaje.fechaFin).toLocaleDateString()}</li>
                                <li>Publicado por: {viaje.usuario.email}</li>
                            </ul>
                        )
                    })
                }
            </section>
        </main>
    )
}