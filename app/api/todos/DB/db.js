// db.js
import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "12345",
    host: "127.0.0.1",
    port: 5432,
    database: "BD-Novedades",
  });
}

export default conn ;