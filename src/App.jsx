import {  Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Contacto from "./pages/Contact";
import Resumen from "./pages/Resumen";
import Proyecto from "./pages/Proyecto";
import Error404 from "./pages/Error404";
function App() {
  return (
    <>
      
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            Home
          </Route>
          <Route path="/resumen" element={<Resumen></Resumen>}>
            Resumen
          </Route>
          <Route path="/proyecto" element={<Proyecto></Proyecto>}>
            Proyecto
          </Route>
          <Route path="/contacto" element={<Contacto></Contacto>}>
            Contacto
          </Route>
          <Route path="*" element={<Error404></Error404>}>
           
          </Route>
        </Routes>
     
    </>
  );
}

export default App;
