import { industry } from "../industriesData";
import Button from "./Button";

export default function Industries() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-10">
      <div className="w-full flex flex-col gap-10 p-5">
        <div className="flex flex-col items-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            03
          </p>
          <h1 className="text-8xl tracking-tighter uppercase">Industries</h1>
          <p className="tracking-tight text-center text-3xl">
            R.E.G.A.L. can improvise results and minimize costs wherever there
            is water involved.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          {industry.map((item) => (
            <div
              key={item.id}
              className="border border-night/20 grid grid-cols-4 gap-4"
            >
              <div className="col-span-2 w-full flex flex-col gap-5 p-10">
                <h1 className="text-8xl tracking-tighter leading-20">
                  {item.id}. {item.name}
                </h1>
                <p className="tracking-tight">{item.description}</p>
              </div>
              <img
                className="h-96 w-full object-cover col-span-2"
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
}
