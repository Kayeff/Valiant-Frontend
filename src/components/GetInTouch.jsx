import { contactLinks } from "../contact_links";
import ContactCard from "./ContactCard";
import Form from "./Form";
import Section from "./Section";

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
      <div className="w-[90%] grid grid-cols-2 gap-5">
        <Form />
        <div className="w-full grid grid-cols-4 col-span-2 gap-4">
          {contactLinks.map((link) => (
            <ContactCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </Section>
  );
}
