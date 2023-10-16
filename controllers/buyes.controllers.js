import { pool } from "../db.js";

export const getBuyes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from compras order by id asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getBuy = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from compras where id = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Buy does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newBuy = async (req, res) => {
  try {
    const { valorTotal,descripcion,idEmpleado,idProveedor,idCaja } = req.body;
    const [result] = await pool.query(
      "insert into compras (valorTotal,descripcion,idEmpleado,idProveedor,idCaja) values (?,?,?,?,?)",
      [valorTotal,descripcion,idEmpleado,idProveedor,idCaja]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateBuy = async (req, res) => {
    try {
      const [result]=await pool.query("update compras set ? where id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0)
        return res.status(404).json({ mensaje: "Buy does not exists" });
      res.json("Buy updated");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };

  export const deleteBuy = async (req, res) => {
    try {
      const [resultado] = await pool.query("delete from compras where id = ?", [
        req.params.id,
      ]);
      if (resultado.affectedRows === 0)
        return res.status(404).json({ mensaje: "Buy does not exists" });
      res.json("Buy deleted");
    } catch (error) {
      return res.status(500).json({ mensaje: error.message });
    }
  };
