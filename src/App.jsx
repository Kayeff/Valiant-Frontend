import { lazy } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const ProdNSolutions = lazy(() => import("./components/ProdNSolutions"));
const Industries = lazy(() => import("./components/Industries"));
const REGALTech = lazy(() => import("./components/REGALTech"));
const Showcase = lazy(() => import("./components/Showcase"));
const GetInTouch = lazy(() => import("./components/GetInTouch"));

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
