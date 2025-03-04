import style from "./CardsContainer.module.css";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination/pagination";
import { clearCountries } from "../../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
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
            {countries.length ? (
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
            ) : (
              <div className={style.mensaje}>...Cargando</div>
            )}
          </div>
        </>
      ) : (
        <div className={style.mensaje}>{failure}</div>
      )}
    </div>
  );
};

export default CardsContainer;
