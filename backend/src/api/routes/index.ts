import { Router } from "express";
import githubRoutes from "./github";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
