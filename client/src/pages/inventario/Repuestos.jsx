import CrearRepuestos from "../../components/Repuestos/CrearRepuestos.jsx";
import TablaRepuestos from "../../components/Repuestos/TablaRepuestos.jsx";
import { useElement } from "../../context/RepuestosProvider.jsx";
import "../../css/Repuestos.css";
import Navbar from "../../components/Navbar";

function Repuestos() {
  const { respuestos } = useElement();

  return (
    <>
      <Navbar />
      {respuestos.length > 0 ? <TablaRepuestos /> : <CrearRepuestos />}
    </>
  );
}

export default Repuestos;
