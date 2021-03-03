import { createContext, useState } from "react";

export const cartContext = createContext();

console.log(cartContext);

function CartContext({ children }) {
  const [product, setProduct] = useState([]);

  const addCart = (productos) => {
    if (isInCart(productos.productos.id === -1)) {
      setProduct(productos);
    } else {
      const newProduct = [...product, { productos: productos }];
      setProduct(newProduct);
    }
  };

  const isInCart = (id) => {
    return product.findIndex((prod) => prod.id === id);
  };

  return (
    <cartContext.Provider
      value={{
        product,
        addCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
export default CartContext;
