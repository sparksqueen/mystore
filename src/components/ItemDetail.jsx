import ItemCount from "./ItemCount";
import React, { useState, useContext } from "react";
import { Jumbotron, Container, Image, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const ItemDetail = ({ productos }) => {
  const stock = productos.stock;
  const precio = productos.precio;

  const [redireccionCart, setRedireccion] = useState(false);
  const { product, addCart } = useContext(cartContext);

  const onAdd = (contador) => {
    const valor = precio * contador;

    setRedireccion(true);
    addCart({ productos: productos, quantity: contador });
    console.log(
      `Usted ha añadido ${contador} productos a su carrito. Por un total de ${valor} pesos`
    );
  };
  console.log(product);

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col xs={6} md={4} lg={4} xl={4}>
              <Image src={productos.image} thumbnail />
            </Col>
            <Col xs={6} md={8} lg={8} xl={8}>
              <h1>{productos.titulo}</h1>
              <h1>{productos.precio}</h1>
              <p>{productos.descripcion}</p>

              {redireccionCart ? (
                <Button as={NavLink} to="/cart">
                  Terminar Compra
                </Button>
              ) : (
                <ItemCount
                  stock={productos.stock}
                  precio={productos.precio}
                  onAdd={onAdd}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};
export default ItemDetail;
