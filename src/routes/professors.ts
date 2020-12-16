import { getProfessor } from "@controllers/professors";
import { Router } from "express";

const router = Router();

router.get("/", getProfessor);

export default router;
