import { Link } from "react-router-dom";
import style from "./Card.module.css";
import CardBootstrap from "react-bootstrap/Card";
import ButtonBootstrap from "react-bootstrap/Button";
const Card = (props) => {
  return (
    <Link className={style.Link} to={`/detail/${props.id}`}>
      <CardBootstrap
        style={{
          width: "250px",
          height: "350px",
          backgroundColor: "#cececafb",
        }}
      >
        <CardBootstrap.Img
          variant="top"
          width="100%"
          style={{ maxHeight: "180px", minHeight: "180px" }}
          src={props.imageFlag}
          alt={`bandera de ${props.imageFlags}`}
        />
        <CardBootstrap.Body>
          <CardBootstrap.Title>{props.name}</CardBootstrap.Title>
          <CardBootstrap.Text>Continente: {props.continent}</CardBootstrap.Text>
          <ButtonBootstrap
            variant="success"
            style={{
              position: "absolute",
              bottom: "7px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Ver mas
          </ButtonBootstrap>
        </CardBootstrap.Body>
      </CardBootstrap>
    </Link>
  );
};
export default Card;
