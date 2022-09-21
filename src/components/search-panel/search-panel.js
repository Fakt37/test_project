import "./search-panel.sass";
import Icon from "../icons/icons";

const SearchPanel = () => {
  return (
    <form className="search-panel">
      <input className="search-panel-input" type="text" placeholder="Поиск" />
      <button className="search-panel-btn" type="submit">
        <Icon name="search" size={24} />
      </button>
    </form>
  );
};

export default SearchPanel;
