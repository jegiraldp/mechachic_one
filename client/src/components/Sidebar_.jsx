import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import * as FaIcons from "react-icons/fa";
function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {
    console.log(menu)
    console.log(activeMenu)
    if (activeMenu === menu) {
      // Si el mismo menú se hace clic nuevamente, ciérralo.
      setActiveMenu(null);
    } else {
      
      setActiveMenu(menu);
    }
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarClass = isSidebarCollapsed ? "collapsed" : "Sidebar";
  return (
    <section className={sidebarClass}>
      <button
        className="toggle-button"
        onClick={() => {
          handleToggleSidebar();
          handleMenuClick("sidebar");
        }}
      >
        {isSidebarCollapsed ? (
          <FaIcons.FaAngleRight /> // Icono para expandir el Sidebar
        ) : (
          <FaIcons.FaAngleLeft /> // Icono para contraer el Sidebar
        )}
        {activeMenu === "sidebar"}
      </button>
      <div className="sidebar-content">
        <h1 className="sidebar-content__titulo">Menu</h1>
        <ul>
          <li
            className="Sidebar__princ"
            onClick={() => handleMenuClick("metrics")}
          >
            {activeMenu === "metrics"}
            <NavLink to="/metricas" className="icon" activeclassname="active">
              <FaIcons.FaChartBar /> Metrics
            </NavLink>
          </li>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("taller")}
            >
              <FaIcons.FaToolbox /> Workshop
            </div>
            {activeMenu === "taller" && (
              <ul className="submenu">
              <li>
                 <NavLink
                   className="icon"
                   to="/categorias"
                   activeclassname="active"
                 >
                   Orders
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="icon"
                   to="/categorias"
                   activeclassname="active"
                 >
                   Budget
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="icon"
                   to="/categorias"
                   activeclassname="active"
                 >
                   Vehicles
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   className="icon"
                   to="/categorias"
                   activeclassname="active"
                 >
                   Schedule
                 </NavLink>
               </li>
             </ul>
            )}
          </li>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("contactos")}
            >
              <FaIcons.FaUserCircle /> Contacts
            </div>
            {activeMenu === "contactos" && (
              <ul className="submenu">
                
                <li>
                  <NavLink
                    className="icon"
                    to="/contactos"
                    activeclassname="active"
                  >
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/contactos"
                    activeclassname="active"
                  >
                    Providers
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("inventario")}
            >
              <FaIcons.FaBoxes /> Inventory
            </div>
            {activeMenu === "inventario" && (
              <ul className="submenu">
               <li>
                  <NavLink
                    className="icon"
                    to="/repuestos"
                    activeclassname="active"
                  >
                    Spare parts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/inventario"
                    activeclassname="active"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/categorias"
                    activeclassname="active"
                  >
                    Categories
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("caja")}
            >
              <FaIcons.FaCashRegister /> Cash Register
            </div>
            {activeMenu === "caja" && (
              <ul className="submenu">
                {}
                <li>
                  <NavLink className="icon" to="/caja" activeclassname="active">
                    Status
                  </NavLink>
                </li>
                <li>
                  <NavLink className="icon" to="/caja" activeclassname="active">
                    Closures
                  </NavLink>
                </li>
                <li>
                  <NavLink className="icon" to="/caja" activeclassname="active">
                    Checking accounts
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("admini")}
            >
              <FaIcons.FaUserCog /> Admin
            </div>
            {activeMenu === "admini" && (
              <ul className="submenu">
                {}
                <li>
                  <NavLink
                    className="icon"
                    to="/administracion"
                    activeclassname="active"
                  >
                    Buyes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/administracion"
                    activeclassname="active"
                  >
                    Sells
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          
          
          
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("informes")}
            >
              <FaIcons.FaStickyNote /> Reports
            </div>
            {activeMenu === "informes" && (
              <ul className="submenu">
                {}
                <li>
                  <NavLink
                    className="icon"
                    to="/informes"
                    activeclassname="active"
                  >
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/informes"
                    activeclassname="active"
                  >
                    Vehicles
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("trabajodores")}
            >
              <FaIcons.FaUsers /> Team
            </div>
            {activeMenu === "trabajodores" && (
              <ul className="submenu">
                {}
                <li>
                  <NavLink
                    className="icon"
                    to="/trabajadores"
                    activeclassname="active"
                  >
                    Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/trabajadores"
                    activeclassname="active"
                  >
                    Payroll
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className="iconos_constraidos">
          <li>
            <NavLink to="/metricas">
              <FaIcons.FaChartBar />
            </NavLink>
          </li>
          <li>
            <NavLink to="/taller">
              <FaIcons.FaToolbox />
            </NavLink>
          </li>
          <li>
            <NavLink to="/administracion">
              <FaIcons.FaUserCog />
            </NavLink>
          </li>
          <li>
            <NavLink to="/caja">
              <FaIcons.FaCashRegister />
            </NavLink>
          </li>
          <li>
            <NavLink to="/repuestos">
              <FaIcons.FaBoxes />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactos">
              <FaIcons.FaUserCircle />
            </NavLink>
          </li>
          <li>
            <NavLink to="/informes">
              <FaIcons.FaStickyNote />
            </NavLink>
          </li>
          <li>
            <NavLink to="/trabajadores">
              <FaIcons.FaUsers />
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
