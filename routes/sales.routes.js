import { Router } from "express";
import {
  getSales,
  getSale,
  newSale,
  updateSale,
  deleteSale
} from "../controllers/sales.controllers.js";

const router = Router();

router.get("/sales", getSales);
router.get("/sales/:id", getSale);
router.post("/sales", newSale);
router.put("/sales/:id",updateSale)
router.delete("/sales/:id", deleteSale);

export default router;