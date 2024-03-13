import { Link } from "react-router-dom";
import SesionIniciada from "../usuarios/SesionIniciada";

export default function Nav({logueado, setLogueado}) {
    return(
        <nav>
            <h1>us<span>2</span>go</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registrar">Registrar</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/publicar-viaje">Publicar Viaje</Link></li>
            </ul>
            {logueado? <SesionIniciada logueado={logueado} setLogueado={setLogueado}/> : ""}
        </nav>
    )
}