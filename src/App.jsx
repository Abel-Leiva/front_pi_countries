import { useLocation } from "react-router-dom";
import "./App.css";
import { Form, Landing, Home, Detail } from "./views/index";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.baseURL = "https://back-countries-uxmm.onrender.com";
function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      {location !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import "./App.css";
// import { Form, Landing, Home, Detail } from "./views/index";
// import NavBar from "./components/navBar/NavBar";
// import { Route } from "react-router-dom";
// import Filters from "./components/filters/Filters";
// function App() {
//   const location = useLocation().pathname;
//   return (
//     <div className="App">
//       {location !== "/" && <NavBar />}
//       {location !== "/" &&
//         location !== "/create" &&
//         location !== "/detail/:id" && <Filters />}
//       <Route exact path="/" render={() => <Landing />} />
//       <Route exact path="/home" render={() => <Home />} />
//       <Route exact path="/detail/:id" render={() => <Detail />} />
//       <Route exact path="/create" render={() => <Form />} />
//     </div>
//   );
// }

// export default App;
