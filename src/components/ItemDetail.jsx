import ItemCount from './ItemCount';
import React, { useState, useEffect } from 'react';
import { Jumbotron , Container , Image , Row , Col , Button } from 'react-bootstrap';
import { NavLink , Link } from 'react-router-dom';


const ItemDetail = ({productos}) => {

  const stock = productos.stock;
  const precio = productos.precio;


  const [redireccionCart, SetRedireccion] = useState(false);
  const onAdd = (contador) =>{
    const valor = precio * contador;
      
    alert(`Usted ha añadido ${contador} productos a su carrito. Por un total de ${valor} pesos`);
    console.log(`Usted ha añadido ${contador} productos a su carrito. Por un total de ${valor} pesos`);
     SetRedireccion(true);
  }
  
    return (

        <>

        <Jumbotron fluid>
            <Container>
            <Row>
    <Col xs={6} md={4} lg={4} xl={4}>
      <Image src={productos.img} thumbnail />
    </Col>
    <Col xs={6} md={8} lg={8} xl={8}>
    <h1>{productos.titulo}</h1>
  <h1>{productos.precio}</h1> 
  <p>{productos.descripcion}</p>

  {redireccionCart ? <Button as={NavLink} to="/cart">Terminar Compra</Button> : 
  <ItemCount stock={productos.stock} precio={productos.precio} onAdd={onAdd}/>}
    </Col>
    </Row>


  </Container>
      
</Jumbotron>

        </>
    )
}
export default ItemDetail;