import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from "./components/views/Login";
import Error404 from './components/views/Error404';

function App() {
  const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
    <>
     {/* <Login setUsuarioActivo={setUsuarioActivo}></Login>  */}
     <Error404></Error404> 
    </>
  )
}

export default App
