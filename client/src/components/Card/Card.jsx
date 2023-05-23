import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Deal</span>}
          <img
            src={item?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={item?.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>
            ${Math.trunc(Math.random() * 5) + 20 + item?.attributes.price}
          </h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
