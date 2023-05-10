import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ catId, sort, subCats }) => {
  const [data, loading, error] = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default List;
