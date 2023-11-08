import CategoriasRows from "./CategoriasRows.jsx";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategoryProvider";
import React, { useState } from "react";

//cargarCategories
function TablaCategorias() {
  const { categories } = useCategory();

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = categories.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categories.length / recordsPerPage);
  const numbers = [...Array(npage + 1)].slice(1);
  //console.log(npage)

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
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link">
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className="page-item" key={i}>
              <a href="#" className="page-item">
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default TablaCategorias;
