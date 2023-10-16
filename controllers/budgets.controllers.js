import { pool } from "../db.js";

export const getBudgets = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from presupuestos order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getBudget= async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from presupuestos where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Budget does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newBudget = async (req, res) => {
  try {
    const { fecha,valor,idVehiculo } = req.body;
    const [result] = await pool.query(
      "insert into presupuestos (fecha,valor,idVehiculo) values (?,?,?)",
      [fecha,valor,idVehiculo]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateBudget = async (req, res) => {
    try {
      const [result]=await pool.query("update presupuestos set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Budget does not exists" });
      res.json("Budget updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteBudget = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from presupuestos where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Budget does not exists" });
      res.json("Budget deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
