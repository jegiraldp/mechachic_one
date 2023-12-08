import { pool } from "../db.js";

export const getPersons = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas order by id asc");
    res.json(result);
  } catch (error) {
    return res.status(400).json(["Error ⚠️"]);

  }
};


/////////////////CUSTOMERS////////////////////////////////////////////
export const getCustomers = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas where isCustomer=1 order by id asc");
    res.json(result);
  } catch (error) {
    //return res.status(500).json({ mensaje: error.message });
    return res.status(400).json(["Error ⚠️"]);

  }
};

export const newCustomer = async (req, res) => {
  
    try {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      address,
      isProvider,
      isCustomer,
      isEmployed,
      isNatural,
      isEmpresa,
    } = req.body;

    const [result] = await pool.query(
      "insert into personas (id,firstName,lastName,email,phone,address,isProvider,isCustomer,isEmployed,isNatural,isEmpresa) values (?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        firstName,
        lastName,
        email,
        phone,
        address,
        isProvider,
        isCustomer,
        isEmployed,
        isNatural,
        isEmpresa,
      ]
    );

    res.json(result);
  } catch (error) {
    return res.status(400).json(["Customer´s ID already exists ⚠️"]);
    //return res.status(400).json({ mensaje: error.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas where id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Customer does not exists" });
    res.json(result[0]);
  } catch (error) {
    //return res.status(500).json({ mensaje: error.message });
    return res.status(400).json(["Error ⚠️"]);

  }
};




export const updateCustomer = async (req, res) => {
  try {
    const [result] = await pool.query("update personas set ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Provider does not exists" });
    res.json("Provider updated");
  } catch (error) {
   // return res.status(500).json({ mensaje: error.message });
   return res.status(400).json(["Error ⚠️"]);
  }
};


export const deleteCustomer= async (req, res) => {
  try {
    const [resultado] = await pool.query("delete from personas where id = ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Provider does not exists" });
    res.json("Provider deleted");
  } catch (error) {
    return res.status(400).json(["Error ⚠️"]);
  }
};
/////////////////PROVIDERS
export const getProviders = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas where isProvider=1 order by id asc");
    res.json(result);
  } catch (error) {
    //return res.status(500).json({ mensaje: error.message });
    return res.status(400).json(["Error ⚠️"]);

  }
};

export const newProvider = async (req, res) => {
  
    try {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      address,
      isProvider,
      isCustomer,
      isEmployed,
      isNatural,
      isEmpresa,
    } = req.body;

    const [result] = await pool.query(
      "insert into personas (id,firstName,lastName,email,phone,address,isProvider,isCustomer,isEmployed,isNatural,isEmpresa) values (?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        firstName,
        lastName,
        email,
        phone,
        address,
        isProvider,
        isCustomer,
        isEmployed,
        isNatural,
        isEmpresa,
      ]
    );

    res.json(result);
  } catch (error) {
    return res.status(400).json(["Provider´s ID already exists ⚠️"]);
    //return res.status(400).json({ mensaje: error.message });
  }
};

export const getProvider = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas where id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Provider does not exists" });
    res.json(result[0]);
  } catch (error) {
    //return res.status(500).json({ mensaje: error.message });
    return res.status(400).json(["Error ⚠️"]);

  }
};




export const updateProvider = async (req, res) => {
  try {
    const [result] = await pool.query("update personas set ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Provider does not exists" });
    res.json("Provider updated");
  } catch (error) {
   // return res.status(500).json({ mensaje: error.message });
   return res.status(400).json(["Error ⚠️"]);
  }
};


export const deleteProvider = async (req, res) => {
  try {
    const [resultado] = await pool.query("delete from personas where id = ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Provider does not exists" });
    res.json("Provider deleted");
  } catch (error) {
    return res.status(400).json(["Error ⚠️"]);
  }
};


//////Person///////////////////////////////////////////////
export const newPerson = async (req, res) => {
  try {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      address,
      isProvider,
      isCustomer,
      isEmployed,
      isNatural,
      isEmpresa,
    } = req.body;
    const [result] = await pool.query(
      "insert into personas (id,firstName,lastName,email,phone,address,isProvider,isCustomer,isEmployed,isNatural,isEmpresa) values (?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        firstName,
        lastName,
        email,
        phone,
        address,
        isProvider,
        isCustomer,
        isEmployed,
        isNatural,
        isEmpresa,
      ]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getPerson = async (req, res) => {
  try {
    const [result] = await pool.query("select * from personas where id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Person does not exists" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updatePerson = async (req, res) => {
  try {
    const [result] = await pool.query("update personas set ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Person does not exists" });
    res.json("Person updated");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });

  }
};

export const deletePerson = async (req, res) => {
  try {
    const [resultado] = await pool.query("delete from personas where id = ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "Person does not exists" });
    res.json("Person deleted");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
