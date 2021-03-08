import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const CartDetail = () => {
  const { product, setProduct } = useContext(cartContext);

  /* const onDelete = () => {
    deleteFromCart();
  }; */
  const itemTotal = (product) => {
    return product.productos.precio * product.quantity;
  };
  const sumaTotal = (product) => {
    var total = 0;
    for (let i = 0; i < product.length; i++) {
      total = total + product[i].productos.precio * product[i].quantity;
    }
    return total;
  };

  return (
    <>
      {product.map((product) => {
        return (
          <tr>
            <td>{product.productos.titulo}</td>
            <td>{product.quantity}</td>
            <td>{product.productos.precio}</td>
            <td>{itemTotal(product)}</td>
            <td>
              <Button>Eliminar</Button>
            </td>
          </tr>
        );
      })}

      <td></td>
      <td></td>
      <td>
        <b>Precio Final</b>
      </td>
      <td>{sumaTotal(product)}</td>
      <td></td>
    </>
  );
};

export default CartDetail;
