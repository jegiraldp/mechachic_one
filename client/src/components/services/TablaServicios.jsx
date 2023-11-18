import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useService } from "../../context/ServiceProvider";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

function TablaServicios() {
  const { services, getServices, deleteService } = useService();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

    const results = !search
    ? services
    : services.filter((dato) => dato.nombre.toLowerCase().includes(search));

  //pagination
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = results.slice(firstIndex, lastIndex);
  const npage = Math.ceil(services.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  //

  const borrarService = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService(id);
        
      }
    });
    
  };


  
  const letraCapital = (nn) => {
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
  };

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  const searcher = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section className="servicios">
      <section className="servicios__title">
        <h3 className="servicios__titulo">Services</h3>
        <span
          className="servicios__boton"
          onClick={() => navigate("/servicios/new")}
        >
          <FaPlusCircle style={{ color: "darkorange" }} />
        </span>
      </section>
      <hr />
      <div className="divBuscarServicio">
      
        <input
          className="searchInput"
          type="text"
          onChange={searcher}
          placeholder="Search by name"
          value={search}
        />
      </div>
      <table className="servicios__tabla" border="0" width="60%">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Value</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((ser) => (
            <tr key={ser.id}>
              <td>{ser.id}</td>
              <td>{letraCapital(ser.nombre)}</td>
              <td>{letraCapital(ser.descripcion)}</td>
              <td>{ser.valor}</td>
              <td className="opcionesSer">
                <span
                  className="opciones"
                  onClick={() => navigate(`/servicios/edit/${ser.id}`)}
                >
                  ✏️
                </span>
              </td>
              <td className="opcionesSer">
                <span
                  className="opciones"
                  onClick={async () => {
                    await borrarService(ser.id);
                  }}
                >
                  ❌
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="separadorServices">
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

export default TablaServicios;
