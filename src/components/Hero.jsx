import hero from "../assets/hero.webp";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-76px)] flex justify-end flex-col relative">
      <div className="h-80 w-1/2 bg-whitesmoke absolute top-0 left-0 flex items-center justify-center p-10">
        <div className="w-[95%] flex flex-col gap-4">
          <h1 className="text-8xl tracking-tighter leading-20">
            Engineering tomorrow’s water <br />
          </h1>
          <p className="uppercase text-2xl tracking-tight">
            Technology combining Nanobubble Generation <br /> with Ultrasound
          </p>
        </div>
      </div>
      <div className="h-28 w-1/2 bg-whitesmoke absolute top-0 right-0 flex items-center justify-center p-10">
        <div className="flex items-center justify-end w-[95%]">
          <p className="uppercase text-2xl tracking-tight">
            Directing the spark of Nanobubbles & Ultrasound
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full h-[80vh] object-cover"
          src={hero}
          alt="hero"
          loading="lazy"
        />
      </div>
    </section>
  );
}
