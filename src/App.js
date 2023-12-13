import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"
import Best from "./components/Best";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Best />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
