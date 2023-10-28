import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { ElementSchema } from "../../schemas/element.schema.js";
import { useCategory } from "../../context/CategoryProvider";
import { useElement } from "../../context/ElementProvider";

function ElementoForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [element, setElement] = useState({
    nombre: "",
    descripcion: "",
    idCategoria: 0,
    stock: 0,
    valorUnitario: 0,
  });

  const [lasCate, setLasCate] = useState([]);

  const { categories, cargarCategories } = useCategory();
  const { createElement } = useElement();

  useEffect(() => {
    if (categories.length == 0) {
      loadCategories();
    }
  }, []);

  const loadCategories = async () => {
    await cargarCategories(params.id);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(ElementSchema),
  });

  const onSubmit = handleSubmit((data) => {
    
    /* if (params.id) {
      updateCategory(params.id, data);

    } else {*/
     createElement(data);
    //setValue("nombre", "");
    /*}*/
  });
  const letraCapital = (nn) => {
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
  };

  return (
    <>
      <Navbar />
      <section className="elementos">
        <span className="regresar" onClick={() => navigate("/repuestos")}>
          👈Back
        </span>
        <section className="elementos__title">
          <h3 className="elementos__titulo">
            {params.id ? "Edit Spare part" : "Add Spare part"}
          </h3>
        </section>
        <section className="formulario-container">
          <form className="formulario" onSubmit={onSubmit}>
            <hr />
            <br />
            {/*categoriesError.map((e, i) => (
              <div className="errorCategory" key={i}>
                {e}
              </div>
            ))*/}
            {/*categoryMensaje && <p className="elMsg">{categoryMensaje}</p>*/}

            <input placeholder="Enter Element´s code" {...register("codigo")} type="number"/>
            {errors.codigo?.message && (
              <p className="elError">{errors.codigo.message}</p>
            )}

            <input placeholder="Enter Element´s name" {...register("nombre")} />
            {errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )}

            <input
              placeholder="Enter Element´s description"
              {...register("descripcion")}
            />
            {errors.descripcion?.message && (
              <p className="elError">{errors.descripcion.message}</p>
            )}

            <select {...register("idCategoria")}>
              <option value="0">Select a category..</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {letraCapital(cat.nombre)}
                </option>
              ))}
            </select>
            {errors.idCategoria?.message && (
              <p className="elError">{errors.idCategoria.message}</p>
            )}

            <input placeholder="Enter Element´s Stock" {...register("stock")} type="number"/>
            {errors.stock?.message && (
              <p className="elError">{errors.stock.message}</p>
            )}

            <input
              placeholder="Enter Element´s Value"
              {...register("valorUnitario")}
              type="number"/>
            {errors.valorUnitario?.message && (
              <p className="elError">{errors.valorUnitario.message}</p>
            )}

            <button type="submit">{params.id ? "Edit" : "Save.."}</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default ElementoForm;
