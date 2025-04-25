import { navbar_links } from "../navbar-links";
import NavbarLink from "./NavbarLink";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center sticky inset-0 z-30 bg-whitesmoke">
      <div className="w-full p-6 flex items-center justify-center">
        <div className="flex items-center justify-between w-[95%]">
          <h1 className="tracking-tight text-xl">
            <span className="uppercase">Valiant</span> Entech
          </h1>
          <ul className="flex items-center justify-center gap-6 font-medium">
            {navbar_links.map((link) => (
              <NavbarLink key={link.id} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
