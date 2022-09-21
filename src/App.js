import AppMenu from "./components/app-menu/app-menu";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import SumCard from "./components/sum-card/sum-card";
import CardList from "./components/card-list/card-list";
import Pagination from "./components/pagination/pagination";

import "./App.sass";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <div className="container">
        <div className="header">
          <div className="logo-text">
            Реестр объектов нематериального культурного наследия народов россии
          </div>
          <SearchPanel />
        </div>
        <AppFilter />
        <SumCard />
        <CardList />
        <Pagination />
        <div className="footer">
          <div className="footer-logo">
            <img
              src="img/footer-logo.png"
              alt="footer-logo"
              className="footer-img"
            />
            Государственный Российский Дом народного творчества имени В.Д.
            Поленова
          </div>
          <div className="footer-contacts">
            <div className="footer-contacts-title">Контакты</div>
            <address>Москва, Сверчков пер., 8, стр. 3.</address>
            <a href="tel:+74956284087">Тел.: +7 495 628-40-87</a>
          </div>
          <img
            src="img/footer-logo2.png"
            alt="footerLogo"
            className="footer-img2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
