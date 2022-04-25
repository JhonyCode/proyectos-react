import "./App.css";
import { Card } from "./components/Card";
function App() {
  return (
    <div className="wrapper">
      <Card
        titulo="Card tittle"
        descripcion="Some quick example text to build on the card title and make up the
  bulk of the card's content"
        textoBoton="Saber mas"
        enlaceBoton="https://google.es"
        imagenUrl="https://d3t4nwcgmfrp9x.cloudfront.net/upload/pros-contras-ofrecer-prueba-gratuita.png"
      />
    </div>
  );
}

export default App;
