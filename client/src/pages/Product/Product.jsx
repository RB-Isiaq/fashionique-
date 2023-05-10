import { useState, useContext } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CartContext from "../../context/store";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedimg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const productCtx = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);

  const [data, loading, error] = useFetch(`/products/${id}?populate=*`);

  const { title, price, desc, img, img2, mainImg, productId } = {
    title: data?.attributes?.title,
    productId: data?.id,
    price: data?.attributes?.price,
    desc: data?.attributes?.desc,
    img:
      process.env.REACT_APP_UPLOAD_URL +
      data?.attributes?.img?.data?.attributes?.url,
    img2:
      process.env.REACT_APP_UPLOAD_URL +
      data?.attributes?.img2?.data?.attributes?.url,
    mainImg:
      process.env.REACT_APP_UPLOAD_URL +
      data?.attributes[selectedImg]?.data?.attributes?.url,
  };
  const item = {
    id: productId,
    title,
    quantity,
    price,
    img,
    desc,
  };
  function addToCart() {
    productCtx.addItem(item);
  }
  return (
    <div className="product">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={img}
                alt={title}
                onClick={() => setSelectedimg("img")}
              />
              <img
                src={img2}
                alt={title}
                onClick={() => setSelectedimg("img2")}
              />
            </div>
            <div className="mainImg">
              <img src={mainImg} alt={title} />
            </div>
          </div>
          <div className="right">
            <h1>{title}</h1>
            <span className="price">${price}</span>
            <p>{desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={addToCart}>
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item" onClick={() => setIsLiked((prev) => !prev)}>
                {isLiked ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}

                {isLiked ? "REMOVE" : "ADD TO WISHLIST"}
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
