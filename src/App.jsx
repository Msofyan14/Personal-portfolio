import Badge from "./components/Badge";
import Certifitates from "./components/Certifitates";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  overflow-hidden p-4 dark:bg-[#1F1D2B] md:p-0">
        <Hero />
        <Projects />
        <Certifitates />
        <TechStack />
        <Badge />
        <Footer />
      </div>
    </>
  );
}

export default App;
