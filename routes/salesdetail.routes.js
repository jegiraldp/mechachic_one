import { Router } from "express";
import {
  getSalesDetail,
  newSaleDetail,
  deleteSaleDetail
} from "../controllers/salesdetail.controllers.js";

const router = Router();

router.get("/salesdetail", getSalesDetail);
router.post("/salesdetail", newSaleDetail);
router.delete("/salesdetail/:idVenta/:idElemento", deleteSaleDetail);

export default router;