import { pool } from "../db.js";

export const getPayrolls = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from nominas order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getPayroll = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from nominas where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Payroll does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newPayroll = async (req, res) => {
  try {
    const { fecha, comentarios } = req.body;
    const [result] = await pool.query(
      "insert into nominas (fecha, comentarios) values (?,?)",
      [fecha, comentarios]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updatePayroll = async (req, res) => {
    try {
      const [result]=await pool.query("update nominas set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Payroll does not exists" });
      res.json("Payroll updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deletePayroll = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from nominas where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Payroll does not exists" });
      res.json("Payroll deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
