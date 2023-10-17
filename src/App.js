import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Nosotros from './components/Nosotros';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ToTop from './components/ToTop';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <div className='navbar_home'>
        <Navbar/>
        <div id="home">
        <Home />
        </div>
      </div>
      <div className="toTop">
      <ToTop/>  
      </div>
      <div id="aboutus">
      <Nosotros/>
      </div>
      {/*<div id="clients">
      <Clients/>  
  </div>*/}
      <div>
      <Partners/>  
      </div>
      <div id="contact">
      <Contact/>  
      </div>
      <div>
      <Footer/>  
      </div>
    </div>
  );
}

export default App;
