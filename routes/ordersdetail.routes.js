import { Router } from "express";
import {
  getOrdersDetail,
  newOrderDetail,
  deleteOrderDetail
} from "../controllers/ordersdetail.controllers.js";

const router = Router();

router.get("/ordersdetail", getOrdersDetail);
router.post("/ordersdetail", newOrderDetail);
router.delete("/ordersdetail/:idOrden/:idServicio", deleteOrderDetail);

export default router;