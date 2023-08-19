import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Administrador from "./components/views/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearProducto from "./components/views/products/CrearProducto";
import EditarProducto from "./components/views/products/EditarProducto";
import Menu from "./components/common/Menu";
import Foteer from "./components/common/Foteer";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
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
      </Routes>
      <Foteer></Foteer>
    </BrowserRouter>
  );
}

export default App;
