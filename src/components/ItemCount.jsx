import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';



function ItemCount (props){

  const [contador, setContador] = useState(1);
  const stock = props.stock;
  const precio = props.precio;
  const valor = precio * contador;

  const onAdd =() =>{
      
    alert(`Usted ha añadido ${contador} productos a su carrito. Por un total de ${valor} pesos`);
} 
  const handlerOnAdd= ()=>{
    onAdd(contador);
  }
  
    return <>
    
    <ButtonGroup className="mb-2">
    <Button onClick={contador > 1 ? () => {setContador(contador - 1)}: () => {setContador(contador)}}>-</Button>
    <Button disabled variant="light">{contador}</Button>
    <Button onClick={contador < stock ? () => {setContador(contador + 1)}: () => {setContador(contador)}}>+</Button>
   
  </ButtonGroup>
  <Button className="mb-2 ml-3" onClick={handlerOnAdd}>Add</Button>

    </>



}
export default ItemCount;



