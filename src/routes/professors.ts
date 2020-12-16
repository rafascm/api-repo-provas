import {
  getProfessor,
  getProfessorsBySubjectID,
} from "@controllers/professors";
import { Router } from "express";

const router = Router();
router.get("/", getProfessor);
router.get("/subject-id", getProfessorsBySubjectID);

export default router;
