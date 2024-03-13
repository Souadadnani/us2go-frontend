import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { registrar } from "../../services/usuarios.service";


export default function Registrar() {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");
    const [logueado, setLogueado] = useOutletContext();
    const usuario = {
        email,
        nombre,
        apellidos,
        password,
        telefono
    };

    const doRegistro = (e) =>{
        e.preventDefault();
        registrar(usuario, setLogueado);
    }
    
    return (
        <form onSubmit={doRegistro}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder="Apellidos" value={apellidos}  onChange={(e)=>setApellidos(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="phone" placeholder="Telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
            <button type="submit">Registrar</button>
        </form>
    )
}