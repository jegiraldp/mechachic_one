import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategoryProvider";

function CategoriasRows() {
  const {
    categories,
    cargarCategories,
    deleteCategory,
    errors: categoriesError,
    
  } = useCategory();
  const [elId, setElId] = useState(0);
  const [nombreCategoria, setNombreCategoria] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    cargarCategories();
  }, []);

  const borrarTarea = async (id, nc) => {
    setElId(id);
    const confirmacion = window.confirm(
      "Are you sure you want to delete : " + nc
    );

    if (confirmacion) {
      const resul = await deleteCategory(id);
    }
  };

  return (
    <>
      {categories.map((cate) => (
        <tr key={cate.id}>
          <td>{cate.nombre}</td>
          <td className="opciones">
            <span
              className="imgOpcion"
              onClick={() => navigate(`/categorias/edit/${cate.id}`)}
            >
              ✏️
            </span>
          </td>
          <td className="opciones">
            <span
              className="imgOpcion"
              onClick={() => {
                setNombreCategoria(cate.nombre);
                borrarTarea(cate.id, cate.nombre);
              }}
            >
              ❌{elId==cate.id && categoriesError.map((e, i) => (
              <div className="errorCategory">{e}</div>
            ))}
            </span>
            
          </td>
        </tr>
      ))}
    </>
  );
}

export default CategoriasRows;
