import { Router } from "express";
import { OrderController } from "../controllers";
const router = Router();
router.get("/orders", OrderController.getOrders);
export default router;