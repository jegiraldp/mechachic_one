import {
    getProvidersRequest,
    createProviderRequest,
    deleteProviderRequest,
    getProviderRequest,
    updateProviderRequest,
    getCustomersRequest,
    createCustomerRequest,
    deleteCustomerRequest,
    getCustomerRequest,
    updateCustomerRequest,
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
    const [customers, setCustomers] = useState([]);

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

//////////////////////////////////PROVIDERS
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

  //update provider
  const updateProvider = async (id, newFields) => {
    try {
      const res = await updateProviderRequest(id, newFields);
      setMensajep(res.data);
    } catch (error) {
      setErrors([error.response.data]);
    }
  };

   //Delete provider
   const deleteProvider = async (id) => {
    try {
      await deleteProviderRequest(id);
      setProviders(providers.filter((Provider) => Provider.id !== id));
     
    } catch (error) {
      return "DB error ";
    }
  };

  //////////////////////////////////CUSTOMERS
    //cargar Customers
    async function getCustomers() {
      const respues = await getCustomersRequest();
      setCustomers(respues.data);
    }
  
    //create
    const createCustomer = async (customer) => {
      try {
  
        await createCustomerRequest(customer);
        setMensajep("Customer created ✔️");
      } catch (error) {
        //console.log(error.response.data)
        setErrors([error.response.data]);
      }
    };
  
    //get one 
    const getCustomer = async (id) => {
      try {
        const respon = await getCustomerRequest(id);
        return respon.data;
      } catch (error) {
        //console.log(error);
        setErrors([error.response.data]);
  
      }
    };
  
    //update 
    const updateCustomer = async (id, newFields) => {
      try {
        const res = await updateProviderRequest(id, newFields);
        setMensajep(res.data);
      } catch (error) {
        setErrors([error.response.data]);
      }
    };
  
     //Delete 
     const deleteCustomer = async (id) => {
      try {
        await deleteProviderRequest(id);
        setProviders(providers.filter((Provider) => Provider.id !== id));
       
      } catch (error) {
        return "DB error ";
      }
    };

    return (
        <PersonContext.Provider
          value={{
            getProviders,
            getProvider,
            updateProvider,
            createProvider,
            deleteProvider,
            getCustomers,
            getCustomer,
            updateCustomer,
            createCustomer,
            deleteCustomer,
            providers,
            customers,
            errors,
            mensajep,
          }}
        >
          {children}
        </PersonContext.Provider>
      );
    };