import { useState } from "react";

import AppMenu from "./components/app-menu/app-menu";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import SumCard from "./components/sum-card/sum-card";
import CardList from "./components/card-list/card-list";
import Pagination from "./components/pagination/pagination";

import "./App.sass";
import "normalize.css";

const App = () => {
    const [data] = useState([
        {
            title: 'Традиция исполнения якутского традиционного кругового танца "осуохай"',
            region: "Сахалинская область",
            id: 1,
        },
        {
            title: "Технология изготовления вологодского кружева",
            region: "Вологодская область",
            id: 2,
        },
        {
            title: "Технология плетения и декорирования изделий из бересты.",
            region: "Вологодская область",
            id: 3,
        },
        {
            title: "Нивхский праздник П’ИТУЛ (праздник обновления природы)",
            region: "Вологодская область",
            id: 4,
        },
        {
            title: "Жатвенные обряды северных районов Смоленщины",
            region: "Сахалинская область",
            id: 5,
        },
        {
            title: "Технология изготовления обрядовой и бытовой выпечки",
            region: "Липецкая область",
            id: 6,
        },
        {
            title: "Технология изготовления глиняной игрушки",
            region: "Смоленская область",
            id: 7,
        },
    ]);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("");

    const onSearch = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.title.indexOf(term) > -1;
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const filterPost = (items, filter) => {
        switch (filter) {
            case "sakhalin":
                return items.filter(
                    (item) => item.region === "Сахалинская область"
                );
            case "volgograd":
                return items.filter(
                    (item) => item.region === "Вологодская область"
                );
            case "lipetsk":
                return items.filter(
                    (item) => item.region === "Липецкая область"
                );
            case "smolensk":
                return items.filter(
                    (item) => item.region === "Смоленская область"
                );
            default:
                return items;
        }
    };

    const onFilterSelect = (filter) => {
        setFilter(filter);
    };

    const visibleData = filterPost(onSearch(data, term), filter);
    return (
        <div className="App">
            <AppMenu />
            <div className="container">
                <div className="header">
                    <div className="logo-text">
                        Реестр объектов нематериального культурного наследия
                        народов россии
                    </div>
                    <SearchPanel onUpdateSearch={onUpdateSearch} />
                </div>
                <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
                .
                <SumCard sum={visibleData.length} />
                <CardList data={visibleData} />
                <Pagination />
                <div className="footer">
                    <div className="footer-logo">
                        <img
                            src="img/footer-logo.png"
                            alt="footer-logo"
                            className="footer-img"
                        />
                        Государственный Российский Дом народного творчества
                        имени В.Д. Поленова
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
};

export default App;
