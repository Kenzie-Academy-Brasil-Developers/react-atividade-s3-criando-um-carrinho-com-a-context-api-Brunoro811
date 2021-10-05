import "./style.css";
import { useContext } from "react";

import { CatalogueContext } from "../../Providers/Catalogue";
import { CartContext } from "../../Providers/Cart";
import Button from "../Button";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  return (
    <ul className="ProductList">
      <li key={type} className="ProductList-Item">
        <h3>{type}</h3>
      </li>
      {type === "catalogue" &&
        catalogue.map((element, indice) => (
          <li key={indice} className="ProductList-Item">
            {element.name} <Button type={type} item={element} />
          </li>
        ))}
      {type === "cart" &&
        cart.map((element, indice) => (
          <li key={indice} className="ProductList-Item">
            {element.name} <Button type={type} item={element} />
          </li>
        ))}
    </ul>
  );
};
export default ProductList;
