import db from "@db/index";
import Professor from "@models/Professor";
import Subject from "@models/Subject";
import { Request, RequestHandler, Response } from "express";
import { getProfessorsArray } from "./professors";

const getSubject: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.sendStatus(422);
  else {
    try {
      const subject: Subject = (
        await db.query("SELECT * FROM subjects WHERE id = $1", [id])
      ).rows[0];

      const professors: Professor[] = await getProfessorsArray(id);

      res.send({ ...subject, professors }).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

const getSubjectsArray = async (id: string): Promise<Subject[]> => {
  try {
    const query = `
    SELECT s.id, s.name FROM subjects AS s
      JOIN subjects_professors AS sp ON sp.id_subject = s.id
      JOIN professors AS p ON sp.id_professor = p.id
      WHERE p.id = $1
  `;
    return (await db.query(query, [id])).rows;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    return [];
  }
};

export { getSubject, getSubjectsArray };
