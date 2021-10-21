import React from "react";
import "./components.css";

const List = ({ results, search }) => {
    const renderedList = results
        ?.filter((item) => {
            if (search === "") return item;
            else if (
                item.first_name?.toLowerCase().includes(search.toLowerCase())
            ) {
                return item;
            } else if (
                item.last_name.toLowerCase().includes(search.toLowerCase())
            ) {
                return item;
            } else return null;
        })
        .sort(function (a, b) {
            if (a.last_name < b.last_name) {
                return -1;
            }
            if (a.last_name > b.last_name) {
                return 1;
            }
            return 0;
        })
        .map((item) => (
            <li key={item.id}>
                <div className="listItem">
                    {`${item.first_name} ${item.last_name}`}
                </div>
            </li>
        ));

    return (
        <div>
            <ul className="nobullet">{renderedList}</ul>
        </div>
    );
};

export default List;
