import { Router } from "express";
import { searchRepositoriesController } from "../controllers/github";

const router = Router();

router.post("/search", searchRepositoriesController);

export default router;
