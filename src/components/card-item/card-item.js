import Icon from "../icons/icons";
import "./card-item.sass";

const CardItem = ({ title, region }) => {
  return (
    <div className="item-wrap">
      <img src="img/item-img.jpg" alt="item-img" className="item-img" />
      <div className="item-descr">
        <div className="item-title">{title}</div>
        <div className="item-location">
          <Icon name="locationReg" size={16} />
          {region}
        </div>
        <div className="item-icons">
          <Icon name="info" size={24} />
          <Icon name="photo" size={24} />
          <Icon name="play" size={24} />
          <Icon name="vol" size={24} />
          <Icon name="location" size={24} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
