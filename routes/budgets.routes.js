import { Router } from "express";
import {
  getBudgets,
  getBudget,
  newBudget,
  updateBudget,
  deleteBudget,
} from "../controllers/budgets.controllers.js";

const router = Router();

router.get("/budgets", getBudgets);
router.get("/budgets/:id", getBudget);
router.post("/budgets", newBudget);
router.put("/budgets/:id", updateBudget);
router.delete("/budgets/:id", deleteBudget);

export default router;
