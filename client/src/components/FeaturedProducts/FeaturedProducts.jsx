import Card from "../Card/Card";

import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const [data, loading, error] = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          tempore illo asperiores aliquid consectetur cumque, quaerat,
          voluptatibus optio voluptas magni recusandae amet deserunt ex, eos
          explicabo cum saepe reprehenderit nostrum doloremque dolor fugiat vel
          debitis. Magni quo nam molestias porro.
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
