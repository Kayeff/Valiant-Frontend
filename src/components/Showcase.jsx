import map from "../assets/map.webp";
import { logoData } from "../logoData";

export default function Showcase() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center flex-col gap-10 px-10">
      <div className="w-full flex items-center justify-center flex-col gap-10 p-5">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            05
          </p>
          <h1 className="text-8xl tracking-tighter uppercase text-center">
            Global Footprint
          </h1>
        </div>
        <p className="tracking-tight text-center text-3xl w-[80%]">
          Our R.E.G.A.L. technology is supported by a worldwide network of OEMs,
          advisors, and academics across four countries, with internationally
          recognized endorsements.
        </p>
        <div className="w-[70%] flex items-center justify-center">
          <img
            src={map}
            alt="maps"
            className="border border-night/20"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 p-5">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl tracking-tighter text-center">
            Our partnerships & endorsements
          </h1>
          <div className="w-full p-10">
            <div className="w-full flex items-center justify-center flex-wrap gap-20">
              {logoData.map((logo) => (
                <div
                  key={logo.id}
                  className="flex items-center justify-center flex-col gap-2"
                >
                  <img
                    src={logo.img}
                    alt={logo.id}
                    className="h-20 object-cover"
                    loading="lazy"
                  />
                  <h1 className="tracking-tight text-center">{logo.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
