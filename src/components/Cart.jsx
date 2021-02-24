import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const Cart = () =>{

    const CartContextUse = useContext(cartContext)
    console.log(CartContextUse);
return(
    <>
        <div> Hola soy el cart</div>
    </>
);
}
export default Cart;