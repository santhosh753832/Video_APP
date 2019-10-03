"use strict";
const BaseRepo = require('../DB/baseRepo');

class Repo extends BaseRepo {
    constructor() {
        super();
        this.query = {
            getVideos: 'SELECT parent.name, child.image_url FROM video_app.video_list as parent left join video_app.image_holder as child on parent.poster_image_id = child.id LIMIT ?, ?',
            searchVideo: 'SELECT parent.name, child.image_url FROM video_app.video_list as parent left join video_app.image_holder as child on parent.poster_image_id = child.id where INSTR(parent.name, ?)',
            getNoOfVideos: 'SELECT COUNT(*) as count FROM video_app.video_list'
        }
    }
    async getVideos(params) {
        const endLimit = (params.pageNo * params.noOfData);
        const startLimit = (endLimit - params.noOfData)
        const getVideosQuery = this.query['getVideos'];
        const result = await this.executeQuery(getVideosQuery, [startLimit, Number(params.noOfData)]);
        // const nofOfVideos = await this.executeQuery(getNofOfVideosQuery);
        const reurnData = {
            "title": "Romantic Comedy",
            "isLastSetOfData" : params.noOfData - result.length  > 0 ? true : false,
            "pageNumRequested" : params.pageNo,
            "pageSizeRequested" : params.noOfData,
            "pageSizeReturned" : result.length,
            "contentItems": {
                "content": result
            }
        }
        return reurnData;  
    }
    async searchVideos(params) {
        const query = this.query['searchVideo'];
        const result = await this.executeQuery(query, [params.searchParams]);
        return result;  
    }
}

module.exports = new Repo()