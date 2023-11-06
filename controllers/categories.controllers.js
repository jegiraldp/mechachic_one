import { pool } from "../db.js";

export const getCategories = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from categorias order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const [result] = await pool.query("select * from categorias where id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Category does not exists" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newCategory = async (req, res) => {
  try {
    
    const { nombre } = req.body;
    const [categoria] = await pool.query(
      "select * from categorias where nombre = ?",
      [nombre]
    );

    if (categoria.length > 0)
      return res.status(400).json(["Categorie´s name already exists ⚠️"]);

    const [result] = await pool.query(
      "insert into categorias (nombre) values (?)",
      [nombre]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    /*const [categoria] = await pool.query(
      "select * from categorias where nombre = ?",
      [nombre]
    );

    if (categoria.length > 0)
      return res.status(400).json(["Categorie´s name already exists ⚠️"]);*/

    const [result] = await pool.query("update categorias set ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(500).json({ mensaje: "Category does not exists" });

    res.json("Category updated..✔️");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "delete from categorias where id = ?",
      [req.params.id]
    );
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Category does not exists" });
   
    res.json("Category deleted ..✔️");
  } catch (error) {
    return res.status(500).json(["Database Error"]);
  }
};
