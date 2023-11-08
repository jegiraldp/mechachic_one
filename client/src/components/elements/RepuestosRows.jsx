import React, { useEffect, useState } from "react";
import { useElement } from "../../context/ElementProvider";
import { useCategory } from "../../context/CategoryProvider";
import { useNavigate } from "react-router-dom";

function RepuestosRows() {
  const { categories,cargarCategories } = useCategory();
  const { elements, getElements, deleteElement } = useElement();
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const [elId, setElId] = useState(0);

  useEffect(() => {
    getElements();
    cargarCategories();
  }, []);

  const borrarElemento=async(id)=>{
    setElId(id);
    const confirma= window.confirm("Are you sure you want to delete ??")
    if(confirma){
      deleteElement(id)
    }
  }

  const letraCapital=(nn)=>{
    return nn.charAt(0).toUpperCase() + nn.slice(1).toLowerCase();
  }

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.nombre : "N/A";
  };
  return (
    <>
      {elements.map((ele) => (
        <tr key={ele.id}>
          <td>{ele.codigo}</td>
          <td>{letraCapital(ele.nombre)}</td>
          <td>{letraCapital(ele.descripcion)}</td>
          <td>{letraCapital(getCategoryName(ele.idCategoria))}</td>
          <td>{ele.stock}</td>
          <td>{ele.valorUnitario}</td>
          <td className="opciones">
         
            <span className="opciones" onClick={() => navigate(`/repuestos/edit/${ele.id}`)}>
              ✏️
            </span>
          </td>
          <td className="opciones">
            <span 
              onClick={async () => {
                await borrarElemento(ele.id);
              
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
