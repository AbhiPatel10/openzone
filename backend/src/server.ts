import app from "./app";
import config from "./config/default";
import logger from "./utils/logger";

const PORT = 8080;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
