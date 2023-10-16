import { Router } from "express";
import {
  getServices,
  getService,
  newService,
  updateService,
  deleteService
} from "../controllers/services.controllers.js";

const router = Router();

router.get("/services", getServices);
router.get("/services/:id", getService);
router.post("/services", newService);
router.put("/services/:id",updateService)
router.delete("/services/:id", deleteService);

export default router;