import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useService } from "../../context/ServiceProvider";

function ServicioForm() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    /*const loadCategory = async () => {
      if (params.id) {
        const laCate = await getCategory(params.id);
        setValue("nombre", laCate.nombre);
      }
    };
    loadCategory();*/
  }, [params.id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm(/*{
    resolver: zodResolver(CategorySchema),
  }*/);

  const onSubmit = handleSubmit((data) => {
    /*
    if (params.id) {
      updateCategory(params.id, data);

    } else {
      data.nombre=data.nombre.toLowerCase();
      createCategory(data);
      setValue("nombre", "");
    }*/
  });

  return (
    <>
      <Navbar />
      <section className="servicios">
        <span className="regresar" onClick={() => navigate("/servicios")}>
          👈Back
        </span>
        <section className="servicios__title">
          <h3 className="servicios__titulo">
            {params.id ? "Edit Service" : "Add Service"}
          </h3>
          
        </section>
        
        <section className="formulario-container">
          <form className="formularioServicio" onSubmit={onSubmit}>
          <hr /><br />
            {/*categoriesError.map((e, i) => (
              <div className="errorCategory" key={i}>
                {e}
              </div>
            ))*/}
            {/*categoryMensaje && <p className="elMsg">{categoryMensaje}</p>*/}
            <div className="contenedorElementos">
            {/*params.id && <label for="nombre" className="lblServicio">Name</label>*/}
          
            <input className="inputServicio" id="nombre" name="nombre"
              placeholder="Enter Service´s name"
              {...register("nombre")}
            />
            </div>
            {/*errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )*/}

            <button type="submit" className="btnServicio">{params.id ? "Edit" : "Save"}</button>
            
          </form>
        </section>
      </section>
    </>
  );
}

export default ServicioForm;
