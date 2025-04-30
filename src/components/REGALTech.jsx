import { threeCs } from "../regal3cs";
import Section from "./Section";

export default function REGALTech() {
  return (
    <Section
      number="02"
      title="What is R.E.G.A.L ?"
      subtitle={
        <>
          <strong>R</strong>adical <strong>E</strong>nhancement using{" "}
          <strong>G</strong>as <strong>A</strong>ssisted <strong>L</strong>
          iquid dispersion
        </>
      }
      description={
        <>
          R.E.G.A.L is a cutting-edge combination aeration technology developed
          by Valiant Entech Private Ltd. At Valiant, we call the process of
          R.E.G.A.L. a 3c process. By harnessing the power of Nanobubbles as{" "}
          <span className="font-semibold">carriers</span>, Ultrasound as a{" "}
          <span className="font-semibold">catalyst</span>, and Free Radicals as
          the <span className="font-semibold">chemistry</span> of the process,
          REGAL technology offers a sustainable and cost efficient solution for
          a wide range of applications, all aligned with Valiant Entech's
          mission to lead in environmental technologies and solutions.
        </>
      }
      buttonText={"More about R.E.G.A.L"}
    >
      <div className="w-full flex flex-col">
        {threeCs.map((item) => (
          <div
            key={item.cName}
            className="border-b border-night/20 grid grid-cols-1 gap-2 tablet-p:grid-cols-2 py-4"
          >
            <div>
              <h1 className="tracking-tight text-3xl tablet-p:hidden">
                {item.title} as
              </h1>
              <h1 className="tracking-tight text-3xl font-semibold">
                {item.cName}
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="tracking-tight text-3xl hidden tablet-p:block">
                {item.title}
              </h1>
              <p className="tracking-tight text-night/70 text-sm tablet-p:text-base desktop:text-lg desktop-large:text-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
