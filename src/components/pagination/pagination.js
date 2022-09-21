import Icon from "../icons/icons";
import "./pagination.sass";

const Pagination = () => {
  return (
    <ul className="pagination">
      <li className="pagination-left">
        <a href="/#">
          <Icon name="left" size={10} />
        </a>
      </li>
      <li className="pagination-num">
        <a href="/#">1</a>
      </li>
      <li className="pagination-num">
        <a class="active" href="/#">
          2
        </a>
      </li>
      <li className="pagination-num">
        <a href="/#">3</a>
      </li>
      <li className="pagination-num">
        <a href="/#">4</a>
      </li>
      <li className="pagination-num">
        <a href="/#">5</a>
      </li>
      <li className="pagination-right">
        <a href="/#">
          <Icon name="right" size={10} />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
