import { useState, useRef, useEffect } from "react";
import validate from "./validate";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";
import axios from "axios";
import { getAllCountries } from "../../redux/actions";
const Form = () => {
  //creo un array con los nombres de todos los paises
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.copyAllcountries);
  const nameCountries = countries.map((c) => c.name);
  const [nameFilters, setNameFilters] = useState([]);
  ////
  const nameIdCountries = countries.map((c) => {
    return { [c.name]: c.id };
  });
  /////
  //funcion que obtiene el id mapeando el arreglo de nombres de paises
  function obtenerValoresDePropiedad(paises, datos) {
    return paises.map((pais) => {
      const elemento = datos.find((dato) => dato.hasOwnProperty(pais));
      return elemento ? elemento[pais] : null;
    });
  }

  const resultado = obtenerValoresDePropiedad(nameFilters, nameIdCountries);

  ///
  //referencia al input de paises
  const inputRef = useRef(null);

  //form es el estado({}) con el que se va hacer el post.
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: resultado,
  });
  /////incio estado error como objeto vacio
  const [errors, setError] = useState({});
  ///
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,

      [property]: value,
    });

    setError(
      validate({
        ...form,
        [property]: value,
      })
    );
  };
  const handleCreateClick = (e) => {
    const newCountry = inputRef.current.value;
    if (
      !nameFilters.includes(newCountry) &&
      nameCountries.includes(newCountry)
    ) {
      setNameFilters((prevFilters) => [...prevFilters, newCountry]);

      inputRef.current.value = "";
    }
  };

  const deleteClick = (e) => {
    setNameFilters(nameFilters.filter((value) => value !== e));
  };

  ///
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      countries: [...resultado],
    }));

    setError((prevForm) =>
      validate({
        ...prevForm,
        countries: [...resultado],
      })
    );
  }, [nameFilters]);
  ///  //
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getAllCountries());
    }
    setError(validate(form));
  }, [form]);
  /////////
  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      await axios
        .post("http://localhost:3001/activities", form)
        .then((response) => {
          alert("Actividad creada con éxito");
        })
        .catch((error) => {
          console.error(error);
          alert("Ha ocurrido un error. Inténtelo nuevamente");
        });
      setForm({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: resultado,
      });
      setNameFilters([]);
    } else {
      alert("Faltan campos por completar");
    }
  };

  ///////
  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.form} action="">
        <div className={style.campo}>
          <div>
            <label className={style.label} htmlFor="">
              Nombre
            </label>
            <input
              className={style.input}
              placeholder="Nombre de la actividad"
              type="text"
              value={form.name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <span className={style.errors}>{errors.nombre}</span>
        </div>
        <div className={style.campo}>
          <div>
            <label htmlFor="">Dificultad</label>
            <select
              className={style.dificultad}
              value={form.difficulty}
              name="difficulty"
              onChange={changeHandler}
            >
              <option value="">Seleccione una opción </option>
              <option value="facil"> 🟢 Fácil </option>
              <option value="moderado"> 🔵 Moderado</option>
              <option value="dificil"> 🟣 Difícil</option>
              <option value="muy dificil"> 🔴 Muy difícil</option>
              <option value="extremo"> ⚫ Extremo</option>
            </select>
          </div>
          <span className={style.errors}>{errors.dificultad}</span>
        </div>

        <div className={style.campo}>
          <div>
            <label htmlFor="">Duración</label>
            <input
              className={style.input}
              placeholder="Horas estimadas"
              type="number"
              value={form.duration}
              name="duration"
              onChange={changeHandler}
              min="0"
            />
          </div>
          <span className={style.errors}>{errors.duracion}</span>
        </div>
        <div className={style.campo}>
          <div>
            <label htmlFor="">Temporada</label>
            <select value={form.season} name="season" onChange={changeHandler}>
              <option value="">Seleccione una opción</option>
              <option value="verano">Verano</option>
              <option value="otoño">Otoño</option>
              <option value="invierno">Invierno</option>
              <option value="primavera">Primavera</option>
            </select>
          </div>
          <span className={style.errors}>{errors.temporada}</span>
        </div>

        <div className={style.campo}>
          <div>
            <label className={style.label} htmlFor="">
              Pais/es
            </label>
            <input
              placeholder="Ingrese al menos 1 pais"
              className={style.input}
              ref={inputRef}
              list="p"
              type="text"
              name="countries"
              multiple
            />
            <button onClick={handleCreateClick} type="button">
              +jjj pais
            </button>
          </div>
          <span className={style.errors}>{errors.paises}</span>
        </div>
        <div>
          <datalist id="p">
            {nameCountries.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </datalist>
        </div>
        <div className={style.containerNamesCountries}>
          {nameFilters.map((e) => (
            <span className={style.spanPaises} key={e}>
              {e}

              <button
                className={style.buttonDelette}
                type="button"
                onClick={() => deleteClick(e)}
              >
                ❌
              </button>
            </span>
          ))}
        </div>
        <button className={style.buttonSub}>Crear</button>
      </form>
    </div>
  );
};
export default Form;
