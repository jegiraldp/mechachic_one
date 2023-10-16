import { useElement } from "../../context/RepuestosProvider";
import RepuestosRows from "./RepuestosRows";
import { FaPlusCircle } from "react-icons/fa";

function TablaRepuestos() {
  const { cambiar } = useElement();
  const onclick = () => {
    cambiar(2);
  };
  return (
    <section className="repuestos">
      <section className="repuestos__title">
        <h3 className="repuestos__titulo">Repuestos</h3>
        <span className="repuestos__boton" onClick={onclick}>
          <FaPlusCircle style={{ color: 'darkorange', fontSize: '0.7em' }}/>
        </span>
      </section>
      <table className="repuestos__tabla" >
        <thead>
          <tr align="left">
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <RepuestosRows />
        </tbody>
      </table>
    </section>
  );
}

export default TablaRepuestos;
