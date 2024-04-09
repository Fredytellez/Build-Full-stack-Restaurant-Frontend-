import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter Envuelve toda la app y habilita el enrutamiento  y se renombra con as como Router en este caso 
import {Toaster} from "react-hot-toast"; // Componente de notificación que facilita la visualización de mensajes de éxito, error, advertencia, etc
import Home from "./pages/Home"
import Success from "./pages/Success"
import NotFound from "./pages/NotFound"


const App = () => { // componente principal de la aplicación 
  return (
  <Router> {/* El componente Router envuelve toda la aplicación. Habilitando el enrutamiento basado en el URL*/}
    <Routes>
      <Route path="/" element={<Home/>}/> {/* Se define la URL raíz "/", se renderiza el componente  el componente HOME*/}
      <Route path="/success" element={<Success/>}/> {/* Se define la URL raíz "/success", se renderiza el componente  el componente Success*/}
      <Route path="*" element={<NotFound/>}/> {/* Se define la URL raíz "/*", se renderiza el componente  el componente NotFound*/}
    </Routes>
    <Toaster/> {/* Componente Toaster se usa para mostrar notificaciones en la app */}
  </Router>
  );
};

export default App; // Se exporta el componente App
