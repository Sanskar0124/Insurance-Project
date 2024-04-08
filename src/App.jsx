import React, { useEffect, useState } from 'react'
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
import { helix } from 'ldrs'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Set timeout to 1 second (1000 milliseconds)

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, []);
  return (
    <>
      {isLoading ?
        (
          <div className='flex justify-center items-center loader-body'>
            <l-helix
              size="100"
              speed="2.5"
              color="#4CAF4F"
            ></l-helix>
          </div>
        )
        :
        (
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path='contact' element={<ContactUs />} />
              <Route path='about' element={<About />} />
            </Routes>
          </BrowserRouter >
        )
      }
    </>
  );
}

export default App
