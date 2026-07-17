import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import TechStackDashboard from "./sections/TechStackDashboard/TechStackDashboard";
import Projects from "./sections/Projects/Projects";
import Journey from "./sections/Journey/Journey";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStackDashboard />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}

export default App;