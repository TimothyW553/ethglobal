// create a search bar component for React
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
        <div className="search-bar">
            <input
            type="text"
            placeholder=""
            value={this.props.searchTerm}
            onChange={this.props.handleSearch}
            />
        </div>
        );
    }
}

export default SearchBar;