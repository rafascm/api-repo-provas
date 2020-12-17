import { getAllTests, postTest } from "@controllers/tests";
import { Router } from "express";

const router = Router();

router.get("/", getAllTests);
router.post("/", postTest);

export default router;
