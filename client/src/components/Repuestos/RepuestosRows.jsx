import React, { useEffect, useState } from "react";
import { useElement } from "../../context/RepuestosProvider";
import { useCategory } from "../../context/CategoryProvider";
import { useNavigate } from "react-router-dom";

function RepuestosRows() {
  const { categories, cargarCategories } = useCategory();
  const { elements, cargarElements, deleteElement, cambiar } = useElement();
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    cargarElements();
    cargarCategories();
  }, []);

  const onclick = () => {
    cambiar(3);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.nombre : "N/A";
  };
  return (
    <>
      {elements.map((ele) => (
        <tr key={ele.id}>
          <td>{ele.codigo}</td>
          <td>{ele.nombre}</td>
          <td>{ele.descripcion}</td>
          <td>{getCategoryName(ele.idCategoria)}</td>
          <td className="opciones">
            <span className="opciones" onClick={() => navigate(`/repuestos/${ele.id}`, onclick)}>
              ✏️
            </span>
          </td>
          <td className="opciones">
            <span 
              onClick={async () => {
                const resul = await deleteElement(ele.id);
                if (resul) {
                  setMensaje(resul);
                }
              }}
            >
              ❌
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default RepuestosRows;
