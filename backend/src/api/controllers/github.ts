import { Request, Response, NextFunction } from "express";
import { searchRepositories } from "../../services/githubService";

export const searchRepositoriesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { skills, experience, projectType, preferences } = req.body;

  // Validate input
  if (!skills || !experience || !projectType || !preferences) {
    res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Call service to fetch projects
    const projects = await searchRepositories({
      skills,
      experience,
      projectType,
      preferences,
    });

    res.status(200).json({ success: true, projects });
  } catch (err) {
    next(err);
  }
}