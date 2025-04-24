import { contactLinks } from "../contact_links";
import ContactCard from "./ContactCard";
import ContactMap from "./ContactMap";
import Form from "./Form";

export default function GetInTouch() {
  return (
    <section className="w-full p-6 flex items-center justify-center">
      <div className="w-[90%] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <p className="text-5xl tracking-tighter text-night/10 leading-5 font-semibold">
            06
          </p>
          <h1 className="text-8xl tracking-tighter uppercase">Get in touch</h1>
          <p className="tracking-tight text-center text-3xl">
            For any questions or further information, please don’t hesitate to
            contact us.
            <br /> Our team is ready to assist you.
          </p>
        </div>
        <div className="w-[90%] grid grid-cols-2 gap-5">
          <Form />
          <ContactMap />
          <div className="w-full grid grid-cols-4 col-span-2 gap-4">
            {contactLinks.map((link) => (
              <ContactCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
