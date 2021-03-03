import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const ItemCount = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const handlerOnAdd = () => {
    onAdd(contador);
  };

  function Check(props) {
    return contador < props.stock;
  }

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button
          onClick={
            contador > 1
              ? () => {
                  setContador(contador - 1);
                }
              : () => {
                  setContador(contador);
                }
          }
        >
          -
        </Button>
        <Button disabled variant="light">
          {contador}
        </Button>
        <Button
          onClick={
            Check
              ? () => {
                  setContador(contador + 1);
                }
              : () => {
                  setContador(contador);
                }
          }
        >
          +
        </Button>
      </ButtonGroup>
      <Button className="mb-2 ml-3" onClick={handlerOnAdd}>
        Add
      </Button>
    </>
  );
};
export default ItemCount;
