import style from "./CardsContainer.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination/pagination";

const CardsContainer = () => {
  const failure = useSelector((state) => state.failure);

  const countries = useSelector((state) => state.countries);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(9);
  const [maximo, setMaximo] = useState(Math.ceil(countries.length / porPagina));

  useEffect(() => {
    setMaximo(Math.ceil(countries.length / porPagina));
  }, [countries, porPagina]);

  return (
    <div className={style.container}>
      {!failure ? (
        <>
          <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
          <div>
            <div className={style.containerCards}>
              {countries
                .slice(
                  (pagina - 1) * porPagina,
                  (pagina - 1) * porPagina + porPagina
                )
                .map((c, i) => {
                  return (
                    <Card
                      key={i}
                      imageFlag={c.imageFlag}
                      name={c.name}
                      continent={c.continent}
                      id={c.id}
                    />
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <div className={style.mensaje}>{failure}</div>
      )}
    </div>
  );
};

export default CardsContainer;
