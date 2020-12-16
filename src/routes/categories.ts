import { getCategories } from "@controllers/categories";
import { Router } from "express";

const categories = Router();

categories.get("/", getCategories);

export default categories;
