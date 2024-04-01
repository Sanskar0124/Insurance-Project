// import './App.css'
import About from '../components/About';
import Blog from '../components//Blog';
import MyFooter from '../components//MyFooter';
import Home from '../components//Home';
import Navbar from '../components//Navbar'
import Newsletter from '../components//Newsletter';
import Products from '../components//Products';
import Services from '../components//Services';

function LandingPage() {
    return (
        <>
            <Navbar home={true} />
            <Home />
            <Services />
            <About />
            <Products />
            {/* <Blog /> */}
            <Newsletter />
            <MyFooter />
        </>
    );
}

export default LandingPage
