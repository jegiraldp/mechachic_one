import { Router } from "express";
import {
  getSchedules,
  getScheduling,
  newScheduling,
  updateScheduling,
  deleteScheduling,
} from "../controllers/schedules.controllers.js";

const router = Router();

router.get("/schedules", getSchedules);
router.get("/schedules/:id", getScheduling);
router.post("/schedules", newScheduling);
router.put("/schedules/:id", updateScheduling);
router.delete("/schedules/:id", deleteScheduling);

export default router;
