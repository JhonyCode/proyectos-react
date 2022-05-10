import "./components/Semaforo.css";
import "./App.css"
import { useState } from "react";
function App() {
  const [idLampara, setIdLampara] = useState("green");
  function bucle() {
    if (idLampara === "green") {
      setIdLampara("orange");
    } else if (idLampara === "orange") {
      setIdLampara("red");
    } else if (idLampara === "red") {
      setIdLampara("blue");
    } else if (idLampara === "blue"){
      setIdLampara("white")
    } else if (idLampara === "white"){
      setIdLampara("pink")
    } else if(idLampara === "pink"){
      setIdLampara("green")
    }
  }
  return (
    <div className="flex">
      <div className={`${idLampara === "green" ? "green" : "off"}`}></div>
      <div className={`${idLampara === "orange" ? "orange" : "off"}`}></div>
      <div className={`${idLampara === "red" ? "red" : "off"}`}></div>
      <div className={`${idLampara === "blue" ? "blue" : "off"}`}></div>
      <div className={`${idLampara === "white" ? "white" : "off"}`}></div>
      <div className={`${idLampara === "pink" ? "pink" : "off"}`}></div>
      <button onClick={bucle}>Interruptor</button>
    </div>
  );
}

export default App;
