import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const addProduct = (product) => {
    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    const updated = products.filter((item) => item.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const updateProduct = (updatedProduct) => {
    const updated = products.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}