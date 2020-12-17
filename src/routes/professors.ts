import { getProfessor } from "@controllers/professors";
import { Router } from "express";

const router = Router();

router.get("/:id", getProfessor);

export default router;
