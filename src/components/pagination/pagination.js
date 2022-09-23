import { number } from "prop-types";
import { useState } from "react";
import Icon from "../icons/icons";
import "./pagination.sass";

const Pagination = ({
    perPage,
    totalPage,
    paginate,
    nextPage,
    prevPage,
    currentPage,
}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
        pageNumber.push(i);
    }
    const activePrev = currentPage <= 1;
    const clazzPrev = activePrev ? "" : "active";
    const clickPrev = !activePrev ? prevPage : "";

    const activeNext = currentPage === pageNumber.length;
    const clazzNext = activeNext ? "" : "active";
    const clickNext = !activeNext ? nextPage : "";
    return (
        <ul className="pagination">
            <li className="pagination-left" onClick={clickPrev}>
                <span>
                    <Icon name="left" opacity={clazzPrev} size={10} />
                </span>
            </li>
            {pageNumber.map((number) => {
                const active = number === currentPage;
                const clazz = active ? "active" : "";
                return (
                    <li
                        className={`pagination-num ${clazz}`}
                        key={number}
                        onClick={() => paginate(number)}
                    >
                        <span>{number}</span>
                    </li>
                );
            })}
            <li className="pagination-right" onClick={clickNext}>
                <span>
                    <Icon name="right" opacity={clazzNext} size={10} />
                </span>
            </li>
        </ul>
    );
};

export default Pagination;
