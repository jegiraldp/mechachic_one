import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { CategorySchema } from "../../schemas/category.schema.js";
import { useCategory } from "../../context/CategoryProvider";

function CategoriaForm() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    createCategory,
    errors: categoriesError,
    mensaje: categoryMensaje,
    getCategory,
    updateCategory
    
  } = useCategory();

  useEffect(() => {
    const loadCategory = async () => {
      if (params.id) {
        const laCate = await getCategory(params.id);
        setValue("nombre", laCate.nombre);
      }
    };
    loadCategory();
  }, [params.id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit = handleSubmit((data) => {
    
    if (params.id) {
      updateCategory(params.id, data);

    } else {
      data.nombre=data.nombre.toLowerCase();
      createCategory(data);
      setValue("nombre", "");
    }
  });
  return (
    <>
      <Navbar />
      <section className="categorias">
        <span className="regresar" onClick={() => navigate("/categorias")}>
          👈Back
        </span>
        <section className="categorias__title">
          <h3 className="categorias__titulo">
            {params.id ? "Edit Category" : "Add Category"}
          </h3>
          
        </section>
        
        <section className="formulario-container">
          <form className="formularioCategoria" onSubmit={onSubmit}>
          <hr /><br />
            {categoriesError.map((e, i) => (
              <div className="errorCategory" key={i}>
                {e}
              </div>
            ))}
            {categoryMensaje && <p className="elMsg">{categoryMensaje}</p>}
            <div className="contenedorElementos">
            {params.id && <label for="nombre" className="lblCategoria">Name</label>}
           
            <input className="inputCategoria" id="nombre" name="nombre"
              placeholder="Enter Categories´s name"
              {...register("nombre")}
            ></input>
            </div>
            {errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )}

            <button type="submit" className="btnCategoria">{params.id ? "Edit category" : "Save"}</button>
            
          </form>
        </section>
      </section>
    </>
  );
}

export default CategoriaForm;
