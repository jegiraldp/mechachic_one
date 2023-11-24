import { Router } from "express";
import {
  getProviders,
  newProvider,
  getPersons,
  getPerson,
  newPerson,
  updatePerson,
  deletePerson,
} from "../controllers/persons.controllers.js";

const router = Router();

router.get("/persons", getPersons);
router.get("/persons/:id", getPerson);
router.post("/persons", newPerson);
router.put("/persons/:id", updatePerson);
router.delete("/persons/:id", deletePerson);

router.get("/providers", getProviders);
router.post("/providers", newProvider);


export default router;
