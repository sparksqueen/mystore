import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Listado from "../mocks/Listado";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const bd = getFirestore();
    const ItemCollection = bd.collection("Productos");
    ItemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });
      if (nombre) {
        let match = aux.filter((element) => {
          return element.marca === nombre;
        });

        setProductos(match);
      } else {
        setProductos(aux);
      }
    });
  }, [productos]);

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
