import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/functional/Navbar.jsx';
import Home from './component/functional/home.jsx';
import About from './component/functional/about.jsx';
import Contact from './component/functional/contact.jsx';
import Gallery from './component/functional/gallery.jsx';
import Signup from './component/functional/signup.jsx';
import UseEffectApi from './component/functional/Hooks/useEffectapi.jsx';
import UseRefExample from './component/functional/Hooks/useRef.jsx';

function App() {
  return (
    <main>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/use-effect-api' element={<UseEffectApi />} />
        <Route path='/use-ref' element={<UseRefExample />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
