import React from "react";
import "./components.css";

const SearchBox = ({ search, setSearch }) => {
    return (
        <div>
            <input
                className="searchbox"
                type="text"
                placeholder="Search Employee"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;
