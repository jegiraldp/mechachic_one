import TablaProveedores from "../../components/persons/TablaProveedores.jsx";
import { usePerson } from "../../context/PersonProvider.jsx";
import "../../css/Persons.css";
import Navbar from "../../components/Navbar";

function Proveedores() {
  const { providers } = usePerson();

  return (
    <>
      <Navbar />
      {providers.length > 0 ? <TablaProveedores /> : <TablaProveedores />}
    </>
  );
}

export default Proveedores;