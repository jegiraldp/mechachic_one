import { Router } from "express";
import {
  getCategories,
  getCategory,
  newCategory,
  updateCategory,
  deleteCategory
} from "../controllers/categories.controllers.js";

const router = Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", newCategory);
router.put("/categories/:id",updateCategory)
router.delete("/categories/:id", deleteCategory);

export default router;
