import db from "@db/index";
import Test from "@models/Test";
import { Request, RequestHandler, Response } from "express";

const getAllTests: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const tests: Test[] = (await db.query("SELECT * FROM tests")).rows;
    res.send(tests).status(200);
  } catch {
    res.sendStatus(500);
  }
};

const getTestsBySubject: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  if (!id) res.sendStatus(422);
  else {
    try {
      const query = `
      SELECT t.name, t.url, c.name AS category, p.name AS professor
      FROM tests AS t
      JOIN categories AS c ON t.id_category = c.id
      JOIN professors AS p ON t.id_professor = p.id
      WHERE id_subject = $1;
    `;

      const tests: Test[] = (await db.query(query, [id])).rows;
      res.send(tests).status(200);
    } catch {
      res.sendStatus(500);
    }
  }
};

const postTest: RequestHandler = async (_req: Request, res: Response) => {
  res.send("post").status(201);
};

// eslint-disable-next-line import/prefer-default-export
export { getAllTests, getTestsBySubject, postTest };
