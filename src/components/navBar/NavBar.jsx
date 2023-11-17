import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "./logo_henry.png";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Nav
      className={style.containerNav}
      variant="underline"
      defaultActiveKey={pathname}
    >
      <div className={style.divlogo}>
        <img src={logo} height="45px" alt="" />
        <span>PI Countries</span>
      </div>
      <div className={style.divNav}>
        <Nav.Item>
          <Link to="/home" className="nav-link">
            Inicio
          </Link>
        </Nav.Item>
        <SearchBar />
        <Nav.Item>
          <Link to="/create" className="nav-link">
            Nueva actividad
          </Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default NavBar;

// import { Link } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import style from "./NavBar.module.css";
// import logo from "./logo_henry.png";
// import Nav from "react-bootstrap/Nav";
// import { useLocation } from "react-router-dom";
// const NavBar = () => {
//   const { pathname } = useLocation();
//   console.log(pathname);
//   return (
//     <Nav
//       className={style.containerNav}
//       variant="underline"
//       defaultActiveKey={pathname}
//     >
//       <div className={style.divlogo}>
//         <img src={logo} height="45px" alt="" />
//         <span>PI Countries</span>
//       </div>
//       <div className={style.divNav}>
//         <Nav.Item>
//           <Nav.Link href="/home">Inicio</Nav.Link>
//         </Nav.Item>
//         <SearchBar />
//         <Nav.Item>
//           <Nav.Link href="/create">Nueva actividad</Nav.Link>
//         </Nav.Item>
//       </div>
//     </Nav>
//   );
// };
// export default NavBar;
