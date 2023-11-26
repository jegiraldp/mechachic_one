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
    errors: personsError,
    mensajep,
    /* getService,
      updateService,*/
  } = usePerson();

  useEffect(() => {
    const loadPerson = async () => {
      if (params.id) {
        /*const elPersona = await getService(params.id);
          setValue("id", parseInt(elPersona.id, 10).toString());
          setValue("nombre", elPersona.nombre);
          setValue("descripcion", elPersona.descripcion);
          setValue("valor", elPersona.valor);*/
      }
    };
    loadPerson();
  }, [params.id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(ProviderSchema),
  });

  const onSubmit = handleSubmit((data) => {
    data.isProvider = 1;
    data.isCustomer = 0;
    data.isEmployed = 0;
    data.isNatural = 0;
    data.isEmpresa = 0;

    createProvider(data);
    console.log(personsError);

    /*if (params.id) {
        updateService(params.id, data);
      } else {
        console.log(personsError);
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
      <section className="persons">
        <span className="regresar" onClick={() => navigate("/proveedores")}>
          👈Back
        </span>
        <section className="persons__title">
          <h3 className="persons__titulo">
            {params.id ? "Edit Provider" : "Add Provider"}
          </h3>
        </section>

        <section className="formulario-container">
          <form className="formularioPersona" onSubmit={onSubmit}>
            <hr />
            <br />
            {personsError.map((e, i) => (
              <div className="errorPerson" key={i}>
                {e}
              </div>
            ))}


            
            {mensajep && <p className="elMsg">{mensajep}</p>}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">ID</label>}
              <input
                className="inputPersona"
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
              {params.id && <label className="lblPersona">First name</label>}
              <input
                className="inputPersona"
                placeholder="Enter Provider´s first name"
                {...register("firstName")}
                id="nombreProveedor"
              />
            </div>
            {errors.firstName?.message && (
              <p className="elError">{errors.firstName.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Last name</label>}
              <input
                className="inputPersona"
                placeholder="Enter Provider´s last name"
                {...register("lastName")}
                id="apellidoProveedor"
              />
            </div>
            {errors.lastName?.message && (
              <p className="elError">{errors.lastName.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Email</label>}
              <input
                className="inputPersona"
                placeholder="Enter Provider´s email"
                {...register("email")}
                id="emailProveedor"
              />
            </div>
            {errors.email?.message && (
              <p className="elError">{errors.email.message}</p>
            )}

            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Phone</label>}
              <input
                className="inputPersona"
                placeholder="Enter Provider´s phone"
                {...register("phone")}
                id="telefonoProveedor"
              />
            </div>
            {errors.phone?.message && (
              <p className="elError">{errors.phone.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Address</label>}
              <input
                className="inputPersona"
                placeholder="Enter Provider´s address"
                {...register("address")}
                id="direccionProveedor"
              />
            </div>
            {errors.address?.message && (
              <p className="elError">{errors.address.message}</p>
            )}
            <button type="submit" className="btnPersona">
              {params.id ? "Edit service" : "Save"}
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default ProveedorForm;
