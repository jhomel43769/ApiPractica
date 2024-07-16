import { Router } from "express";

const router = Router();

router.get("/Products", getproucts);
router.post("/Products", creatProducts);
router.put("products/:id", updateProducts);
router.delete("products/:id", deleteProducts);

export default router;