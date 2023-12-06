import { Router } from "express";
import {
  getProviders,
  getProvider,
  newProvider,
  updateProvider,
  deleteProvider,
  getPersons,
  getPerson,
  newPerson,
  updatePerson,
  deletePerson,
  getCustomers,
  getCustomer,
  newCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/persons.controllers.js";

const router = Router();

router.get("/persons", getPersons);
router.get("/persons/:id", getPerson);
router.post("/persons", newPerson);
router.put("/persons/:id", updatePerson);
router.delete("/persons/:id", deletePerson);

router.get("/providers", getProviders);
router.post("/providers", newProvider);
router.get("/providers/:id", getProvider);
router.put("/providers/:id", updateProvider);
router.delete("/providers/:id", deleteProvider);

router.get("/customers", getCustomers);
router.post("/customers", newCustomer);
router.get("/customers/:id", getCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);






export default router;
