import { useState } from 'react'

import './App.css'
import Login from "./components/views/Login";

function App() {
  const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
    <>
    <Login setUsuarioActivo={setUsuarioActivo}></Login>
    </>
  )
}

export default App
