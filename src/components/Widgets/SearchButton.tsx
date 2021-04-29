import * as React from 'react';




const SearchButton = () => {
    return (

        <div className="search">
            <input type="text" className="searchTerm" placeholder="W jakim mieście szukasz?" />
            <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
        </div>

    );
};

export default SearchButton;

