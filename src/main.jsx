import React from "react";
import { createRoot } from "react-dom/client"; // Importar desde 'react-dom/client'
import App from "./App";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// //import reportWebVitals from "./reportWebVitals"; // Incluye reportWebVitals

// import { store } from "./redux/store";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//       <h1>aca</h1>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { store } from "./redux/store";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
