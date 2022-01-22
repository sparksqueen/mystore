import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Listado from "../mocks/Listado";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const [contador, setContador] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    //   const myPromise = new Promise((resolve, reject) => {
    //     resolve(Listado);
    //   });
    //   myPromise.then(function (result) {
    //     let single = result.find((element) => {
    //       return element.id == id;
    //     });
    //     setProductos(single);
    //   });
    const bd = getFirestore();
    const itemCollection = bd.collection("items");
    itemCollection.get().then((value) => {
      let aux = value.docs.map((e) => {
        return { ...e.data(), id: e.id };
      });
      let single = aux.find((e) => {
        return e.id === id;
      });
      setProductos(single);
    });
  }, []);
  // console.log(productos);

  return (
    <>
      <ItemDetail
        productos={productos}
        contador={contador}
        setContador={setContador}
      />
    </>
  );
}
export default ItemDetailContainer;
