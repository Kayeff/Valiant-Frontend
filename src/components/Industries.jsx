import { industry } from "../industriesData";
import Industry from "./Industry";
import Section from "./Section";

export default function Industries() {
  return (
    <Section
      number="03"
      title="Industries"
      buttonText="Learn more"
      description="R.E.G.A.L. can improvise results and minimize costs wherever there is water involved."
    >
      <div className="w-full flex flex-col gap-2">
        {industry.map((item) => (
          <Industry key={item.id} industry={item} />
        ))}
      </div>
    </Section>
  );
}
