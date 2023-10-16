import { Router } from "express";
import {
  getRepairOrders,
  getRepairOrder,
  newRepairOrder,
  updateRepairOrder,
  deleteRepairOrder
} from "../controllers/repairsorder.controllers.js";

const router = Router();

router.get("/repairsorder", getRepairOrders);
router.get("/repairorderss/:id", getRepairOrder);
router.post("/repairorderss", newRepairOrder);
router.put("/repairorderss/:id",updateRepairOrder)
router.delete("/repairorderss/:id", deleteRepairOrder);

export default router;