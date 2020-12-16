import { Router } from "express";
import categories from "./categories";
import test from "./tests";

const routes = Router();

routes.use("/api/tests", test);
routes.use("/api/categories", categories);

export default routes;
