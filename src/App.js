import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className='navbar_home'>
        <Navbar/>
        <Home/>
      </div>
      <Contact/>  
    </div>
  );
}

export default App;
