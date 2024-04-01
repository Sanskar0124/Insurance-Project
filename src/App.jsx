import './App.css'
import About from './components/About';
import Blog from './components/Blog';
import MyFooter from './components/MyFooter';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
