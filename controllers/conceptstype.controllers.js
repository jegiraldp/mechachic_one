import { pool } from "../db.js";

export const getConceptsType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from tipoconcepto order by nombre asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getConceptType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from tipoconcepto where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Concept type does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newConceptType = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const [result] = await pool.query(
      "insert into tipoconcepto (nombre, descripcion) values (?,?)",
      [nombre, descripcion]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateConceptType = async (req, res) => {
    try {
      const [result]=await pool.query("update tipoconcepto set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Concept type does not exists" });
      res.json("Concept type updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteConceptType = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from tipoconcepto where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Concept type does not exists" });
      res.json("Concept type deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
