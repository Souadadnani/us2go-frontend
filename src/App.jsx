
import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/Nav'
import { useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState(null); 

  return (
    <>
      <Nav></Nav>
      <Outlet context={[usuario, setUsuario]}></Outlet>
    </>
  )
}

export default App
