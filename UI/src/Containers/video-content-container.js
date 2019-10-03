import React from 'react';
import { connect } from 'react-redux';
import VideoContentHolderComponent from '../Components/video-content-holder/video-content-holder';
import { getVideoByPageNumber, clearVideo } from '../actions/videoActions';
import { searchVideoFromServer } from '../actions/searchAction'
import PropTypes from 'prop-types'

class VideoContentHolderContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.searchField !== '' && newProps.searchField !== '' && (this.props.searchField !== newProps.searchField) && newProps.videoList.length === 0) {
            this.props.dispatch(searchVideoFromServer(newProps.searchField));
        } 
        else if (this.props.searchField !== '' && newProps.searchField !== '' && (this.props.searchField !== newProps.searchField)) {
            this.props.dispatch(searchVideoFromServer(newProps.searchField));
        } else if (this.props.searchField !== '' && newProps.searchField === '') {
            this.props.dispatch(clearVideo());
            this.props.dispatch(getVideoByPageNumber(1, 20));
        }
    }
    getVideoByPageNumber = (pageNo, noOfData) => {
        this.props.dispatch(getVideoByPageNumber(pageNo, noOfData));
    }
    render() {
        return (
            <VideoContentHolderComponent
                isLastSetOfData = {this.props.isLastSetOfData}
                videoList={this.props.videoList}
                lastPageRequested={this.props.lastPageRequested}
                getVideoByPageNumber={this.getVideoByPageNumber}
            />
        );
    }
}
VideoContentHolderContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
        searchField: state.searchField,
        isLastSetOfData: state.isLastSetOfData,
        lastPageRequested: state.lastPageRequested,
        videoList: state.searchField ? state.videoList.filter(video => video.name.toLowerCase().includes(state.searchField.toLowerCase())) : state.videoList
    }
}

export default connect(mapStateToProps)(VideoContentHolderContainer);
