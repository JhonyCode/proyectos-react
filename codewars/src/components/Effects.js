import { useEffect, useState } from "react";
import "./Boton.css"
export function Effects() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((data) => data.json())
      .then((data) => setPeliculas(data.results));
  }, []);
  return<div>
          <ol>{peliculas.map((pelicula) => (
       <li className="lista">{pelicula.title}</li>
       ))}</ol></div>
}
