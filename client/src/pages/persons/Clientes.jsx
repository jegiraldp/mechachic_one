import TablaClientes from "../../components/persons/TablaClientes.jsx";
import { usePerson } from "../../context/PersonProvider.jsx";
import "../../css/Persons.css";
import Navbar from "../../components/Navbar";

function Clientes() {
  const { customers } = usePerson();

  return (
    <>
      <Navbar />
      {customers.length > 0 ? <TablaClientes /> : <TablaClientes />}
    </>
  );
}

export default Clientes;