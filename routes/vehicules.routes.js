import { Router } from "express";
import {
  getVehicules,
  getVehicule,
  newVehicule,
  updateVehicule,
  deleteVehicule,
} from "../controllers/vehicules.controllers.js";

const router = Router();

router.get("/vehicules", getVehicules);
router.get("/vehicules/:id", getVehicule);
router.post("/vehicules", newVehicule);
router.put("/vehicules/:id", updateVehicule);
router.delete("/vehicules/:id", deleteVehicule);

export default router;
