import { pool } from "../db.js";

export const getSchedules = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from agendamientos order by fechaAtencion asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getScheduling= async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from agendamientos where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Scheduling does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newScheduling = async (req, res) => {
  try {
    const { fechaAgendamiento,fechaAtencion,horaAtencion,observaciones,idVehiculo } = req.body;
    const [result] = await pool.query(
      "insert into agendamientos (fechaAgendamiento,fechaAtencion,horaAtencion,observaciones,idVehiculo) values (?,?,?,?,?)",
      [fechaAgendamiento,fechaAtencion,horaAtencion,observaciones,idVehiculo]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateScheduling = async (req, res) => {
    try {
      const [result]=await pool.query("update agendamientos set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Scheduling does not exists" });
      res.json("Scheduling updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteScheduling = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from agendamientos where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Scheduling does not exists" });
      res.json("Scheduling deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
