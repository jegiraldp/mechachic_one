import {
  getElementsRequest,
  createElementRequest,
  deleteElementRequest,
  getElementRequest,
  updateElementRequest,
} from "../api/elements.api.js";
import { useContext, useEffect,useState, createContext } from "react";

export const ElementContext = createContext();

  

export const useElement = () => {
  const context = useContext(ElementContext);
  if (!context) {
    throw new Error("Error in context");
  }
  return context;
};

export const ElementContextProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
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
  
  //cargar Elements
  async function getElements() {
    const respues = await getElementsRequest();
    setElements(respues.data);
  }

  //createElement
  const createElement = async (Element) => {
    try {
      await createElementRequest(Element);
      setMensaje("Element created ✔️");
    } catch (error) {
      //console.log(error);
      setErrors(error.response.data);
    }
  };

  //Delete element
  const deleteElement = async (id) => {
    try {
      await deleteElementRequest(id);
      setElements(elements.filter((Element) => Element.id !== id));
      return null;
    } catch (error) {
      return "DB error ";
    }
  };

  //get one Element
  const getElement = async (id) => {
    try {
      const respon = await getElementRequest(id);
      return respon.data;
    } catch (error) {
      console.log(error);
    }
  };

  //update Element
  const updateElement = async (id, newFields) => {
    try {
      const res =await updateElementRequest(id, newFields);
      setMensaje(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ElementContext.Provider
      value={{
        getElements,
        elements,
        createElement,
        deleteElement,
        getElement,
        updateElement,
        errors,
        mensaje,
      }}
    >
      {children}
    </ElementContext.Provider>
  );
};
