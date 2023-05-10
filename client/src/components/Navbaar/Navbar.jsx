import React, { useState, useContext, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import CartContext from "../../context/store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bumbCart, setBumbCart] = useState(false);
  const { products } = useContext(CartContext);

  useEffect(() => {
    if (products.length === 0) return;
    setBumbCart(true);

    const timer = setTimeout(() => {
      setBumbCart(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [products]);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item hide">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item hide">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            FASHIONIQUE
          </Link>
        </div>
        <div className="right">
          <div className="item hide">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item hide">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item hide">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link hide" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon className="hideIcon" />
            <div
              className="cartIcon"
              onClick={() => setOpen(!open)}
              style={
                bumbCart ? { animation: "cart 500ms ease-in forwards" } : {}
              }
            >
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
