import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/LeftMenu.css";
import * as FaIcons from "react-icons/fa";

function LeftMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <section className="Sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-content__titulo">Menu</h2>
        <ul>
          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("taller")}
            >
              <FaIcons.FaBoxes />Workshop
            </div>
            {activeMenu === "taller" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/orders"
                    activeclassname="active"
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/budget"
                    activeclassname="active"
                  >
                    Budget
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/vehicles"
                    activeclassname="active"
                  >
                    Vehicles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/schedule"
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
              <FaIcons.FaUserCircle  />Contacts
            </div>
            {activeMenu === "contactos" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/customers"
                    activeclassname="active"
                  >
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/providers"
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
              <FaIcons.FaBoxes />Inventory
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
                    to="/servicios"
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
              <FaIcons.FaCashRegister  />Cash Register
            </div>
            {activeMenu === "caja" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/status"
                    activeclassname="active"
                  >
                    Status
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/closures"
                    activeclassname="active"
                  >
                    Closures
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/checking"
                    activeclassname="active"
                  >
                    Checking accounts
                  </NavLink>
                </li>
              </ul>
            )}
          </li>


          <li>
            <div
              className="Sidebar__princ"
              onClick={() => handleMenuClick("admin")}
            >
              <FaIcons.FaUserCog   />Admin
            </div>
            {activeMenu === "admin" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/buyes"
                    activeclassname="active"
                  >
                    Buyes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/sells"
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
              <FaIcons.FaStickyNote    />Reports
            </div>
            {activeMenu === "informes" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/metricas"
                    activeclassname="active"
                  >
                    Metrics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/reportcustomers"
                    activeclassname="active"
                  >
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/reportvehicles"
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
              onClick={() => handleMenuClick("trabajadores")}
            >
              <FaIcons.FaUsers/>Teams
            </div>
            {activeMenu === "trabajadores" && (
              <ul className="submenu">
                <li>
                  <NavLink
                    className="icon"
                    to="/employees"
                    activeclassname="active"
                  >
                    Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="icon"
                    to="/payroll"
                    activeclassname="active"
                  >
                    Payroll
                  </NavLink>
                </li>
                
                
              </ul>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LeftMenu;
