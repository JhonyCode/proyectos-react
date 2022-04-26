import { Categoria } from "./componentes/Categoria";
const listado = [
  {
    categoria: "Superheroes",
    peliculas: ["Los vengadores", "Dr. Strange", "Batman", "Superman"],
  },
  {
    categoria: "Terorr",
    peliculas: ["Saw", "Scream", "Hellraiser", "The Ring", "Insidious"],
  },
  {
    categoria: "Animación",
    peliculas: [
      "Tarzan",
      "El viaje de Chihiro",
      "Castillo ambulante",
      "El rey Leon",
      "Mulan",
    ],
  },
];
//1. Crear un componente categoria, que acepte por props, titulo y listado de peliculas
// 2. Dentro del componente Categoria, crear una lista con <ol> y <li> de cada pelicual en esa categoria
// 3. En App.js hacer un map sobre el listado completo
function App() {
  return (
    <div>
      {listado.map((info) => (
        <Categoria titulo={info.categoria} peliculas={info.peliculas}/>
      ))}
    </div>
  );
}

export default App;
