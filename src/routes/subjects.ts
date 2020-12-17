import { getSubject } from "@controllers/subjects";
import { Router } from "express";

const router = Router();

router.get("/:id", getSubject);

export default router;
