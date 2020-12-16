import { getSubject, getSubjectsByProfessorID } from "@controllers/subjects";
import { Router } from "express";

const router = Router();

router.get("/", getSubject);
router.get("/professor-id", getSubjectsByProfessorID);

export default router;
