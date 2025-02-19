import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/functional/about.jsx';
import Home from './component/functional/home.jsx';
import Contact from './component/functional/contact.jsx';
import Gallery from './component/functional/gallery.jsx';
import Login from './component/functional/login.jsx';
import Signup from './component/functional/signup.jsx';
import Navbar from './component/functional/Navbar.jsx';

function App() {
  return (
    <main>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home properties="Hello" />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;

