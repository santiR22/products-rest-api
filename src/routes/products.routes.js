import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller";
import { authjwt } from "../middlewares";

const router = Router();

router.post("/", [authjwt.verifyToken, authjwt.isModerator], createProduct);
router.get("/", getProducts);
router.get("/:productId", getProductById);
router.put(
  "/:productId",
  [authjwt.verifyToken, authjwt.isAdmin],
  updateProduct
);
router.delete(
  "/:productId",
  [authjwt.verifyToken, authjwt.isAdmin],
  deleteProduct
);

export default router;
