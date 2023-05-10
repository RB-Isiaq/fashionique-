import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <>
      <h1 className="categories-title">Categories</h1>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img src="/img/img8.jpg" alt="" />
            <Link className="link" to="/products/1">
              <button>Women</button>
            </Link>
          </div>
          <div className="row">
            <img src="/img/img10.jpg" alt="" />
            <Link className="link" to="/products/2">
              <button>Men</button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src="/img/img11.jpg" alt="" />
            <Link className="link" to="/products/3">
              <button>Children</button>
            </Link>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="/img/bag.jpg" alt="" />
                <Link className="link" to="/products/5">
                  <button>Bags</button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src="/img/img.jpg" alt="" />
                <Link className="link" to="/products/4">
                  <button>Shoes</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="/img/img6.jpg" alt="" />
            <Link className="link" to="/products/6">
              <button>Sunglasses</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
