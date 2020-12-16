import { Router } from "express";
import categories from "./categories";
import subjects from "./subjects";
import professors from "./professors";
import test from "./tests";

const routes = Router();

routes.use("/api/tests", test);
routes.use("/api/categories", categories);
routes.use("/api/subjects", subjects);
routes.use("/api/professors", professors);

export default routes;
