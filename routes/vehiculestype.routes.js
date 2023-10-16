import { Router } from "express";
import {
  getVehiculesType,
  getVehiculeType,
  newVehiculeType,
  updateVehiculeType,
  deleteVehiculeType,
} from "../controllers/vehiculestype.controllers.js";

const router = Router();

router.get("/vehiculestype", getVehiculesType);
router.get("/vehiculestype/:id", getVehiculeType);
router.post("/vehiculestype", newVehiculeType);
router.put("/vehiculestype/:id", updateVehiculeType);
router.delete("/vehiculestype/:id", deleteVehiculeType);

export default router;
