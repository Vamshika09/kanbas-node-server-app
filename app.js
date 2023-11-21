import express from "express";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
