import { Categoria } from './componentes/Categoria'
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
