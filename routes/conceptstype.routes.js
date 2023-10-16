import { Router } from "express";
import {
  getConceptsType,
  getConceptType,
  newConceptType,
  updateConceptType,
  deleteConceptType,
} from "../controllers/conceptstype.controllers.js";

const router = Router();

router.get("/conceptstype", getConceptsType);
router.get("/conceptstype/:id", getConceptType);
router.post("/conceptstype", newConceptType);
router.put("/conceptstype/:id", updateConceptType);
router.delete("/conceptstype/:id", deleteConceptType);

export default router;
