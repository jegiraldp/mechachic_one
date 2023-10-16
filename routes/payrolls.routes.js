import { Router } from "express";
import {
  getPayrolls,
  getPayroll,
  newPayroll,
  updatePayroll,
  deletePayroll,
} from "../controllers/payrolls.controllers.js";

const router = Router();

router.get("/payrolls", getPayrolls);
router.get("/payrolls/:id", getPayroll);
router.post("/payrolls", newPayroll);
router.put("/payrolls/:id", updatePayroll);
router.delete("/payrolls/:id", deletePayroll);

export default router;
