import './panel.css'
export function PanelControl() {
  return (
      <section className="fondo">
    <div>
      <h1>Bienvenido a tu panel de control</h1>
      <h3>Selecciona una opcion</h3>
      <select>
        <option>Opcion 1</option>
        <option>Opcion 2</option>
      </select>
    </div></section>
  );
}
