import { productNSol } from "../prod&sol";
import Section from "./Section";

export default function ProdNSolutions() {
  return (
    <Section
      number="04"
      title="Products & Solutions"
      description="There is no one-size-fits-all approach — each solution is customizedto meet unique needs. Embrace transformative environmental solutions tailored for forward-thinking leaders like you. R.E.G.A.L. solutions are available in retrofitting capacities, meaning they are supplemental and do not require new infrastructure or capital expenditure."
      buttonText="Explore more"
    >
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
              <h1 className="tracking-tight text-4xl font-semibold uppercase">
                {prod.name}
              </h1>
              <div className="w-full h-[1.5px] bg-night/10"></div>
              <p className="tracking-tight">{prod.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
