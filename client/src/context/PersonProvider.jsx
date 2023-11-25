import {
    getProvidersRequest,
    createProviderRequest,
    deletePersonRequest,
    getPersonRequest,
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


    //cargar Providers
  async function getProviders() {
    const respues = await getProvidersRequest();
    setProviders(respues.data);
  }

  //createProvider
  const createProvider = async (Provider) => {
    try {

      await createProviderRequest(Provider);
      setMensaje("Provider created ✔️");
    } catch (error) {
      //console.log(error.response.data)
      setErrors(error.response.data);
    }
  };

    return (
        <PersonContext.Provider
          value={{
            getProviders,
            createProvider,
            providers,
            errors,
            mensaje,
          }}
        >
          {children}
        </PersonContext.Provider>
      );
    };