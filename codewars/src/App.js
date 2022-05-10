import { Effects } from "./components/Effects";
import { useState } from "react";
import "./components/Boton.css";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <section className="container">
      <div>
        {visible ? <Effects /> : null}
        <button className="boton" onClick={() => setVisible(!visible)}>
          Muestrame el listado
        </button>
      </div>
    </section>
  );
}

export default App;
