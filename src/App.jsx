import About from "./components/About";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import ProdNSolutions from "./components/ProdNSolutions";
import REGALTech from "./components/REGALTech";
import Showcase from "./components/Showcase";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-whitesmoke text-night font-inter relative flex flex-col gap-10">
        <Header />
        <Hero />
        <About />
        <REGALTech />
        <Industries />
        <ProdNSolutions />
        <Showcase />
        <GetInTouch />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
