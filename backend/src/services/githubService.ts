import axios, { AxiosInstance } from "axios";
import config from "../config/default";

class GithubService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: config.github.baseUrl,
    });
  }

  async searchRepositories(query: string): Promise<any> {
    const response = await this.api.get("/search/repositories", {
      params: { q: query, sort: "stars", order: "desc" },
    });
    return response.data;
  }
}

export default new GithubService();
