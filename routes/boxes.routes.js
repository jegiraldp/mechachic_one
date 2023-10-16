import { Router } from "express";
import {
  getBoxes,
  getBox,
  newBox,
  updateBox,
  deleteBox
} from "../controllers/boxes.controllers.js";

const router = Router();

router.get("/boxes", getBoxes);
router.get("/boxes/:id", getBox);
router.post("/boxes", newBox);
router.put("/boxes/:id",updateBox)
router.delete("/boxes/:id", deleteBox);

export default router;