"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    github: {
        baseUrl: "https://api.github.com",
        token: process.env.GITHUB_TOKEN || "your-default-token",
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
exports.default = config;
