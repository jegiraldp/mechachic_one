import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useElement } from "../../context/ElementProvider";
import { useCategory } from "../../context/CategoryProvider";
import React, { useEffect, useState } from "react";

function TablaRepuestos() {
  const { elements, getElements, deleteElement } = useElement();
  const navigate = useNavigate();
  //const [elId, setElId] = useState(0);
  const { categories,cargarCategories } = useCategory();
  
  useEffect(() => {
    getElements();
    cargarCategories();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = elements.slice(firstIndex, lastIndex);
  const npage = Math.ceil(elements.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const borrarElemento=async(id)=>{
    //setElId(id);
    const confirma= window.confirm("Are you sure you want to delete ??")
    if(confirma){
      deleteElement(id)
    }
  }

  const letraCapital=(nn)=>{
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
  }

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.nombre : "N/A";
  };

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage+1)
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage-1)
    }
  }

  function changePage(id) {
    setCurrentPage(id)
  }

  return (
    <section className="elementos">
      <section className="elementos__title">
        <h3 className="elementos__titulo">Spare parts</h3>
        <span
          className="elementos__boton"
          onClick={() => navigate("/repuestos/new")}
        >
          <FaPlusCircle style={{ color: "darkorange" }} />
        </span>
      </section>
      <hr />
      <br />
      <table className="elementos__tabla" border="0" width="60%">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Value</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((ele) => (
            <tr key={ele.codigo}>
              <td>{ele.codigo}</td>
              <td>{letraCapital(ele.nombre)}</td>
              <td>{letraCapital(ele.descripcion)}</td>
              <td>{letraCapital(getCategoryName(ele.idCategoria))}</td>
              <td>{ele.stock}</td>
              <td>{ele.valorUnitario}</td>
              <td className="opcionesEle">
                <span
                  className="opciones"
                  onClick={() => navigate(`/repuestos/edit/${ele.codigo}`)}
                >
                  ✏️
                </span>
              </td>
              <td className="opcionesEle">
                <span className="opciones"
                  onClick={async () => {
                    await borrarElemento(ele.codigo);
                  }}
                >
                  ❌
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="separadorElementos">
        <ul className="pagination">
          <li className="page-item-prev">
            <a href="#" className="prev" onClick={prePage}>
              &laquo;
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={currentPage === n ? "activo" : "page-item"} key={i}>
              <a href="#" className="page-link" onClick={() => changePage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item-next">
            <a href="#" className="next" onClick={nextPage}>
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default TablaRepuestos;
