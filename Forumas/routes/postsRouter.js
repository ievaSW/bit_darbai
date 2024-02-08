const express = require('express');
const router = express.Router();
const CommentModel = require("../models/comment");

router.get('/', async (req, res) => {
    const comments = await CommentModel.find({});
    res.status(200).json(comments);
});
// pagal name backendas gauna duomenis kreipiantis 