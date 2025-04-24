import Button from "./Button";

const aboutCred = [
  { id: "cred1", title: "5", desc: "Number of clients" },
  { id: "cred2", title: "100+", desc: "Installations worldwide" },
  { id: "cred3", title: "6", desc: "Accredited Certificates" },
];

export default function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-10">
      <div className="w-full flex flex-col items-center justify-center gap-10 p-5">
        <div className="flex flex-col items-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            01
          </p>
          <h1 className="text-8xl tracking-tighter uppercase">About</h1>
        </div>
        <p className="tracking-tight text-center text-3xl">
          Founded in 2023 and based out of Surat, Gujarat, Valiant Entech
          Private Ltd. is backed by a core team with an illustrious 25 years of
          experience in Water Treatment technologies. Our team has been
          instrumental in the founding of Asia’s largest Common Effluent
          Treatment Plant (CETP) and has led governmental delegations in
          initiatives such as the Indo-German Water Partnership and GIZ
          programs.
        </p>
        <div className="w-[80%] grid grid-cols-3 py-4">
          {aboutCred.map((cred) => (
            <div
              key={cred.id}
              className="border-r border-night/20 p-10 flex flex-col items-center gap-4 nth-[3]:border-none"
            >
              <h1 className="text-8xl tracking-tight">{cred.title}</h1>
              <p className="tracking-tight">{cred.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button>About us</Button>
        </div>
      </div>
    </section>
  );
}
