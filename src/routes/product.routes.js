import { Router } from "express";
import { getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const router = Router();

router.get("/Products", getProduct);
router.post("/Products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;