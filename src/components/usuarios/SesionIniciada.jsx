import Logout from "./Logout";
import styles from "../../styles/button.module.css";

export default function SesionIniciada({logueado, setLogueado}) {
    return(
        <div className={styles.sesion}>
            <span className={styles.login}>{logueado.nombre}</span>
            <Logout logueado={logueado} setLogueado={setLogueado}></Logout>
        </div>

    )
}