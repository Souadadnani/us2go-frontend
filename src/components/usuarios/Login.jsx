import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/usuarios.service";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logueado, setLogueado] = useOutletContext();
    const navigate = useNavigate();
    const usuario = {
        email,
        password
    }

    const doLogin = (e) =>{
        e.preventDefault();
        login(usuario, setLogueado, navigate)
    }

    return(
        <form onSubmit={doLogin}>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}