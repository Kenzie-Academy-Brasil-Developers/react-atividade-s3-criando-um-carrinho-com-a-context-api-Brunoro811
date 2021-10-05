import { useContext } from "react";

import { ContainerButton } from "./style.js";
import { CatalogueContext } from "../../Providers/Catalogue";
import { CartContext } from "../../Providers/Cart";

function Button({ type, item }) {
  const { catalogue, addToCatalogue, removedToCatalogue } =
    useContext(CatalogueContext);
  const { cart, addToCart, removedToCart } = useContext(CartContext);
  const text = type === "catalogue" ? "add to cart" : "removed to cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removedToCatalogue(item);
      addToCart(item);
    } else {
      removedToCart(item);
      addToCatalogue(item);
    }
  };

  return (
    <ContainerButton type={type} onClick={handleClick}>
      {text}
    </ContainerButton>
  );
}
export default Button;
