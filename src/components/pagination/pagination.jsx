import React, { useState } from "react";
import flechaIzquierda from "./flecha-izquierda.svg";
import flechaDerecha from "./flecha-derecha.svg";
import style from "./Pagination.module.css";
import Button from "react-bootstrap/Button";
export const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    if (input !== 1) {
      setInput(parseInt(input) - 1);
      setPagina(parseInt(pagina) - 1);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.containerPagination}>
      <Button onClick={previousPage}>
        <img src={flechaIzquierda} height="25px" alt="" />
      </Button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> de {Math.ceil(maximo)} </p>
      <Button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
      >
        <img src={flechaDerecha} height="25px" alt="" />
      </Button>
    </div>
  );
};
