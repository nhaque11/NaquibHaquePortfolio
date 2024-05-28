import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Parallax from "./components/Parallax/Parallax"; 

function App() {
  return (
    <div className={styles.App}>
     
      <Navbar />
      <Hero />
      <Parallax/>
      <About />
      <Parallax/>
      <Experience />
      <Parallax/>
      <Projects />
      <Parallax/>
      <Contact />
    </div>
  );
}

export default App;


