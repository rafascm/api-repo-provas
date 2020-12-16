import db from "@db/index";
import Professor from "@models/Professor";
import Subject from "@models/Subject";
import { Request, RequestHandler, Response } from "express";
import { getSubjectsArray } from "./subjects";

const getProfessor: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) res.sendStatus(422);
  else {
    try {
      const professor: Professor = (
        await db.query("SELECT * FROM professors WHERE id = $1", [id])
      ).rows[0];

      const subjects: Subject[] = await getSubjectsArray(id);
      res.send({ ...professor, subjects }).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

const getProfessorsArray = async (id: number): Promise<Professor[]> => {
  try {
    const query = `
    SELECT p.id, p.name FROM professors AS p
    JOIN subjects_professors AS sp ON sp.id_professor = p.id
    JOIN subjects AS s ON sp.id_subject = s.id
    WHERE s.id = $1
  `;
    return (await db.query(query, [id])).rows;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    return [];
  }
};
// eslint-disable-next-line import/prefer-default-export
export { getProfessor, getProfessorsArray };
