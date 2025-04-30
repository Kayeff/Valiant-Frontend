import { logoData } from "../logoData";

export default function Partnerships() {
  return (
    <div className="w-full flex flex-col gap-10 tablet-p:px-10 desktop:p-10">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-xl tracking-tighter text-center tablet-p:text-3xl desktop:text-5xl">
          Our partnerships & endorsements
        </h1>
        <div className="w-full desktop:p-10">
          <div className="w-full flex items-center justify-center flex-wrap-reverse small-laptop:flex-wrap gap-12 desktop:gap-20">
            {logoData.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center flex-col gap-1"
              >
                <img
                  src={logo.img}
                  alt={logo.id}
                  className="h-16 desktop:h-24 object-cover p-2"
                  loading="lazy"
                />
                <h1 className="tracking-tighter text-center">{logo.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
