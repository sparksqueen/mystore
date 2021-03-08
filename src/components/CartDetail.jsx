import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const CartDetail = () => {
  const { product, setProduct } = useContext(cartContext);

  /* const onDelete = () => {
    deleteFromCart();
  }; */

  return (
    <>
      {product.map((product) => {
        return (
          <tr>
            <td>{product.productos.titulo}</td>
            <td>{product.quantity}</td>
            <td>
              <Button>Eliminar</Button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CartDetail;
