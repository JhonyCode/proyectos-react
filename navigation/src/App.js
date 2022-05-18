import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/categories" element={<Categories/>} />
  <Route path="/contact" element={<Contact/>} />
  </Routes>
    </BrowserRouter>
    
  );
}

export default App;
