import { createContext } from "react";
// const stripe = require('stripe')('sk_test_51N5pdnE7KUTvtGBXDd7AD2TZ8TPXwUDredxsIymM4hD4hGN6pr4m9zoHUikQOQouOIsXsRfc4l9tFAGgo9h68dAA003RXqc3lc')
const CartContext = createContext({
  products: [],
  addItem(item) {},
  removeItem(id) {},
  resetCart() {},
});

export default CartContext;
