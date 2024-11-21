"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const github_1 = __importDefault(require("./api/routes/github"));
const index_1 = __importDefault(require("./api/routes/index"));
const apiError_1 = require("./utils/apiError");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/github", github_1.default);
app.use("/", index_1.default); // Mount all routes
app.use(apiError_1.handleErrors);
exports.default = app;
