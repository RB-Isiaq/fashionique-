import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.scss";

import CartContext from "../../context/store";
const Success = () => {
  const { products, resetCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(null);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setAnimate("success3 1s ease-out backwards");
    }, 8500);
    const timer = setTimeout(() => {
      navigate("/");
      resetCart();
    }, 9500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      setAnimate(null);
    };
  }, []);

  return (
    <div className="success" style={{ animation: animate }}>
      <div className="wrapper">
        <h1>Congratulations</h1>
        <h2>You've completed an order of </h2>
        {products.map((item) => {
          return (
            <p key={item.id}>
              <span>{item.quantity}</span>
              {item.quantity > 1 ? " quantites " : " quantity "} of
              <span> {item.title}.</span>
            </p>
          );
        })}
        <h3>To be delivered in coming days!</h3>
      </div>
    </div>
  );
};

export default Success;