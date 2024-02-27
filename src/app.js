import "dotenv/config";

import Express, { json } from "express";
import allRouter from "./router/index.js";
import { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";

const app = Express();

connectDB();
console.log(process.env, "DB_HOST");
dbInit().then(() => console.log("db synced"));
app.use(json());
app.use(allRouter);

app.listen(3304, () => console.log("server started"));
