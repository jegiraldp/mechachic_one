import { pool } from "../db.js";

export const getVehiculesType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from tipovehiculo order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getVehiculeType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from tipovehiculo where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Vehicule Type does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newVehiculeType = async (req, res) => {
  try {
    const { nombre } = req.body;
    const [result] = await pool.query(
      "insert into tipovehiculo (nombre) values (?)",
      [nombre]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateVehiculeType = async (req, res) => {
    try {
      const [result]=await pool.query("update tipovehiculo set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Vehicule Type does not exists" });
      res.json("Vehicule Type updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteVehiculeType = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from tipovehiculo where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Vehicule Type does not exists" });
      res.json("Vehicule Type deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
