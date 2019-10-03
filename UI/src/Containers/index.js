import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import VideoContentHolderContainer from './video-content-container';
import NavBarComponent from '../Components/nav-bar/nav-bar'

class ComponentHolderContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="component-wrapper">
                <NavBarComponent/>
                <VideoContentHolderComponent/>
            </div>
            
        );
    }
}

export default VideoContentHolderContainer;
