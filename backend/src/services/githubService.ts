import axios, { AxiosInstance } from "axios";
import config from "../config/default";

const api: AxiosInstance = axios.create({
  baseURL: config.github.baseUrl,
});

interface Props {
  skills: string;
  experience: string;
  projectType: string;
  preferences: string;
}

export const searchRepositories = async ({skills, experience, projectType, preferences }: Props): Promise<any> => {
  try {
    const query = `${skills} ${projectType} in:description`;
    
    const response = await api.get("/search/repositories", {
      params: { q: query, sort: "stars", order: "desc" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};