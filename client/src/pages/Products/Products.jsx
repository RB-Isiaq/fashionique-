import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";
import useFetch from "../../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const [data, loading, error] = useFetch(
    `/sub-categories?[filters[categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {error
            ? "Something went wrong!"
            : loading
            ? "Loading..."
            : data?.map((item) => {
                return (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                );
              })}
        </div>
        <div className="filterItem">
          <h2>Sort by price</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price [Highest first]</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price [Lowest first]</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="/img/img2.jpg" alt="" />
        <List catId={catId} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
}

export default Products;
