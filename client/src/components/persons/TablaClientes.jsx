import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePerson } from "../../context/PersonProvider";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function TablaClientes() {
  const { customers, getCustomers, deleteCustomers } = usePerson();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const results = !search
    ? customers
    : customers.filter((dato) => dato.firstName.toLowerCase().includes(search));
  //pagination
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = results.slice(firstIndex, lastIndex);
  const npage = Math.ceil(customers.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  //

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
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const borrarPerson = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProvider(id);
        
      }
    });
    
  };

  return (
    <section className="persons">
      <section className="persons__title">
        <h3 className="persons__titulo">Customers</h3>
        <span
          className="persons__boton"
          onClick={() => navigate("/clientes/new")}
        >
          <FaPlusCircle style={{ color: "darkorange" }} />
        </span>
      </section>
      <hr />
      <div className="divBuscarPersona">
        <input
          className="searchInput"
          type="text"
          onChange={searcher}
          placeholder="Search by fistname"
          value={search}
        />
      </div>

      <table className="persons__tabla" border="0" width="60%">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Type</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((per) => (
            <tr key={per.id}>
            
                  <td>{per.id}</td>
                  <td>{letraCapital(per.firstName)}</td>
                  <td>{letraCapital(per.lastName)}</td>
                  <td>{per.isNatural==1?"Person":"Company" }</td>
                  <td>{letraCapital(per.email)}</td>
                  <td>{letraCapital(per.phone)}</td>
                  <td>{letraCapital(per.address)}</td>

                  <td className="opcionesPer">
                    <span
                      className="opciones"
                      onClick={() => navigate(`/clientes/edit/${per.id}`)}
                    >
                      ✏️
                    </span>
                  </td>
                  <td className="opcionesPer">
                    <span
                      className="opciones"
                      onClick={async () => {
                        await borrarPerson(per.id);
                      }}
                    >
                      ❌
                    </span>
                  </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="separadorPersons">
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

export default TablaClientes;
