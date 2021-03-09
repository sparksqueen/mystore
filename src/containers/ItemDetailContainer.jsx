import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Listado from "../mocks/Listado";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const bd = getFirestore();
    const ItemCollection = bd.collection("Productos");
    ItemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });

      let single = aux.find((element) => {
        return element.id === id;
      });

      setProductos(single);
    });
  }, []);
  /*useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      resolve(Listado);
    });
    myPromise.then(function (result) {
      let single = result.find((element) => {
        return element.id == id;
      });
      setProductos(single);
    });
  }, []);
  console.log(productos);*/

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
}
export default ItemDetailContainer;
