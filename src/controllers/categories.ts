import db from "@db/index";
import Category from "@models/Category";
import { Request, RequestHandler, Response } from "express";

const getCategories: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const categories: Category[] = (await db.query("SELECT * FROM categories"))
      .rows;
    res.send(categories).status(200);
  } catch {
    res.sendStatus(500);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getCategories };
