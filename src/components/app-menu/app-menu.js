import "./app-menu.sass";

const AppMenu = () => {
  return (
    <menu className="app-menu">
      <div className="container">
        <li>
          <a href="/#">Статистика</a>
        </li>
        <li>
          <a href="/#">Документы</a>
        </li>
        <li>
          <a href="/#">Экспертный совет</a>
        </li>
        <li>
          <a href="/#">Публикации</a>
        </li>
        <li>
          <a href="/#">О проекте</a>
        </li>
      </div>
    </menu>
  );
};

export default AppMenu;
