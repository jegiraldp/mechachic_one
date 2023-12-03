import {
    getProvidersRequest,
    createProviderRequest,
    deletePersonRequest,
    getProviderRequest,
    updatePersonRequest,
  } from "../api/persons.api.js";
  import { useContext, useEffect, useState, createContext } from "react";
  
  export const PersonContext = createContext();

  export const usePerson = () => {
    const context = useContext(PersonContext);
    if (!context) {
      throw new Error("Error in context");
    }
    return context;
  };
  
  export const PersonContextProvider = ({ children }) => {
    const [providers, setProviders] = useState([]);
    const [errors, setErrors] = useState([]);
    const [mensajep, setMensajep] = useState("");

    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([]);
        }, 4000);
        return () => clearTimeout(timer);
      }
    }, [errors]);
  
    useEffect(() => {
      if (mensajep) {
        const timer = setTimeout(() => {
          setMensajep("");
        }, 4000);
        return () => clearTimeout(timer);
      }
    }, [mensajep]);


    //cargar Providers
  async function getProviders() {
    const respues = await getProvidersRequest();
    setProviders(respues.data);
  }

  //createProvider
  const createProvider = async (Provider) => {
    try {

      await createProviderRequest(Provider);
      setMensajep("Provider created ✔️");
    } catch (error) {
      //console.log(error.response.data)
      setErrors([error.response.data]);
    }
  };

  //get one Provider
  const getProvider = async (id) => {
    try {
      const respon = await getProviderRequest(id);
      return respon.data;
    } catch (error) {
      //console.log(error);
      setErrors([error.response.data]);

    }
  };

    return (
        <PersonContext.Provider
          value={{
            getProviders,
            getProvider,
            createProvider,
            providers,
            errors,
            mensajep,
          }}
        >
          {children}
        </PersonContext.Provider>
      );
    };