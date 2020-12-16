import { Request, Response, Router } from "express";

const test = Router();

test.get("/", async (req: Request, res: Response) => {
  res.send("halloo").status(200);
});

export default test;
