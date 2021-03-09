import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const CategoryContainer = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const bd = getFirestore();
    const ItemCollection = bd.collection("Categorias");
    ItemCollection.get().then((value) => {
      let category = value.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });

      setCategorias(category);
    });
  }, []);

  return (
    <>
      {categorias.map((categorias) => {
        return (
          <NavDropdown.Item
            as={NavLink}
            to={`/categoria/${categorias.marca}`}
            key={categorias.catId}
          >
            {categorias.marca}
          </NavDropdown.Item>
        );
      })}
    </>
  );
};
export default CategoryContainer;
