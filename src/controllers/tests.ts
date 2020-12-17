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

const postTest: RequestHandler = async (req: Request, res: Response) => {
  const { name, idCategory, idProfessor, idSubject, url } = req.body;
  const valid = !!(name && url && idCategory && idProfessor && idSubject);

  if (!valid) res.sendStatus(422);
  else {
    try {
      const test = new Test(name, idCategory, idSubject, idProfessor, url);
      const query = `
        INSERT INTO tests
        (name, id_category, id_subject, id_professor, url)
        VALUES
        ($1, $2, $3, $4, $5)
      `;

      await db.query(query, [
        test.name,
        test.idCategory,
        test.idSubject,
        test.idProfessor,
        test.url,
      ]);
      res.sendStatus(201);
    } catch {
      res.sendStatus(500);
    }
  }
};

export { getAllTests, getTestsBySubject, postTest };
