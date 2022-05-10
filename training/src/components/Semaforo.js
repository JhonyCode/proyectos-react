import { useState } from "react";

export function Semaforo() {
  const [idLampara, setIdLampara] = useState("green");

  function bucle() {
    if (idLampara === "green") {
      setIdLampara("red");
    } else if (idLampara === "red") {
      setIdLampara("orange");
    } else if (idLampara === "orange") {
      setIdLampara("green");
    }
  }
  return (
    <div>
      <div className={`${idLampara === "red" ? "red" : "off"}`}></div>
      <div className={`${idLampara === "orange" ? "orange" : "off"}`}></div>
      <div className={`${idLampara === "green" ? "green" : "off"}`}></div>

      <button onClick={bucle}>Interruptor</button>
    </div>
  );
}
