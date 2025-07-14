import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skill from "../components/Skill";

function App() {
  return (
    <>
    <Background/>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
