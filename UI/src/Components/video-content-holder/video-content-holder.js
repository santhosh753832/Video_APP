import React from 'react';
import PropTypes from 'prop-types'
import './video-content-holder.scss';
import VideoContentComponent from '../video-content/video-content'

export default class VideoContentHolderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList: [],
            isLastSetOfData: false,
            lastPageRequested: 1
        }
    }
    componentDidMount() {
        if (this.props.videoList.length === 0) {
            this.props.getVideoByPageNumber(this.state.lastPageRequested, 20); // this can be changed to dynamic in a full scale application considering gettingh the input from user, so for time being hard-coding the data 
        }
        document.addEventListener('scroll', this.trackScrolling);
    }
    componentWillReceiveProps(newProps) {
        this.setState({ videoList: newProps.videoList, isLastSetOfData: newProps.isLastSetOfData, lastPageRequested: newProps.lastPageRequested });
    }
    generateVideoContents() {
        const videoList = this.state.videoList;
        return videoList.map(video => {
            return <VideoContentComponent imgUrl={video.image_url} header={video.name} />
        })
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom  <= (window.innerHeight + 500);
    }
    removeScrollEventListener = () => {
        document.removeEventListener('scroll', this.trackScrolling);
    }
    trackScrolling = () => {
        const videoContentElement = document.getElementById('videoContent');
        if (this.isBottom(videoContentElement) && !this.state.isLastSetOfData) {
            this.props.getVideoByPageNumber(Number(this.state.lastPageRequested) + 1, 20)
        }
    };
    componentWillUnmount() {
        this.removeScrollEventListener();
    }

    render() {
        return (
            <div className="Video-Holder row" id="videoContent">
                {this.generateVideoContents()}
            </div>
        );
    }
}

VideoContentHolderComponent.propTypes = {
    videoList: PropTypes.array,
    getVideoByPageNumber: PropTypes.func,
    isLastSetOfData: PropTypes.any,
    lastPageRequested: PropTypes.any
}