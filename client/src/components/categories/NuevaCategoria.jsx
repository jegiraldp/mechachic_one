import React from "react";
import Navbar from "../../components/Navbar";

function NuevaCategoria() {
  return (
    <>
      <Navbar />
      <section className="categorias">
      <section className="categorias__title">
        <h3 className="categorias__titulo">New Categorie</h3>
       </section>
       <section className="formulario-container">
      <form  className="formulario">
        <label htmlFor="nombre">Categorie´s name</label>
        <input type="text"/>
        <button>Add Categorie</button>
      </form>
      </section>
      </section>
    </>
  );
}

export default NuevaCategoria;
