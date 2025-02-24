import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/functional/About.jsx';
import Navbar from './component/functional/Navbar.jsx';
import Home from './component/functional/Home.jsx';
import Contact from './component/functional/Contact.jsx';
import Gallery from './component/functional/Gallery.jsx';
import Login from './component/functional/Login.jsx';
import Signup from './component/functional/Signup.jsx';
import UseEffectApi from './component/functional/Hooks/useEffectapi.jsx';
import UseRefExample from './component/functional/Hooks/useRef.jsx';
import UseMemoExample from './component/functional/Hooks/UseMemo.jsx';
import LazyLoad from './component/functional/memoization/LazyLoadingAndSuspense.jsx';
import TextInput from './component/functional/memoization/Memo.jsx';
import Exam from './component/functional/Exam.jsx'


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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/use-effect-api' element={<UseEffectApi />} />
        <Route path='/use-ref' element={<UseRefExample />} />
        <Route path='/use-memo' element={<UseMemoExample />} />
        <Route path='/lazy' element={<LazyLoad />} />  
        <Route path='/text' element={<TextInput />} /> 
        <Route path='/StudentResults' element={<StudentResults />} />

      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;