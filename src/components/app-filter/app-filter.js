import "./app-filter.sass";
import Icon from "../icons/icons";
import { useState } from "react";

const AppFilter = (props) => {
    const [filter, setFilter] = useState("allReg");
    const filterSubmit = (event) => {
        event.preventDefault();
        props.onFilterSelect(filter);
    };
    const optionData = [
        { region: "allReg", label: "Все регионы" },
        { region: "sakhalin", label: "Сахалинская область" },
        { region: "volgograd", label: "Вологодская область" },
        { region: "lipetsk", label: "Липецкая область" },
        { region: "smolensk", label: "Смоленская область" },
    ];

    const options = optionData.map(({ region, label }) => {
        return (
            <option key={region} value={region}>
                {label}
            </option>
        );
    });
    return (
        <div className="filter">
            <div className="filter-header">
                <div className="filter-descr">
                    <div className="filter-breadcrumb">Главная</div>
                    <div className="filter-title">Расширенный поиск</div>
                </div>
                <form className="filter-search-context">
                    <input
                        className="filter-search-context-input"
                        type="text"
                        placeholder="Контекстный поиск"
                    />
                    <button className="filter-search-context-btn" type="button">
                        <Icon name="search" size={24} />
                    </button>
                </form>
            </div>
            <div className="filter-search-wrap">
                <form onSubmit={filterSubmit}>
                    <select name="ethnic">
                        <option value="all">Все этносы</option>
                    </select>
                    <select name="categories">
                        <option value="all">Все категории</option>
                    </select>
                    <select
                        name="regions"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        {options}
                    </select>

                    <select name="languages">
                        <option value="all">Все языки</option>
                    </select>
                    <select name="tags">
                        <option value="all">Все теги</option>
                    </select>
                    <select name="autors">
                        <option value="all">Все авторы</option>
                    </select>
                    <input
                        className="filter-search-btn"
                        type="submit"
                        value="Поиск"
                    />
                </form>
            </div>
        </div>
    );
};

export default AppFilter;
