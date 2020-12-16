import db from "@db/index";
import Subject from "@models/Subject";

import { Request, RequestHandler, Response } from "express";

const getSubject: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) res.sendStatus(422);
  else {
    try {
      const subject: Subject = (
        await db.query("SELECT * FROM subjects WHERE id = $1", [id])
      ).rows[0];

      res.send(subject).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

const getSubjectsByProfessorID: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  if (!id) res.sendStatus(422);
  else {
    try {
      const query = `
      SELECT s.id, s.name FROM subjects AS s
      JOIN subjects_professors AS sp ON sp.id_subject = s.id
      JOIN professors AS p ON sp.id_professor = p.id
      WHERE p.id = $1
    `;

      const subjects: Subject[] = (await db.query(query, [id])).rows;
      res.send(subjects).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getSubject, getSubjectsByProfessorID };
