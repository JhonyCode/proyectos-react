import "./Card.css";
export function Card(props) {
  return (
    <div className="container">
      <img
        alt="test"
        className="image"
        src={props.imagenUrl}
      />
      <div className="container-informacion">
        <h1>{props.titulo}</h1>
        <p>
         {props.descripcion}
        </p>
        <a href={props.enlaceBoton} className="boton">
          {props.textoBoton}
        </a>
      </div>
    </div>
  );
}
