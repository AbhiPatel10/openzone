import { Router } from "express";
import { searchRepositoriesController } from "../controllers/github";

const router = Router();

router.get("/search", searchRepositoriesController);

export default router;
