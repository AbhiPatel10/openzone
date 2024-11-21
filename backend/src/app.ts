import express from "express";
import githubRoutes from "./api/routes/github";
import routes from "./api/routes/index";
import { handleErrors } from "./utils/apiError";

const app = express();

app.use(express.json());
app.use("/api/github", githubRoutes);
app.use("/", routes); // Mount all routes
app.use(handleErrors);

export default app;
