import map from "../assets/map.webp";
import Partnerships from "./Partnerships";
import Section from "./Section";

export default function Showcase() {
  return (
    <>
      <Section
        number="05"
        title="Global Footprint"
        description="Our R.E.G.A.L. technology is supported by a worldwide network of OEMs, advisors, and academics across four countries, with internationally recognized endorsements."
      >
        <div className="w-full h-80 small-laptop:h-[50vh] small-laptop:w-[70%] flex items-center justify-center">
          <img
            src={map}
            alt="maps"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </Section>
      <Partnerships />
    </>
  );
}
