import Credentials from "./Credentials";
import Section from "./Section";

const aboutCred = [
  { id: "cred1", title: 5, desc: "Number of clients" },
  { id: "cred2", title: "100", desc: "Installations worldwide" },
  { id: "cred3", title: 6, desc: "Accredited Certificates" },
];

export default function About() {
  return (
    <Section
      number="01"
      title="About Valiant"
      description="Founded in 2023 and based out of Surat, Gujarat, Valiant Entech Private
        Ltd. is backed by a core team with an illustrious 25 years of experience
        in Water Treatment technologies. Our team has been instrumental in the
        founding of Asia’s largest Common Effluent Treatment Plant (CETP) and
        has led governmental delegations in initiatives such as the Indo-German
        Water Partnership and GIZ programs."
      buttonText="About us"
    >
      <div className="w-[80%] grid grid-cols-3 py-4">
        {aboutCred.map((cred) => (
          <Credentials key={cred.id} cred={cred} />
        ))}
      </div>
    </Section>
  );
}
