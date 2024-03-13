import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/Nav'
import { useState } from 'react'
import "./styles/globals.css"


function App() {
  const [logueado, setLogueado] = useState(null); 

  return (
    <>
      <Nav logueado={logueado} setLogueado={setLogueado}></Nav>
      <Outlet context={[logueado, setLogueado]}></Outlet>
    </>
  )
}

export default App
