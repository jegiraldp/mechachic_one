import TablaServicios from "../../components/services/TablaServicios.jsx";
import { useService } from "../../context/ServiceProvider.jsx";
import "../../css/Servicios.css";
import Navbar from "../../components/Navbar";

function Servicios() {
  const { services } = useService();

  return (
    <>
      <Navbar />
      {services.length > 0 ? <TablaServicios /> : <TablaServicios />}
    </>
  );
}

export default Servicios;
