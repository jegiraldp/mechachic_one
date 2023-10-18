import { useContext, useState, createContext, useEffect } from "react";
import {
  getCategoriesRequest,
  deleteCategoryRequest,
  createCategoryRequest,
  getCategoryRequest,
  updateCategoryRequest,
} from "../api/categories.api.js";

export const CategoryContext = createContext();

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("Error in context");
  }
  return context;
};

export const CategoryContextProvider = ({ children }) => {
  //const [categorias, setCategorias] = useState(1);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  const [mensaje, setMensaje] = useState('');
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
        setMensaje('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]); 
  

  //cargar Categories
  async function cargarCategories() {
    const respues = await getCategoriesRequest();
    setCategories(respues.data);
  }

  //eliminarCategories
  const deleteCategory = async (id) => {
    try {
      await deleteCategoryRequest(id);
      setCategories(categories.filter((category) => category.id !== id));
      //console.log("Category Deleted " + id);
      return null;
    } catch (error) {
      return "DB error ";
      // console.log("Delete Error");
    }
  };

  //createCategory
  const createCategory = async (category) => {
    try {
     await createCategoryRequest(category);
      setMensaje("Category -"+category.nombre+"-  created 👌");
      
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  //get one category
  const getCategory = async (id) => {
    try {
      const respon = await getCategoryRequest(id);
      return respon.data;
    } catch (error) {
      console.log(error);
    }
  };

  //update category
  const updateCategory = async (id, newFields) => {
    try {
      await updateCategoryRequest(id, newFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        cargarCategories,
        deleteCategory,
        createCategory,
        getCategory,
        updateCategory,
        errors,
        mensaje,
        
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
