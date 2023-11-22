import {
    getProvidersRequest,
    createPersonRequest,
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


    //cargar Providers
  async function getProviders() {
    const respues = await getProvidersRequest();
    setProviders(respues.data);
  }

    return (
        <PersonContext.Provider
          value={{
            getProviders,
            providers,
            errors,
            mensaje,
          }}
        >
          {children}
        </PersonContext.Provider>
      );
    };