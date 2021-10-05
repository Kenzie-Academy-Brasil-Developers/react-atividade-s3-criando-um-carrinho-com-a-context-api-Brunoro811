import { createContext, useState } from "react";
export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 20 },
    { name: "T-shirt", price: 50 },
    { name: "SmartWatch", price: 100 },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };
  const removedToCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (element) => element.name !== item.name
    );
    setCatalogue(newCatalogue);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removedToCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
