import { Router } from "express";
import test from "./tests";

const routes = Router();

routes.use("/api/tests", test);

export default routes;
