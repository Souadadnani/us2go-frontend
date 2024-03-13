import { useNavigate } from "react-router-dom";
import styles from "../../styles/button.module.css";

export default function Logout({logueado, setLogueado}){

    const navigate = useNavigate();
    const cerrarSesion = () =>{
        setLogueado(null);
        localStorage.removeItem('token');
        navigate("/");
    }
    return(
        <>
            {logueado? <button className={styles.logout} onClick={cerrarSesion}>Cerrar sesión</button> : " "}
        </>
    )
}