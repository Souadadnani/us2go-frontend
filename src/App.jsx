import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/Nav'
import { useState } from 'react'


function App() {
  const [logeado, setLogeado] = useState(null); 

  return (
    <>
      <Nav logeado={logeado} setLogeado={setLogeado}></Nav>
      <Outlet context={[logeado, setLogeado]}></Outlet>
    </>
  )
}

export default App
