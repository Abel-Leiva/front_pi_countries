import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const GET_ID_COUNTRY_FAILURE = "GET_ID_COUNTRY_FAILURE";
export const FILTERS = "FILTERS";
export const FILTERS_FAILURE = "FILTERS_FAILURE";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SEARCH_NAME = "SEACH_NAME";
export const SET_PAGINATIONS = "SET_PAGINATIONS";
export const CLEAR_DETAIL = "clear_detail";
export function getAllCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/countries");

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_COUNTRIES_FAILURE,
        payload: "Error al obtener los paises",
      });
    }
  };
}
export function getIdCountry(id) {
  return async function (dispatch) {
    try {
      const response = await axios
        .get(`countries/${id}`)
        .then((data) => data.data);

      return dispatch({
        type: GET_ID_COUNTRY,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_ID_COUNTRY_FAILURE,
        payload: "Error al obtener los detalles del pais",
      });
    }
  };
}
export function nombreAbuscar(name) {
  return { type: SEARCH_NAME, payload: name };
}
export function filterCountries(filtros) {
  return async function (dispatch) {
    try {
      const response = await axios
        .get(`/countries/?name=${filtros.name}`)
        .then((data) => data.data);
      return dispatch({
        type: FILTERS,
        payload: { paisesFiltrados: response, ...filtros },
      });
    } catch (error) {
      return dispatch({
        type: FILTERS_FAILURE,
        payload: "Error al obtener los paises filtrados",
      });
    }
  };
}
export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/activities`).then((data) => data.data);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
export function clearFilters() {
  return { type: CLEAR_FILTERS };
}
export function setPaginations(arg) {
  return { type: SET_PAGINATIONS, payload: arg };
}
export function clearDetail() {
  return { type: CLEAR_DETAIL };
}
