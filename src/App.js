import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/projects/Projects';
import Topbar from './components/navbar/Topbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='projects' element={<Projects/>}/>
      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;