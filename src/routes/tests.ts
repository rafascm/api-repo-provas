import { getAllTests } from "@controllers/tests";
import { Router } from "express";

const router = Router();

router.get("/", getAllTests);

export default router;
