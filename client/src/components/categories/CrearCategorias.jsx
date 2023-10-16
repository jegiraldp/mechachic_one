import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useCategory } from "../../context/CategoryProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";


function CategoriesForm() {
  const params = useParams();
  const navigate = useNavigate();
  const { createCategory, getCategory, updateCategory, cambiar } = useCategory();
  const [category, setCategory] = useState({
    nombre: "",
  });

  const onclick = () => {
    console.log("chamo")
    cambiar(1);
  };

  const titulo = () => {
    if (params.id) {
      return <Navbar />;
    }
  };

  const navig = () => {
    navigate("/categorias");
  };

  useEffect(() => {
    const loadCategory = async () => {
      if (params.id) {
        const category = await getCategory(params.id);
        setCategory({
          nombre: category.nombre,
        });
      }
    };
    loadCategory();
  }, []);

  return (
    <>
      {titulo()}
      <span onClick={params.id ? navig : onclick}>👈Back</span>
      <h3>{params.id ? "Edit Category" : "Create Category"}</h3>
      <Formik
        initialValues={category}
        validate={(values) => {
          let errores = {};
          if (!values.nombre) {
            errores.nombre = "⚠️ Write Category's name";
          }

          return errores;
        }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateCategory(params.id, values);
            navigate("/categorias");
          } else {
            await createCategory(values);
            onclick();
          }

          setCategory({
            nombre: "",
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isSubmitting,
          touched,
        }) => (
          <Form onSubmit={handleSubmit} width="500px">
            <label>Name</label>
            <input
              type="text"
              name="nombre"
              placeholder="Write Category's name"
              onChange={handleChange}
              value={values.nombre}
              onBlur={handleBlur}
            />

            <button type="submit" disabled={isSubmitting}>
              {params.id
                ? "Edit"
                : "Save" && isSubmitting
                ? "Saving..."
                : "Save"}
            </button>
            {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CategoriesForm;
