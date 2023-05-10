import { useContext } from "react";
import { makeRequest } from "../../makeRequest";
import { Link } from "react-router-dom";
import "./Cart.scss";
import DeleteOutinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CartContext from "../../context/store";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { products, removeItem, resetCart } = useContext(CartContext);
  const removeItemHandler = (id) => {
    removeItem(id);
  };
  const resetCartHandler = () => {
    resetCart();
  };

  // const stripePromise = loadStripe(
  //   "pk_test_51N5pdnE7KUTvtGBXLRp8m6bnYHJDJqb4brg1oylwSrGAJRAUNeyyWr57QL3itwMEAc8mXgbYCE3SXXtvX21dVIox00uCbsHei3"
  // );
  const handlePayment = async () => {
    // try {
    //   const stripe = await stripePromise;
    //   const res = await makeRequest.post("/orders", {
    //     products,
    //   });
    //   await stripe.redirectToCheckout({
    //     sessionId: res.data.stripeSession.id,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const total = products.reduce((acc, curr) => {
    return (acc += curr.quantity * curr.price);
  }, 0);
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>
                {item.desc.length > 15
                  ? item.desc.substring(0, 15) + "..."
                  : item.desc}
              </p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteOutinedIcon
              className="delete"
              onClick={removeItemHandler.bind(null, item.id)}
            />
          </div>
        );
      })}
      {products.length ? (
        <>
          <div className="total">
            <span>TOTAL</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/success" className="link">
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
          </Link>
          <span className="reset" onClick={resetCartHandler}>
            Clear Cart
          </span>
        </>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>Your Cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;