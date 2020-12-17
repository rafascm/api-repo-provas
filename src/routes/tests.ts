import { getAllTests, getTestsBySubject, postTest } from "@controllers/tests";
import { Router } from "express";

const router = Router();

router.get("/", getAllTests);
router.get("/:id", getTestsBySubject);
router.post("/", postTest);

export default router;
