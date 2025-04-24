import { productNSol } from "../prod&sol";
import Button from "./Button";

export default function ProdNSolutions() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-10">
      <div className="w-full flex items-center justify-center flex-col gap-10 p-5">
        <div className="flex flex-col items-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            04
          </p>
          <h1 className="text-8xl tracking-tighter uppercase">
            Products & Solutions
          </h1>
        </div>
        <p className="tracking-tight text-center text-3xl w-[80%]">
          There is no one-size-fits-all approach — each solution is customized
          to meet unique needs. Embrace transformative environmental solutions
          tailored for forward-thinking leaders like you. R.E.G.A.L. solutions
          are available in retrofitting capacities, meaning they are
          supplemental and do not require new infrastructure or capital
          expenditure.
        </p>
        <div className="w-[90%] grid grid-cols-4 gap-2 py-4">
          {productNSol.map((prod) => (
            <div
              key={prod.id}
              className="w-full flex flex-col gap-2 border border-night/10"
            >
              <img
                className="w-full object-cover rounded-t-md"
                src={prod.src}
                alt={prod.name}
                loading="lazy"
              />
              <div className="flex flex-col gap-2 w-full p-2 px-4">
                <h1 className="tracking-tight text-3xl font-semibold uppercase">
                  {prod.name}
                </h1>
                <div className="w-full h-[1.5px] bg-night/10"></div>
                <p className="tracking-tight">{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button>Explore more</Button>
        </div>
      </div>
    </section>
  );
}
