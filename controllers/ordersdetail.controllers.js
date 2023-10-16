import { pool } from "../db.js";

export const getOrdersDetail = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from detalleorden order by idOrden"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newOrderDetail = async (req, res) => {
  try {
    const { idOrden, idServicio } = req.body;
    const [result] = await pool.query(
      "insert into detalleorden (idOrden,idServicio) values (?,?)",
      [idOrden, idServicio]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteOrderDetail = async (req, res) => {
  try {
    const { idOrden, idServicio } = req.params;
    const [resultado] = await pool.query(
      "delete from detalleorden where idOrden = ? and idServicio = ?",
      [idOrden, idServicio]
    );
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Order detail does not exists" });
    res.json("Order detail deleted");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
