import {Login} from './Login'
export function Autenticacion(props){
  const isLoggedIn = false;
    return isLoggedIn ? props.children : <Login/>
}