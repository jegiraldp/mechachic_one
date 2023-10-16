import { pool } from "../db.js";

export const getServices = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from servicios order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getService = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from servicios where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Service does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newService = async (req, res) => {
  try {
    const { id, nombre,descripcion,valor } = req.body;
    const [result] = await pool.query(
      "insert into servicios (id,nombre,descripcion,valor) values (?,?,?,?)",
      [id, nombre,descripcion,valor]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateService = async (req, res) => {
    try {
      const [result]=await pool.query("update servicios set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Service does not exists" });
      res.json("Service updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteService = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from servicios where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Service does not exists" });
      res.json("Service deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
