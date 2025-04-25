import { navbar_links } from "../navbar-links";
import NavbarLink from "./NavbarLink";

export default function FooterContainer() {
  return (
    <div className="w-full bg-platinium rounded-2xl">
      <div className="w-full flex items-start justify-between p-10">
        <h1 className="tracking-tight text-2xl">
          <span className="uppercase">Valiant</span> Entech
        </h1>
        <p className="tracking-tight text-xl text-end">
          Revolutionizing Precision: Nanobubbles and Ultrasound <br /> Unveiling
          Clarity Beyond the Surface.
        </p>
      </div>
      <div className="w-full flex items-start justify-between p-10">
        <ul className="flex flex-col gap-0.5">
          {navbar_links.map((link) => (
            <NavbarLink
              key={link.id}
              link={link}
              className="font-medium text-3xl text-night hover:underline"
            />
          ))}
        </ul>
        <ul>
          <NavbarLink
            link={{ href: "#", linkText: "Instagram" }}
            className="font-medium text-3xl text-night hover:underline"
          />
          <NavbarLink
            link={{ href: "#", linkText: "LinkedIn" }}
            className="font-medium text-3xl text-night hover:underline"
          />
          <NavbarLink
            link={{ href: "#", linkText: "YouTube" }}
            className="font-medium text-3xl text-night hover:underline"
          />
          <NavbarLink
            link={{ href: "#", linkText: "WhatsApp" }}
            className="font-medium text-3xl text-night hover:underline"
          />
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4 px-10">
        <div className="border-t border-night/20 w-full"></div>
        <div className="w-full flex items-center justify-between py-5 tracking-tight">
          <h1>©2025 VALIANT Entech Private Ltd. All Rights Reserved.</h1>
          <h1>Privacy Policy</h1>
          <h1>Back to the top</h1>
        </div>
      </div>
    </div>
  );
}
