import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategoryProvider";
import React, { useEffect, useState } from "react";

//cargarCategories
function TablaCategorias() {
  const {
    categories,
    cargarCategories,
    deleteCategory,
    errors: categoriesError,
  } = useCategory();

  const [elId, setElId] = useState(0);

  useEffect(() => {
    cargarCategories();
  }, []);

  const borrarTarea = async (id, nc) => {
    setElId(id);
    const confirmacion = window.confirm("Are you sure you want to delete ??");

    if (confirmacion) {
      await deleteCategory(id);
    }
  };

  const letraCapital = (nn) => {
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
  };

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = categories.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categories.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
    <section className="categorias">
      <section className="categorias__title">
        <h3 className="categorias__titulo">Categories</h3>
        <span
          className="categorias__boton"
          onClick={() => navigate("/categorias/new")}
        >
          <FaPlusCircle style={{ color: "darkorange" }} />
        </span>
      </section>
      <hr />
      <br />
      <table className="categorias__tabla" border="0" width="60%">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((cate) => (
            <tr key={cate.id}>
              <td>{letraCapital(cate.nombre)}</td>
              <td className="opcionesCat">
                <span
                  className="imgOpcion"
                  onClick={() => navigate(`/categorias/edit/${cate.id}`)}
                >
                  ✏️
                </span>
              </td>
              <td className="opcionesCat">
                <span
                  className="imgOpcion"
                  onClick={() => {
                    borrarTarea(cate.id, cate.nombre);
                  }}
                >
                  ❌
                  {elId == cate.id &&
                    categoriesError.map((e, i) => (
                      <div className="errorCategoryDB">{e}</div>
                    ))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="separadorCategorias">
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

export default TablaCategorias;
