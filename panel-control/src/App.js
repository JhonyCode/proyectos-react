import {Login} from './components/Login'
import {PanelControl} from './components/PanelControl'
function App() {
  const isLoggedIn = false;
  return (
    <div>
    {isLoggedIn ? <PanelControl/> : <Login/>}
    </div>
  );
}

export default App;
