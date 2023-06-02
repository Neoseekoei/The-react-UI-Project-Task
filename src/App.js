
import './App.css';

import  Navbar from  './componants/Navbar'
import HeroSection from './componants/HeroSection';
import About from './componants/About';
import OurServices from './componants/OurServices';
import ContactUs from './componants/ContactUs';



function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <OurServices/>
       <ContactUs/>
    </div>
       
    
  
  );
}

export default App;
