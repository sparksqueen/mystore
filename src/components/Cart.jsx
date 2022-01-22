import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { cartContext } from "../context/CartContext";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { product, clearCart } = useContext(cartContext);
  const CartContextUse = useContext(cartContext);
  console.log(CartContextUse);

  const onClear = () => {
    clearCart();
  };

  if (product.length > 0) {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Precio Total</th>
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
  } else {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div>No hay items en el carrito </div>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/">Seguir Comprando </NavLink>
        </div>
      </>
    );
  }
};

export default Cart;
