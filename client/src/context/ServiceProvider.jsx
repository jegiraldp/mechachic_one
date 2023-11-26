import {
  getServicesRequest,
  createServiceRequest,
  deleteServiceRequest,
  getServiceRequest,
  updateServiceRequest,
} from "../api/services.api.js";
import { useContext, useEffect, useState, createContext } from "react";

export const ServiceContext = createContext();

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("Error in context");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [errors, setErrors] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  //cargar Services
  async function getServices() {
    const respues = await getServicesRequest();
    setServices(respues.data);
  }

  //createService
  const createService = async (Service) => {
    try {
      await createServiceRequest(Service);
      setMensaje("Service created ✔️");
    } catch (error) {
      //console.log(error.response.data)
      setErrors([error.response.data]);
    }
  };

  //Delete Service
  const deleteService = async (id) => {
    try {
      await deleteServiceRequest(id);
      setServices(services.filter((Service) => Service.id !== id));
     
    } catch (error) {
      return "DB error ";
    }
  };

  //get one Service
  const getService = async (id) => {
    try {
      const respon = await getServiceRequest(id);
      return respon.data;
    } catch (error) {
      //console.log(error);
      setErrors([error.response.data]);

    }
  };

  //update Service
  const updateService = async (id, newFields) => {
    try {
      const res = await updateServiceRequest(id, newFields);
      setMensaje(res.data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        getServices,
        services,
        createService,
        deleteService,
        getService,
        updateService,
        errors,
        mensaje,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
