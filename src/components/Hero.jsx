import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-70px)] flex flex-col relative heroBg">
      <div className="absolute top-0 left-0 w-full flex items-start justify-center">
        <div className="w-1/2 bg-whitesmoke flex items-center justify-center p-10 overflow-hidden">
          <div className="w-[95%] flex flex-col gap-4">
            <h1 className="text-8xl tracking-tighter leading-20 overflow-hidden">
              Engineering tomorrow’s water <br />
            </h1>
            <p className="uppercase text-2xl tracking-tight overflow-hidden">
              Technology combining Nanobubble Generation <br /> with Ultrasound
            </p>
          </div>
        </div>
        <div className=" w-1/2 bg-whitesmoke flex items-center justify-center p-10">
          <div className="flex items-center justify-end w-[95%]">
            <p className="uppercase text-2xl tracking-tight">
              Directing the spark of Nanobubbles & Ultrasound
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
