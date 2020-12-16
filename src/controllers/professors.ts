import db from "@db/index";
import Professor from "@models/Professor";

import { Request, RequestHandler, Response } from "express";

const getProfessor: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) res.sendStatus(422);
  else {
    try {
      const professor: Professor = (
        await db.query("SELECT * FROM professors WHERE id = $1", [id])
      ).rows[0];

      res.send(professor).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

const getProfessorsBySubjectID: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  if (!id) res.sendStatus(422);
  else {
    try {
      const query = `
      SELECT p.id, p.name FROM professors AS p
      JOIN subjects_professors AS sp ON sp.id_professor = p.id
      JOIN subjects AS s ON sp.id_subject = s.id
      WHERE s.id = $1
    `;

      const subjects: Professor[] = (await db.query(query, [id])).rows;
      res.send(subjects).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getProfessor, getProfessorsBySubjectID };
