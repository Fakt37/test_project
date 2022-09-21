import "./app-filter.sass";
import Icon from "../icons/icons";

const AppFilter = () => {
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
          <button className="filter-search-context-btn" type="submit">
            <Icon name="search" size={24} />
          </button>
        </form>
      </div>
      <div className="filter-search-wrap">
        <select name="ethnic">
          <option value="value" selected>
            Все этносы
          </option>
        </select>
        <select name="categories">
          <option value="value" selected>
            Все категории
          </option>
        </select>
        <select name="regions">
          <option value="all" selected>
            Все регионы
          </option>
          <option value="sakhalin">Сахалинская область</option>
        </select>
        <select name="languages">
          <option value="value" selected>
            Все языки
          </option>
        </select>
        <select name="tags">
          <option value="value" selected>
            Все теги
          </option>
        </select>
        <select name="autors">
          <option value="value" selected>
            Все авторы
          </option>
        </select>
      </div>
      <button className="filter-search-btn">Поиск</button>
    </div>
  );
};

export default AppFilter;
