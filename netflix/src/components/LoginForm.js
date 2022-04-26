import classes from "./LoginForm.module.css";

export function LoginForm(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <form className={classes.form}>
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" className={classes.field} />
        <label htmlFor="password"> Contraseña</label>
        <input id="password" type="password" className={classes.field} />
        <div className={classes.formSpacing}>
          <input id="remember" type="checkbox" />
          <label htmlfor="remember">Recuerdame</label>
        </div>
        <button onClick={() => {
          alert("Hola CodeSpace")
        }} type="submit" className={classes.button}>
          {" "}
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}

LoginForm.defaultProps = {
  titulo: "Iniciar sesión"
};
