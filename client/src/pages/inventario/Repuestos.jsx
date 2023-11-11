import TablaRepuestos from "../../components/elements/TablaRepuestos.jsx";
import { useElement } from "../../context/ElementProvider.jsx";
import "../../css/Repuestos.css";
import Navbar from "../../components/Navbar";

function Repuestos() {
  const { elements } = useElement();

  return (
    <>
      <Navbar />
      {elements.length > 0 ? <TablaRepuestos /> : <TablaRepuestos />}
    </>
  );
}

export default Repuestos;
