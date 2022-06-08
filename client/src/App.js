import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/index';
import Admin from './components/Admin/admin';
import Donate from './components/Donate/donate';
import About from './components/About/about';
import Facility from './components/Facility/facility';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Index />}></Route >
        <Route path="/admin" element= {<Admin />}></Route >
        <Route path="/donate" element= {<Donate />}></Route >
        <Route path="/about" element= {<About />}></Route >
        <Route path="/facility" element= {<Facility />}></Route >
        <Route path="/contact-us" element= {<Contact />}></Route >
      </Routes>
    </div>    
  );
}

export default App;
