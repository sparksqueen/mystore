import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Button, Image } from "react-bootstrap";

const CartDetail = () => {
  const { product, setProduct, deleteFromCart } = useContext(cartContext);

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
  if (product.length > 0) {
    return (
      <>
        {product.map((product) => {
          return (
            <tr>
              <td>
                <Image src={product.productos.image} style={{ width: 50 }} />
              </td>
              <td>{product.productos.titulo}</td>
              <td>{product.quantity}</td>
              <td>{product.productos.precio}</td>
              <td>{itemTotal(product)}</td>
              <td>
                <Button onClick={() => deleteFromCart(product.productos.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          );
        })}

        <td></td>
        <td></td>
        <td></td>
        <td>
          <b>Precio Final</b>
        </td>
        <td>{sumaTotal(product)}</td>
        <td></td>
      </>
    );
  } else {
    return <></>;
  }
};

export default CartDetail;
