import classes from './components/App.module.css'
import {LoginForm} from './components/LoginForm'
function App() {
  return (
    <div className={classes.formContainer}>
   <LoginForm/>
   </div>
  );
}

export default App;
