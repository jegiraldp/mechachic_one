import { Router } from "express";
import {
  getElements,
  getElement,
  getStockElement,
  updateStockElement,
  newElement,
  updateElement,
  deleteElement
} from "../controllers/elements.controllers.js";

const router = Router();

router.get("/elements", getElements);
router.get("/elements/:codigo", getElement);
router.post("/elements", newElement);
router.put("/elements/:codigo",updateElement)
router.delete("/elements/:codigo", deleteElement);
router.get("/elements/stock/:codigo", getStockElement);
router.put("/elements/stock/:codigo/:stock", updateStockElement);

export default router;