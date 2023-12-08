import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { usePerson } from "../../context/PersonProvider";
import { CustomerSchema } from "../../schemas/customer.schema.js";

function ClienteForm() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    createCustomer,
    errors: personsError,
    mensajep,
    getCustomer,
    updateCustomer,
  } = usePerson();

  useEffect(() => {
    const loadPerson = async () => {
      if (params.id) {
        let tipo=0
        const elCliente = await getCustomer(params.id);
        elCliente.isNatural?tipo=1:tipo=2
        setValue("id", parseInt(elCliente.id, 10).toString());
        setValue("tipo",parseInt(tipo, 10).toString())
        setValue("firstName", elCliente.firstName);
        setValue("lastName", elCliente.lastName);
        setValue("email", elCliente.email);
        setValue("phone", elCliente.phone);
        setValue("address", elCliente.address);
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
    resolver: zodResolver(CustomerSchema),
  });

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      console.log("actualizar");
      //updateCustomer(params.id, data);
    } else {
      data.isProvider = 0;
      data.isCustomer = 1;
      data.isEmployed = 0;
      data.isNatural = 0;
      data.isEmpresa = 0;

      if(data.tipo==1)  data.isNatural = 1;
      if(data.tipo==2)  data.isEmpresa = 1;

      data.firstName = data.firstName.toLowerCase();
      data.lastName = data.lastName.toLowerCase();
      data.email = data.email.toLowerCase();
      data.address = data.address.toLowerCase();
      

      createCustomer(data);

      setValue("id", "");
      setValue("tipo", "0");
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("email", "");
      setValue("phone", "");
      setValue("address", "");
    }
  });

  return (
    <>
      <Navbar />
      <section className="persons">
        <span className="regresar" onClick={() => navigate("/clientes")}>
          👈Back
        </span>
        <section className="persons__title">
          <h3 className="persons__titulo">
            {params.id ? "Edit Customer" : "Add Customer"}
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
                placeholder="Enter Customer´s ID"
                id="idCliente"
                {...register("id")}
              />
            </div>
            {errors.id?.message && (
              <p className="elError">{errors.id.message}</p>
            )}

            <div className="contenedorElementos">
              {params.id && <span className="lblElemento">Type</span>}
              <select {...register("tipo")} className="inputElemento">
                <option value="0">Select a type..</option>
                <option value="1">Person</option>
                <option value="2">Company</option>
              </select>
            </div>
            {errors.tipo?.message && (
              <p className="elError">{errors.tipo.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">First name</label>}
              <input
                className="inputPersona"
                placeholder="Enter Customer´s first name"
                {...register("firstName")}
                id="nombreCliente"
              />
            </div>
            {errors.firstName?.message && (
              <p className="elError">{errors.firstName.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Last name</label>}
              <input
                className="inputPersona"
                placeholder="Enter Customer´s last name"
                {...register("lastName")}
                id="apellidoCliente"
              />
            </div>
            {errors.lastName?.message && (
              <p className="elError">{errors.lastName.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Email</label>}
              <input
                className="inputPersona"
                placeholder="Enter Customer´s email"
                {...register("email")}
                id="emailCliente"
              />
            </div>
            {errors.email?.message && (
              <p className="elError">{errors.email.message}</p>
            )}

            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Phone</label>}
              <input
                className="inputPersona"
                placeholder="Enter Customer´s phone"
                {...register("phone")}
                id="telefonoCliente"
              />
            </div>
            {errors.phone?.message && (
              <p className="elError">{errors.phone.message}</p>
            )}
            <div className="contenedorElementos">
              {params.id && <label className="lblPersona">Address</label>}
              <input
                className="inputPersona"
                placeholder="Enter Customer´s address"
                {...register("address")}
                id="direccionCliente"
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

export default ClienteForm;
