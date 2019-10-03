import React from 'react';
import NavBarComponent from '../Components/nav-bar/nav-bar';
import { searchVideo } from '../actions/searchAction';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    setSearchField = (searchParam) => {
        this.props.dispatch(searchVideo(searchParam));
    }
    render() {
        return (
            <NavBarComponent
                emitSearchField={this.setSearchField}
            />
        );
    }
}
NavBarContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect(null)(NavBarContainer);