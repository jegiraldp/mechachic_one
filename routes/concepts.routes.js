import { Router } from "express";
import {
  getConcepts,
  getConcept,
  newConcept,
  updateConcept,
  deleteConcept,
} from "../controllers/concepts.controllers.js";

const router = Router();

router.get("/concepts", getConcepts);
router.get("/concepts/:id", getConcept);
router.post("/concepts", newConcept);
router.put("/concepts/:id", updateConcept);
router.delete("/concepts/:id", deleteConcept);

export default router;
