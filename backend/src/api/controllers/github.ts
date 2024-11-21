import { Request, Response, NextFunction } from "express";
import githubService from "../../services/githubService";

export const searchRepositoriesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const query = req.query.q as string;
    if (!query) {
      res.status(400).json({ error: "Query parameter 'q' is required" });
      return;
    }
    const data = await githubService.searchRepositories(query);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
