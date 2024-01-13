import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechStacks from "./components/TechStacks";

export default function Home() {
  return (
    <>
      <LandingPage />

      <About />

      <TechStacks/>

      <Projects />

      <Contact />
    </>
  );
}
