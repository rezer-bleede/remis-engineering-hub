import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Writing from './components/Writing.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
