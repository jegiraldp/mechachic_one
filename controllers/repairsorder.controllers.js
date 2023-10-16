import { pool } from "../db.js";

export const getRepairOrders = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from ordenreparacion order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getRepairOrder = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from ordenreparacion where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Repair order does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newRepairOrder = async (req, res) => {
  try {
    const { fecha,fechaInicio, fechaEstimada, idVehiculo } = req.body;
    const [result] = await pool.query(
      "insert into ordenreparacion (fecha,fechaInicio, fechaEstimada, idVehiculo) values (?,?,?,?)",
      [fecha,fechaInicio, fechaEstimada, idVehiculo]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateRepairOrder = async (req, res) => {
    try {
      const [result]=await pool.query("update ordenreparacion set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "RepairOrder does not exists" });
      res.json("Repair Order updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteRepairOrder = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from ordenreparacion where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Repair Order does not exists" });
      res.json("Repair Order deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
