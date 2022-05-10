import { useState } from "react";
import "./App.css";

function App() {
  const [idLampara, setIdLampara] = useState("green");
  function bucle() {
    if (idLampara === "green") {
      setIdLampara("orange");
    } else if (idLampara === "orange") {
      setIdLampara("red");
    } else if (idLampara === "red") {
      setIdLampara("green");
    }
  }

  return (
    <div>
      <div className={`${idLampara === "red" ? "red" : "off"}`}></div>
      <div className={`${idLampara === "orange" ? "orange" : "off"}`}></div>
      <div className={`${idLampara === "green" ? "green" : "off"}`}></div>
      <div><button onClick={bucle}> APRIETA MAJO</button></div>
    </div>
  );
}
export default App;
