import React from 'react';
import PropTypes from 'prop-types'
import './nav-bar.scss';
import back from '../../Utils/Images/Back.png';
import search from '../../Utils/Images/search.png';

export default class NavBarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            openSearchBar: false
        }
    }

    openSearchBar = () => {
        this.setState({ openSearchBar: !this.state.openSearchBar })
    }
    handleInputChange = (event) => {
        this.props.emitSearchField(event.target.value);
    }
    getSearchBar = () => {
        let returnElement;
        if (this.state.openSearchBar) {
            returnElement = <span className="search-bar">
                <input placeholder="Search Video" onChange={(event) => {this.handleInputChange(event)}}/>
            </span>
        }
        return returnElement
    }
    render() {
        console.log(this.state.openSearchBar);
        return (
            <div className="Nav-Bar align-middle">
                <img className="back-icon" src={back} />
                <header className="nav-header">Romantic Comedy</header>
                <div className="search-bar-holder">
                    <img src={search} className="search-icon" onClick={this.openSearchBar}></img>
                    {this.getSearchBar()}
                </div>
            </div>
        );
    }
}
NavBarComponent.propTypes = {
    emitSearchField: PropTypes.func
};
