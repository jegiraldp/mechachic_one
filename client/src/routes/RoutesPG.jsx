import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Contactos from "../pages/contact/Contactos";
import Informes from "../pages/informes/Informes";
import Trabajadores from "../pages/trabajadores/Trabajadores";
import Register from "../components/users/Register";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";
import Metricas from "../pages/Metricas";
import Taller from "../pages/Taller/Taller";
import Admin from "../pages/Adminis/Admin";
import Caja from "../pages/Caja/Caja";
import Repuestos from "../pages/inventario/Repuestos";
import ElementoForm from "../components/elements/ElementoForm";
import CategoriaForm from "../components/categories/CategoriaForm";
import ServicioForm from "../components/services/ServicioForm";
import Categorias from "../pages/inventario/Categorias";
import Servicios from "../pages/inventario/Servicios";





function RoutesPG() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {/* INICIO */}
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/metricas" /> : <LogIn />}
      />
      {/* METRICAS */}
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/metricas"
        element={isAuthenticated ? <Metricas /> : <LogIn />}
      />
      {/* Taller */}
      <Route
        path="/taller"
        element={isAuthenticated ? <Taller /> : <LogIn />}
      />
      {/* Administracion */}
      <Route
        path="/administracion"
        element={isAuthenticated ? <Admin /> : <LogIn />}
      />
      {/* Caja */}
      <Route path="/caja" element={isAuthenticated ? <Caja /> : <LogIn />} />
      {/* Inventario */}
      <Route
        path="/repuestos"
        element={isAuthenticated ? <Repuestos /> : <LogIn />}
      />
      <Route
        path="/repuestos/new"
        element={isAuthenticated ? <ElementoForm /> : <LogIn />}
      />
      <Route
        path="/repuestos/edit/:id"
        element={isAuthenticated ? <ElementoForm /> : <LogIn />}
      />
      <Route
        path="/servicios"
        element={isAuthenticated ? <Servicios /> : <LogIn />}
      />
      <Route
        path="/servicios/new"
        element={isAuthenticated ? <ServicioForm /> : <LogIn />}
      />
      <Route
        path="/servicios/edit/:id"
        element={isAuthenticated ? <ServicioForm /> : <LogIn />}
      />
      <Route
        path="/categorias"
        element={isAuthenticated ? <Categorias /> : <LogIn />}
      />
      <Route
        path="/categorias/new"
        element={isAuthenticated ? <CategoriaForm /> : <LogIn />}
      />
      <Route
        path="/categorias/edit/:id"
        element={isAuthenticated ? <CategoriaForm /> : <LogIn />}
      />
      {/* Contactos */}
      <Route
        path="/contactos"
        element={isAuthenticated ? <Contactos /> : <LogIn />}
      />
      {/* Informes */}
      <Route
        path="/informes"
        element={isAuthenticated ? <Informes /> : <LogIn />}
      />
      {/* Trabajadores */}
      <Route
        path="/trabajadores"
        element={isAuthenticated ? <Trabajadores /> : <LogIn />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesPG;
