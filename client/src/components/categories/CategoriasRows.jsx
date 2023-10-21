import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategoryProvider";

function CategoriasRows() {
  const { categories, cargarCategories, deleteCategory, cambiar } =
    useCategory();
  const [elId, setElId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    cargarCategories();
  }, []);

  
  return (
    <>
      {categories.map((cate) => (
        <tr key={cate.id}>
          <td>{cate.nombre}</td>
          <td className="opciones">
         
            <span onClick={() => navigate(`/categorias/edit/${cate.id}`)}>
              ✏️
            </span>
          </td>
          <td className="opciones">
            <span
              onClick={async () => {
                setElId(0);
                const resul = await deleteCategory(cate.id);
                if (resul) {
                  setMensaje(resul);
                  setElId(cate.id);
                }
              }}
            >
              ❌
            </span>
            {elId == cate.id && <span>{mensaje}⚠️</span>}
          </td>
        </tr>
      ))}
    </>
  );
}

export default CategoriasRows;
