import { pool } from "../db.js";

export const getBoxes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from cajas order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getBox = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from cajas where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Box does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newBox = async (req, res) => {
  try {
    const { fechaApertura,fechaCierre,saldoInicial,saldoFinal,totalIngresos,totalEgresos } = req.body;
    const [result] = await pool.query(
      "insert into cajas (fechaApertura,fechaCierre,saldoInicial,saldoFinal,totalIngresos,totalEgresos) values (?,?,?,?,?,?)",
      [fechaApertura,fechaCierre,saldoInicial,saldoFinal,totalIngresos,totalEgresos]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateBox = async (req, res) => {
    try {
      const [result]=await pool.query("update cajas set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Box does not exists" });
      res.json("Box updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteBox = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from cajas where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Box does not exists" });
      res.json("Box deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
