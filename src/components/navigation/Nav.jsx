import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registrar">Registrar</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/publicar-viaje">Publicar Viaje</Link></li>
            </ul>
        </nav>
    )
}