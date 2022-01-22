import ItemCount from "./ItemCount";
import React, { useState, useContext, memo } from "react";
import { Jumbotron, Container, Image, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const ItemDetail = memo(
  ({ productos, contador, setContador }) => {
    const stock = productos.stock;
    const precio = productos.precio;

    const [redireccionCart, setRedireccion] = useState(false);
    const { product, addCart } = useContext(cartContext);

    const onAdd = (contador) => {
      const valor = precio * contador;

      setRedireccion(true);
      addCart({ productos: productos, quantity: contador });
      console.log(
        `Usted ha añadido ${contador} productos a su carrito. Por un total de ${valor} pesos`,
      );
    };
    console.log(product);

    return (
      <>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs={6} md={4} lg={4} xl={4}>
                <Image src={productos.imagen} thumbnail />
              </Col>
              <Col xs={6} md={8} lg={8} xl={8}>
                <h1>{productos.nombre}</h1>
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
                    contador={contador}
                    setContador={setContador}
                  />
                )}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  },
  (propVieja, propNueva) => {
    console.log(propVieja.contador);
    console.log(propNueva.contador);
    //return propVieja.contador === propNueva.contador; //no lo re renderices
  },
);
export default ItemDetail;
