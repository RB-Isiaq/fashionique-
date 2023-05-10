import { useReducer } from "react";

import CartContext from "./store";

const initialState = {
  products: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const itemIndex = state.products.findIndex(
      (item) => item.id === action.item.id
    );
    const existingProduct = state.products[itemIndex];
    let updatedItems = [];
    if (existingProduct) {
      let updatedItem = {
        ...existingProduct,
      };
      updatedItem.quantity += action.item.quantity;
      updatedItems = [...state.products];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.products.concat(action.item);
    }

    return {
      products: updatedItems,
    };
  }
  if (action.type === "REMOVE") {
    let updatedItems = state.products.filter(
      (item) => item.id !== action.payload
    );
    return {
      products: updatedItems,
    };
  }
  if (action.type === "RESET CART") {
    return {
      products: [],
    };
  }

  return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };
  const resetCartHandler = () => {
    dispatchCartAction({ type: "RESET CART" });
  };

  const cartContext = {
    products: cartState.products,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
