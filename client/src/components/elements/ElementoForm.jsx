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

  const { categories, cargarCategories } = useCategory();
  const {
    createElement,
    errors: elementsError,
    mensaje: elementsMensaje,
    getElement,
    updateElement,
  } = useElement();

  useEffect(() => {
    if (categories.length == 0) {
      loadCategories();
    }

    const loadElement = async () => {
      if (params.id) {
        const elElemento = await getElement(params.id);
        setValue("codigo", parseInt(elElemento.codigo, 10).toString());
        setValue("nombre", elElemento.nombre);
        setValue("descripcion", elElemento.descripcion);
        setValue(
          "idCategoria",
          parseInt(elElemento.idCategoria, 10).toString()
        );
        setValue("stock", parseInt(elElemento.stock, 10).toString());
        setValue("valorUnitario", elElemento.valorUnitario);
      }
    };
    loadElement();
  }, []);

  const loadCategories = async () => {
    await cargarCategories(params.id);
  };

  const letraCapital = (nn) => {
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
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
    if (params.id) {
      updateElement(params.id, data);
      //console.log("editar");
    } else {
      data.nombre = data.nombre.toLowerCase();
      data.descripcion = data.descripcion.toLowerCase();
      createElement(data);
      setValue("codigo", "");
    setValue("nombre", "");
    setValue("descripcion", "");
    setValue("idCategoria", "0");
    setValue("stock", "");
    setValue("valorUnitario", "");
    }
  });

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
          <form className="formularioElemento" onSubmit={onSubmit}>
            <hr />
            <br />

            {elementsError.map((e, i) => (
              <div className="errorElement" key={i}>
                {e}
              </div>
            ))}
            {elementsMensaje && <p className="elMsg">{elementsMensaje}</p>}
            <div className="contenedorElementos">
              {params.id && (
                <span className="lblElemento">
                  Code
                </span>
              )}
              <input
                placeholder="Enter Element´s code"
                {...register("codigo")}
                type="number"
                className="inputElemento"
              />
            </div>

            {errors.codigo?.message && (
              <p className="elError">{errors.codigo.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && (
                <span  className="lblElemento">
                  Name
                </span>
              )}
              <input
                placeholder="Enter Element´s name"
                {...register("nombre")}
                className="inputElemento"
              />
            </div>
            {errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && (
                <span  className="lblElemento">
                  Description
                </span>
              )}
              <input
                placeholder="Enter Element´s description"
                {...register("descripcion")}
                className="inputElemento"
              />
            </div>
            {errors.descripcion?.message && (
              <p className="elError">{errors.descripcion.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && (
                <span  className="lblElemento">
                  Category
                </span>
              )}
              <select
                {...register("idCategoria")}
                className="inputElemento"
              >
                <option value="0">Select a category..</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {letraCapital(cat.nombre)}
                  </option>
                ))}
              </select>
            </div>
            {errors.idCategoria?.message && (
              <p className="elError">{errors.idCategoria.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && (
                <span  className="lblElemento">
                  Stock
                </span>
              )}
              <input
                placeholder="Enter Element´s Stock"
                {...register("stock")}
                type="number"
                className="inputElemento"
              />
            </div>
            {errors.stock?.message && (
              <p className="elError">{errors.stock.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && (
                <span className="lblElemento">
                  Value
                </span>
              )}
              <input
                placeholder="Enter Element´s Value"
                {...register("valorUnitario")}
                className="inputElemento"
              />
            </div>
            {errors.valorUnitario?.message && (
              <p className="elError">{errors.valorUnitario.message}</p>
            )}

            <button className="btnElemento" type="submit">
              {params.id ? "Edit Element" : "Save"}
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default ElementoForm;
