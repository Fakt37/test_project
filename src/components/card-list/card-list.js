import CardItem from "../card-item/card-item";
import "./card-list.sass";

const CardList = ({ data }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <CardItem key={id} {...itemProps} />;
    });
    return (
        <div className="card-list-wrap">
            {elements.length === 0
                ? "«По вашему запросу ничего не найдено»"
                : elements}
        </div>
    );
};

export default CardList;
