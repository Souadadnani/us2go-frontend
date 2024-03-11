import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <h1>Hola</h1>},
      {path: "registrar", element: <h1>Hola</h1>},
      {path: "login", element: <h1>Hola</h1>},
      {path: "publicar-viaje", element: <h1>Hola</h1>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
