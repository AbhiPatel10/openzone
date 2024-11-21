"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const github_1 = require("../controllers/github");
const router = (0, express_1.Router)();
router.get("/search", github_1.searchRepositoriesController);
exports.default = router;
