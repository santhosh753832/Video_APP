import React from 'react';
import poster from '../../Utils/Images/poster1.jpg'
import './video-content.scss'
import PropTypes from 'prop-types'

export default class VideoContentComponent extends React.Component {
    
    render() {
        return (
                <div className="Video-Content col-sm-4 col-md-4 col-lg-3">
                    <img src={this.props.imgUrl ? this.props.imgUrl : 'http://localhost:3000/empty.png'} className="Poster"/>
                    <span className="Content-Header">{this.props.header}</span>
                </div>
        );
    }
}
VideoContentComponent.propTypes = {
    imgUrl: PropTypes.string,
    header: PropTypes.string
};
