
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from "./components/views/Login";
import Error404 from './components/views/Error404';
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";

function App() {
  const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
    <>
    { <AcercaDeNosotros></AcercaDeNosotros> }
     {/* { <Login setUsuarioActivo={setUsuarioActivo}></Login> } */}
     {/* <Error404></Error404>  */}
   
    </>
  )
}

export default App

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/views/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearProducto from "./components/views/products/CrearProducto";
import EditarProducto from "./components/views/products/EditarProducto";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrador/editar"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer classname="fixFooter"></Footer>
    </BrowserRouter>
  );
}

export default App;

