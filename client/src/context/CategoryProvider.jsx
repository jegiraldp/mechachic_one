import { useContext, useState, createContext } from "react";
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
      //setCategories([...categories, respon.data]);
    } catch (error) {
      console.log(error);
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

  /*const cambiar = (num) => {
    console.log("hola categoria")
    setCategories(num);
  };*/

  return (
    <CategoryContext.Provider
      value={{
        categories,
        cargarCategories,
        deleteCategory,
        createCategory,
        getCategory,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
