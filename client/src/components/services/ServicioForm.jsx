import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useService } from "../../context/ServiceProvider";
import { ServiceSchema } from "../../schemas/service.schema.js";

function ServicioForm() {
  const navigate = useNavigate();
  const params = useParams();
  

  const {
    createService,
    errors: servicesError,
    mensaje: servicesMensaje,
    getService,
    updateService,
  } = useService();

  useEffect(() => {
    const loadService = async () => {
      if (params.id) {
        const elServicio = await getService(params.id);
        setValue("id", parseInt(elServicio.id, 10).toString());
        setValue("nombre", elServicio.nombre);
        setValue("descripcion", elServicio.descripcion);
        setValue("valor", elServicio.valor);
      }
    };
    loadService();
  }, []);

 

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(ServiceSchema),
  });

  const onSubmit = handleSubmit((data) => {
    //console.log(data)
    if (params.id) {
      updateService(params.id, data);
    } else {
      //console.log(servicesError);
      data.nombre = data.nombre.toLowerCase();
      data.descripcion = data.descripcion.toLowerCase();
      createService(data);
      setValue("nombre", "");
      setValue("id", "");
      setValue("descripcion", "");
      setValue("valor", "");
    }
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
            <hr />
            <br />
            {servicesError.map((e, i) => (
              <div className="errorService" key={i}>
                {e}
              </div>
            ))}
            {servicesMensaje && <p className="elMsg">{servicesMensaje}</p>}
            <div className="contenedorElementos">
              {params.id && <label className="lblServicio">Code</label>}
              <input
                className="inputServicio"
                type="number"
                placeholder="Enter Service´s code"
                id="codigoServicio"
                {...register("id")}
              />
            </div>
            {errors.id?.message && (
              <p className="elError">{errors.id.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblServicio">Name</label>}
              <input
                className="inputServicio"
                placeholder="Enter Service´s name"
                {...register("nombre")}
                id="nombreServicio"
              />
            </div>
            {errors.nombre?.message && (
              <p className="elError">{errors.nombre.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblServicio">Description</label>}
              <input
                className="inputServicio"
                placeholder="Enter Service´s description"
                {...register("descripcion")}
                id="descripcionServicio"
              />
            </div>
            {errors.descripcion?.message && (
              <p className="elError">{errors.descripcion.message}</p>
            )}

            <div className="contenedorElementos">
              {params.id && <label className="lblServicio">Value</label>}
              <input
                className="inputServicio"
                placeholder="Enter Service´s value"
                {...register("valor")}
                id="valorServicio"
              />
            </div>
            {errors.valor?.message && (
              <p className="elError">{errors.valor.message}</p>
            )}

            <button type="submit" className="btnServicio">
              {params.id ? "Edit service" : "Save"}
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default ServicioForm;
