import { Request, Response, Router } from "express";

const categories = Router();

categories.get("/", async (req: Request, res: Response) => {
  res.send("categories").status(200);
});

export default categories;
