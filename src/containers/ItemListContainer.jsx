import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Listado from "../mocks/Listado";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { nombre } = useParams();

  /*useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      resolve(Listado);
    });
    if (nombre) {
      myPromise.then(function (result) {
        let match = result.filter((element) => {
          return element.marca === nombre;
        });
        setProductos(match);
      });
    } else {
      myPromise.then((result) => setProductos(result));
    }
  }, [productos]);*/

  useEffect(() => {
    const bd = getFirestore();
    const itemCollection = bd.collection("items");
    if (nombre) {
      itemCollection.get().then((value) => {
        let aux = value.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        let filtro = aux.filter((e) => {
          return e.marca === nombre;
        });
        setProductos(filtro);
      });
    } else {
      itemCollection.get().then((value) => {
        let aux = value.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        setProductos(aux);
      });
    }
  }, [productos]);

  return (
    <>
      <Container style={{ background: "#ebebeb" }} className="p-2">
        <Row xs={1} sm={2} md={3} lg={4}>
          <ItemList productos={productos} />
        </Row>
      </Container>
    </>
  );
}
export default ItemListContainer;
