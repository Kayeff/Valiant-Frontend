import { navbar_links } from "../navbar-links";
import NavbarLink from "./NavbarLink";

export default function FooterContainer() {
  return (
    <div className="w-full bg-platinium rounded-t-2xl flex items-center justify-between flex-col gap-5 p-5 desktop:p-10">
      <div className="w-full flex items-center justify-between tablet-p:flex-row flex-col p-2 gap-2">
        <h1 className="tracking-tight text-2xl tablet-p:text-3xl">
          <span className="uppercase">Valiant</span> Entech
        </h1>
        <p className="tracking-tighter desktop:text-xl text-center tablet-p:text-end tablet-p:text-base text-sm">
          Revolutionizing Precision: Nanobubbles and Ultrasound <br /> Unveiling
          Clarity Beyond the Surface.
        </p>
      </div>
      <div className="w-full flex flex-col tablet-p:justify-between tablet-p:flex-row items-center justify-center gap-10">
        <ul className="flex flex-col items-center tablet-p:items-start gap-0.5">
          {navbar_links.map((link) => (
            <NavbarLink
              key={link.id}
              link={link}
              className="font-medium text-2xl text-night hover:underline tablet-l:text-3xl small-laptop:text-4xl desktop:text-4xl"
            />
          ))}
        </ul>
        <ul>
          <NavbarLink
            link={{ href: "#", linkText: "Instagram" }}
            className="font-medium text-2xl text-night hover:underline tablet-l:text-3xl small-laptop:text-4xl desktop:text-4xl"
          />
          <NavbarLink
            link={{ href: "#", linkText: "LinkedIn" }}
            className="font-medium text-2xl text-night hover:underline tablet-l:text-3xl small-laptop:text-4xl desktop:text-4xl"
          />
          <NavbarLink
            link={{ href: "#", linkText: "YouTube" }}
            className="font-medium text-2xl text-night hover:underline tablet-l:text-3xl small-laptop:text-4xl desktop:text-4xl"
          />
          <NavbarLink
            link={{ href: "#", linkText: "WhatsApp" }}
            className="font-medium text-2xl text-night hover:underline tablet-l:text-3xl small-laptop:text-4xl desktop:text-4xl"
          />
        </ul>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="border-t border-night/20 w-full"></div>
        <div className="w-full flex flex-col tablet-l:flex-row tablet-l:justify-between items-center justify-center gap-2 tracking-tight">
          <h1 className="text-center">©2025 VALIANT Entech Private Ltd.</h1>
          <h1 className="text-center">Privacy Policy</h1>
          <h1 className="text-center">Back to the top</h1>
        </div>
      </div>
    </div>
  );
}
