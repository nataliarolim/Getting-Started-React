import React from 'react';


const SearchBar = (props) => {
    
    return (
            <div className="process-name-search">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" 
                            placeholder="Process name"
                            onChange={props.onChange}
                            value={props.searchText}
                            >
                            </input>
                            <i className="search icon"></i>
                        </div>
                    </div>
            </div>           
    )
}

export default SearchBar;
