import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { usePerson } from "../../context/PersonProvider";
import { ProviderSchema } from "../../schemas/provider.schema.js";

function ProveedorForm() {
    const navigate = useNavigate();
    const params = useParams();
    
  
    const {
        createProvider,
      errors: servicesError,
      mensaje: servicesMensaje,
     /* getService,
      updateService,*/
    } = usePerson();
  
    useEffect(() => {
      const loadPerson = async () => {
        if (params.id) {
          /*const elServicio = await getService(params.id);
          setValue("id", parseInt(elServicio.id, 10).toString());
          setValue("nombre", elServicio.nombre);
          setValue("descripcion", elServicio.descripcion);
          setValue("valor", elServicio.valor);*/
        }
      };
      loadPerson();
    }, []);
  
   
  
    const {
      register,
      formState: { errors },
      handleSubmit,
      setValue,
    } = useForm({
      resolver: zodResolver(ProviderSchema),
    });
  
    const onSubmit = handleSubmit((data) => {
      /*if (params.id) {
        updateService(params.id, data);
      } else {
        console.log(servicesError);
        data.nombre = data.nombre.toLowerCase();
        data.descripcion = data.descripcion.toLowerCase();
        createService(data);
        setValue("nombre", "");
        setValue("id", "");
        setValue("descripcion", "");
        setValue("valor", "");
      }*/
    });
  
    return (
      <>
        <Navbar />
        <section className="servicios">
          <span className="regresar" onClick={() => navigate("/proveedores")}>
            👈Back
          </span>
          <section className="servicios__title">
            <h3 className="servicios__titulo">
              {params.id ? "Edit Provider" : "Add Provider"}
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
                {params.id && <label className="lblServicio">ID</label>}
                <input
                  className="inputServicio"
                  type="number"
                  placeholder="Enter Provider´s ID"
                  id="idProveedor"
                  {...register("id")}
                />
              </div>
              {errors.id?.message && (
                <p className="elError">{errors.id.message}</p>
              )}
              <div className="contenedorElementos">
                {params.id && <label className="lblServicio">First name</label>}
                <input
                  className="inputServicio"
                  placeholder="Enter Provider´s first name"
                  {...register("nombre")}
                  id="nombreProveedor"
                />
              </div>
              {errors.nombre?.message && (
                <p className="elError">{errors.nombre.message}</p>
              )}
              <div className="contenedorElementos">
                {params.id && <label className="lblServicio">Last name</label>}
                <input
                  className="inputServicio"
                  placeholder="Enter Provider´s last name"
                  {...register("nombre")}
                  id="apellidoProveedor"
                />
              </div>
              {errors.nombre?.message && (
                <p className="elError">{errors.nombre.message}</p>
              )}
              <div className="contenedorElementos">
                {params.id && <label className="lblServicio">Email</label>}
                <input
                  className="inputServicio"
                  placeholder="Enter Provider´s email"
                  {...register("descripcion")}
                  id="emailProveedor"
                />
              </div>
              {errors.descripcion?.message && (
                <p className="elError">{errors.descripcion.message}</p>
              )}
  
              <div className="contenedorElementos">
                {params.id && <label className="lblServicio">Phone</label>}
                <input
                  className="inputServicio"
                  placeholder="Enter Provider´s phone"
                  {...register("valor")}
                  id="telefonoProveedor"
                />
              </div>
              {errors.valor?.message && (
                <p className="elError">{errors.valor.message}</p>
              )}
   <div className="contenedorElementos">
                {params.id && <label className="lblServicio">Address</label>}
                <input
                  className="inputServicio"
                  placeholder="Enter Provider´s address"
                  {...register("valor")}
                  id="direccionProveedor"
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

export default ProveedorForm