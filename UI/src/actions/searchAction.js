
import { ACTIONS } from '../constants/videoConstants';
import { constructUrl } from '../services/api';

export function searchVideo(searchParams) {    
    return {
        type: ACTIONS.SEARCH_VIDEO_ACTION,
        searchParams
    }
}



export function searchVideoFromServer(searchParams) {
    const serviceParams = {};
    serviceParams.apiName = 'SEARCH_VIDEO';
    serviceParams.params = { searchParams };
    const requestData = constructUrl(serviceParams);
    return {
        type: ACTIONS.SEARCH_VIDEO_FROM_SERVER_ACTION,
        requestData
    }
}

export function searchVideoSuccess(data) {    
    return {
        type: ACTIONS.SEARCH_VIDEO_SUCCESS_ACTION,
        data
    }
}
