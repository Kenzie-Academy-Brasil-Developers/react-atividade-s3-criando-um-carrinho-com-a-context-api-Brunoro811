import "./App.css";
import ProductList from "./Components/ProductList";
import { CartProvider } from "./Providers/Cart";
import { CatalogueProvider } from "./Providers/Catalogue";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
