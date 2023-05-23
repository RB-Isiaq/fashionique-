import Card from "../Card/Card";

import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const [data, loading, error] = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  console.log(data);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          {type === "featured"
            ? "Discover our curated collection of fashion-forward pieces that epitomize style and quality. From elegant dresses to statement accessories, our featured products are designed to make you look and feel fabulous, ensuring you stay ahead of the fashion game."
            : "Stay on-trend with our selection of the hottest fashion items right now. From must-have seasonal essentials to the latest runway-inspired designs, our trending products embody the latest styles and fashion movements, allowing you to express your unique sense of style effortlessly"}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading..."
          : data?.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
