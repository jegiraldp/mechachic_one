import TablaCategorias from "../../components/categories/TablaCategorias.jsx";
import { useCategory } from "../../context/CategoryProvider.jsx";
import Navbar from "../../components/Navbar";
import "../../css/Categorias.css";

function Categorias() {
  const { categories } = useCategory();
 
  return (
    <>
      <Navbar />
      {categories.length > 0 ? <TablaCategorias /> : <TablaCategorias />}
    </>
  );
}

export default Categorias;
