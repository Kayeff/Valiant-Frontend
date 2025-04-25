import { logoData } from "../logoData";

export default function Partnerships() {
  return (
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
  );
}
