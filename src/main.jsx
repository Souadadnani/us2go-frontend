import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registrar from './components/usuarios/Registrar.jsx';
import Login from './components/usuarios/Login.jsx';
import Viajes from './components/viajes/Viajes.jsx';
import PublicarViaje from './components/viajes/PublicarViaje.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Viajes />},
      {path: "registrar", element: <Registrar />},
      {path: "login", element: <Login />},
      {path: "publicar-viaje", element: <PublicarViaje />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
