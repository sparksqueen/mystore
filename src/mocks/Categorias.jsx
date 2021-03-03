import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Categorias = [
  { catId: 1, nombre: "Atari" },
  { catId: 2, nombre: "Texas Instrument" },
  { catId: 3, nombre: "Apple" },
  { catId: 4, nombre: "Nintendo" },
  { catId: 5, nombre: "IBM" },
];

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const catPromise = new Promise((resolve, reject) => {
      resolve(Categorias);
    });
    catPromise.then((result) => setCategorias(result));
  }, []);
  console.log(categorias);

  return (
    <>
      {categorias.map((categorias) => {
        return (
          <NavDropdown.Item
            as={NavLink}
            to={`/categoria/${categorias.nombre}`}
            key={categorias.catId}
          >
            {categorias.nombre}
          </NavDropdown.Item>
        );
      })}
    </>
  );
}
export default Categoria;
