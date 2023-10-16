import { pool } from "../db.js";

export const getSales = async (req, res) => {
  try {
    const [result] = await pool.query("select * from ventas order by id asc");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getSale = async (req, res) => {
  try {
    const [result] = await pool.query("select * from ventas where id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Sale does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newSale = async (req, res) => {
  try {
    const {
      fecha,
      idOrden,
      idCliente,
      idEmpleado,
      valorTotal,
      descuento,
      idCaja,
    } = req.body;
    const [result] = await pool.query(
      "insert into ventas (fecha,idOrden,idCliente,idEmpleado,valorTotal,descuento,idCaja) values (?,?,?,?,?,?,?)",
      [fecha, idOrden, idCliente, idEmpleado, valorTotal, descuento, idCaja]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateSale = async (req, res) => {
  try {
    const [result] = await pool.query("update ventas set ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Sale does not exists" });
    res.json("Sale updated");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const [resultado] = await pool.query("delete from ventas where id = ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Sale does not exists" });
    res.json("Sale deleted");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
