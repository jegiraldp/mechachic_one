import { pool } from "../db.js";

export const getConcepts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from conceptos order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getConcept = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from conceptos where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Concept does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newConcept = async (req, res) => {
  try {
    const { fecha,valor,descripcion,idTipo,idNomina } = req.body;
    const [result] = await pool.query(
      "insert into conceptos (fecha,valor,descripcion,idTipo,idNomina) values (?,?,?,?,?)",
      [fecha,valor,descripcion,idTipo,idNomina]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateConcept = async (req, res) => {
    try {
      const [result]=await pool.query("update conceptos set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Concept does not exists" });
      res.json("Concept updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteConcept = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from conceptos where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Concept does not exists" });
      res.json("Concept deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
