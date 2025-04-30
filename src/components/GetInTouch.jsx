import { contactLinks } from "../contact_links";
import ContactCard from "./ContactCard";
import Form from "./Form";
import Section from "./Section";
import water from "../assets/water.webp";

export default function GetInTouch() {
  return (
    <Section
      number="06"
      title="Get in touch"
      description={
        <>
          For any questions or further information, please don’t hesitate to
          contact us.
          <br /> Our team is ready to assist you.
        </>
      }
    >
      <div className="w-full small-laptop:w-[80%] grid grid-cols-1 tablet-p:grid-cols-2 gap-4">
        <Form />
        <div className="w-full items-center justify-center flex">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={water}
            alt="waterIMg"
            loading="lazy"
          />
        </div>
        <div className="w-full grid grid-cols-1 tablet-p:grid-cols-2 desktop:grid-cols-4 tablet-p:col-span-2 gap-5">
          {contactLinks.map((link) => (
            <ContactCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </Section>
  );
}
