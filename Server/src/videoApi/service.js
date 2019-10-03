"use strict";
const repo = require('./repo');

class VideoService {
    async getVideos(params) {
        return await repo.getVideos(params).then(data => {
            return data;
        });
    }
    async searchVideos(params) {
        return await repo.searchVideos(params).then(data => {
            return data;
        });
    }
}

module.exports = new VideoService();