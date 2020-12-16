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

// eslint-disable-next-line import/prefer-default-export
export { getAllTests };
