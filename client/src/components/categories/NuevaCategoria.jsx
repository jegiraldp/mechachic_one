import React from "react";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { CategorySchema } from "../../schemas/category.schema.js";
import { useCategory } from "../../context/CategoryProvider";

function NuevaCategoria() {
  const navigate = useNavigate();
  
  const {
    createCategory,
    errors: categoriesError,
    mensaje:categoryMensaje,
    } = useCategory();

 

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit = handleSubmit((data) => {
    //event.preventDefault();
    // console.log(mensaje)
    // console.log(data)
    createCategory(data);
    setValue("nombre", "");
    
  });
  return (
    <>
      <Navbar />
      <section className="categorias">
        <section className="categorias__title">
          <h3 className="categorias__titulo">Add Categorie</h3>
        </section>
        <section className="formulario-container">
          <form className="formulario" onSubmit={onSubmit}>
            {categoriesError.map((e, i) => (
              <div className="errorCategory" key={i}>
                {e}
              </div>
            ))}
            {categoryMensaje && <p className="elMsg">{categoryMensaje}</p>}
            <input
              placeholder="Enter Categories´s name"
              {...register("nombre")}
            />
            {errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )}

            <button type="submit">Add Categorie</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default NuevaCategoria;
