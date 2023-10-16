import { Router } from "express";
import {
  getBuyes,
  getBuy,
  newBuy,
  updateBuy,
  deleteBuy
} from "../controllers/buyes.controllers.js";

const router = Router();

router.get("/buyes", getBuyes);
router.get("/buyes/:id", getBuy);
router.post("/buyes", newBuy);
router.put("/buyes/:id",updateBuy)
router.delete("/buyes/:id", deleteBuy);

export default router;