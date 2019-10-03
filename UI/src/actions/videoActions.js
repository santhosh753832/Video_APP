
import { ACTIONS } from '../constants/videoConstants';
import { constructUrl } from '../services/api';

export function getVideoByPageNumber(pageNo, noOfData) {
    const serviceParams = {};
    serviceParams.apiName = 'GET_VIDEO';
    serviceParams.params = { pageNo, noOfData };
    const requestData = constructUrl(serviceParams);
    return {
        type: ACTIONS.GET_VIDEO_ACTION,
        requestData
    }
}
export function clearVideo() {    
    return {
        type: ACTIONS.CLEAR_VIDEO_ACTION
    }
}

export function getVideoDataSuccess(data) {
    return {
        type: ACTIONS.GET_VIDEO_DATA_SUCCESS,
        data
    }
}