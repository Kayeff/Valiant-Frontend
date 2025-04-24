import { threeCs } from "../regal3cs";
import Button from "./Button";

export default function REGALTech() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-10">
      <div className="w-full flex flex-col gap-10 p-5">
        <div className="flex flex-col items-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            02
          </p>
          <h1 className="text-8xl tracking-tighter uppercase">R.E.G.A.L</h1>
          <p className="tracking-tight">
            <strong>R</strong>adical <strong>E</strong>nhancement using{" "}
            <strong>G</strong>as <strong>A</strong>ssisted <strong>L</strong>
            iquid dispersion
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="tracking-tight text-center text-3xl">
            R.E.G.A.L is a cutting-edge combination aeration technology
            developed by Valiant Entech Private Ltd. At Valiant, we call the
            process of R.E.G.A.L. a 3c process. By harnessing the power of
            Nanobubbles as <span className="font-semibold">carriers</span>,
            Ultrasound as a <span className="font-semibold">catalyst</span>, and
            Free Radicals as the{" "}
            <span className="font-semibold">chemistry</span> of the process,
            REGAL technology offers a sustainable and cost efficient solution
            for a wide range of applications, all aligned with Valiant Entech's
            mission to lead in environmental technologies and solutions.
          </p>
          <div className="w-full flex flex-col">
            {threeCs.map((item) => (
              <div
                key={item.cName}
                className="border-b border-night/20 p-4 grid grid-cols-2"
              >
                <h1 className="tracking-tight text-3xl">{item.cName}</h1>
                <div className="flex flex-col gap-1">
                  <h1 className="tracking-tight text-3xl">{item.title}</h1>
                  <p className="tracking-tight text-night/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button>More about R.E.G.A.L</Button>
        </div>
      </div>
    </section>
  );
}
