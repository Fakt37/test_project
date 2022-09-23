import { useState } from "react";

import "./search-panel.sass";
import Icon from "../icons/icons";

const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    };
    return (
        <form className="search-panel">
            <input
                className="search-panel-input"
                type="text"
                placeholder="Поиск"
                value={term}
                onChange={onUpdateSearch}
            />
            <button className="search-panel-btn" type="button">
                <Icon name="search" size={24} />
            </button>
        </form>
    );
};

export default SearchPanel;
