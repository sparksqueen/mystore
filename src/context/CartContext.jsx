import { createContext, useState } from "react";

export const cartContext = createContext();

console.log(cartContext);

function CartContext({ children }) {
  const [product, setProduct] = useState([]);

  const clearCart = (productos) => {
    setProduct([]);
  };
  const deleteFromCart = (id) => {
    const newProducts = product.filter((item) => {
      return item.productos.id !== id;
    });
    setProduct(newProducts);
  };

  const addCart = (productos) => {
    if (isInCart(productos.productos.id === -1)) {
      let newProduct = [productos, ...product];
      setProduct(newProduct);
    } else {
      let findItem = product.find(
        (item) => item.productos.id === productos.productos.id
      );

      if (findItem) {
        let newQuantity = findItem.quantity + productos.quantity;
        let index = product.indexOf(findItem);
        let newCart = [...product];
        newCart[index].quantity = newQuantity;
        setProduct(newCart);
      }
    }
  };

  const isInCart = (id) => {
    return product.findIndex((item) => item.id === id);
  };

  return (
    <cartContext.Provider
      value={{
        product,
        addCart,
        clearCart,
        deleteFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
export default CartContext;
