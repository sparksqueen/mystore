import CartImg from "../cart.png";
import { Button, Badge } from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartWidget() {
  const { product } = useContext(cartContext);
  const sumaQuantity = (product) => {
    var q = 0;
    for (let i = 0; i < product.length; i++) {
      q = q + product[i].quantity;
    }
    return q;
  };
  console.log(product.length);

  if (product.length > 0) {
    return (
      <Button variant="outline-secondary">
        <i class="fas fa-shopping-cart"></i>

        <Badge variant="light">{sumaQuantity(product)}</Badge>
      </Button>
    );
  } else {
    return <></>;
  }
}
export default CartWidget;
