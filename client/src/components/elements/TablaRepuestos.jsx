import RepuestosRows from "./RepuestosRows.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TablaRepuestos() {
 
  const navigate = useNavigate();
  
  return (
    <section className="elementos">
      <section className="elementos__title">
        <h3 className="elementos__titulo">Spare parts</h3>
        <span className="elementos__boton" onClick={() => navigate('/repuestos/new')}>
        <FaPlusCircle style={{ color: 'darkorange' }}/>
        </span>
      </section>
      <table className="elementos__tabla" border="0" width="60%">
        <thead>
          <tr align="left">
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Value</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        <RepuestosRows/>
        </tbody>
      </table>
    </section>
  );
}

export default TablaRepuestos;
