import { useState } from "react";
import { navbar_links } from "../navbar-links";
import NavbarLink from "./NavbarLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-center sticky inset-0 z-30 bg-whitesmoke">
        <div className="w-full p-3 tablet-p:p-6 desktop:px-10 flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="tracking-tighter tablet-p:text-lg tablet-l:text-xl">
              <span className="uppercase">Valiant</span> Entech
            </h1>
            <ul className="hidden tablet-p:flex items-center justify-center gap-6 tablet-p:gap-4 font-medium">
              {navbar_links.map((link) => (
                <NavbarLink key={link.id} link={link} />
              ))}
            </ul>
            <button
              onClick={() => setIsMenuVisible(true)}
              className="p-2 bg-night cursor-pointer text-whitesmoke underline tablet-p:hidden text-sm"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isVisible={isMenuVisible}
        closeMenu={() => setIsMenuVisible(false)}
      />
    </>
  );
}
