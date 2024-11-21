"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const github_1 = __importDefault(require("./github"));
const router = (0, express_1.Router)();
// Home route
router.get("/", (req, res) => {
    res.send("Hello");
});
// Mount GitHub routes
router.use("/github", github_1.default);
exports.default = router;
