import CategoriasRows from "./CategoriasRows.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//cargarCategories
function TablaCategorias() {
 
  const navigate = useNavigate();
  
  return (
    <section className="categorias">
      <section className="categorias__title">
        <h3 className="categorias__titulo">Categories</h3>
        <span className="categorias__boton" onClick={() => navigate('/categorias/new')}>
        <FaPlusCircle style={{ color: 'darkorange' }}/>
        </span>
        
      </section>
      <hr /><br />
      <table className="categorias__tabla" border="0" width="60%">
        
        <thead>
          <tr align="left">
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <CategoriasRows />
        </tbody>
      </table>
    </section>
  );
}

export default TablaCategorias;
