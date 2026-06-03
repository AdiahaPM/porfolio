import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedWork from './components/FeaturedWork';
import Prototypes from './components/Prototypes';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Hero />
      <About />
      <Skills />
      <FeaturedWork />
      <Prototypes />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
