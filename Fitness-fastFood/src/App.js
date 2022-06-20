import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
import Login  from "./pages/Login";
import {NotFound} from "./pages/NotFound"
import Footer from "./components/Footer"
function App() {
  const isLoggedIn = true
  return (
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/categories" element={<Categories/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<Navigate to="404" replace />} />
  </Routes>
  <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;
