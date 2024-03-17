import "./app.scss"
import Navbar from "./components/Navbar";
import Hero from "./components/Her/Hero";
import Parallex from "./components/Her/parallex/Parallex";
import Service from "./components/services/Service";
import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/sidebar/Contact/Contact";


const App = () => {
  return <div>
      
    <section id="Home">
      <Navbar/>
      <Hero></Hero>
    
    
    </section>
    <section id="services"><Parallex type="services"/></section>
    
    <section id="Service"><Service/></section>
     <section id="Service"><Parallex type="portfolio"/></section>
  <Portfolio/>
     <section id="Contact"><Contact/></section>
    
  
  </div>;
  <section id="end"></section>
};

export default App;
