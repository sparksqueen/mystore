import { useContext } from "react";
import { Table, Button } from "react-bootstrap";

import { cartContext } from "../context/CartContext";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { product, setProduct, clearCart } = useContext(cartContext);
  const CartContextUse = useContext(cartContext);
  console.log(CartContextUse);

  const onClear = () => {
    clearCart();
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <CartDetail />
        </tbody>
      </Table>
      <Button onClick={onClear}>Limpiar Carrito</Button>
    </>
  );
};

export default Cart;
