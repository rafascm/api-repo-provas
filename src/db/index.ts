import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default db;
