import { getCategories } from "@controllers/categories";
import { Router } from "express";

const router = Router();

router.get("/", getCategories);

export default router;
