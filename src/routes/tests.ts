import { getAllTests } from "@controllers/tests";
import { Router } from "express";

const test = Router();

test.get("/", getAllTests);

export default test;
