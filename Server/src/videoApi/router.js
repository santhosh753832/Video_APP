"use strict"
const express = require('express');
const router = express.Router();
const service = require('./service');

router.get("/getVideoList", async (req, res) => {
    try {
        let resp = await service.getVideos(req.query);
        res.send(resp);
    } catch (err) {
        res.status(500).send({error: err});
    }
});
router.get("/searchVideo", async (req, res) => {
    try {
        let resp = await service.searchVideos(req.query);
        res.send(resp);
    } catch (err) {
        res.status(500).send({error: err});
    }
});

module.exports = router;