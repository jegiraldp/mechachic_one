import { pool } from "../db.js";

export const getSalesDetail = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from detalleventa order by idVenta"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newSaleDetail = async (req, res) => {
  try {
    const { idVenta,idElemento } = req.body;
    const [result] = await pool.query(
      "insert into detalleventa (idVenta,idElemento) values (?,?)",
      [idVenta,idElemento]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteSaleDetail = async (req, res) => {
  try {
    const { idVenta,idElemento } = req.params;
    const [resultado] = await pool.query(
      "delete from detalleventa where idVenta = ? and idElemento = ?",
      [idVenta,idElemento]
    );
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Sale detail does not exists" });
    res.json("Sale detail deleted");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
