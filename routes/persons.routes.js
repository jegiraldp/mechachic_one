import { Router } from "express";
import {
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

export default router;
