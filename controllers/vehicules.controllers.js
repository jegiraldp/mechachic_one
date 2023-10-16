import { pool } from "../db.js";

export const getVehicules = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from vehiculos order by vinNumber asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getVehicule= async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from vehiculos where vinNumber = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Vehicule does not exists..." });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newVehicule = async (req, res) => {
  try {
    const { vinNumber,marca,linea,modelo,color,idTipo } = req.body;
    const [result] = await pool.query(
      "insert into vehiculos (vinNumber,marca,linea,modelo,color,idTipo) values (?,?,?,?,?,?)",
      [vinNumber,marca,linea,modelo,color,idTipo]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateVehicule = async (req, res) => {
    try {
      const [result]=await pool.query("update vehiculos set ? where vinNumber = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Vehicule does not exists" });
      res.json("Vehicule updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteVehicule = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from vehiculos where vinNumber = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Vehicule does not exists" });
      res.json("Vehicule deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
