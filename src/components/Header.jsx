import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-center sticky inset-0 z-30 bg-whitesmoke">
        <div className="w-full p-3 tablet-p:p-6 desktop:px-10 flex items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="tracking-tighter tablet-p:text-lg tablet-l:text-xl small-laptop:text-2xl">
              <span className="uppercase">Valiant</span> Entech
            </h1>
            <button
              onClick={() => setIsMenuVisible(true)}
              className="p-2 bg-night cursor-pointer text-whitesmoke underline text-sm small-laptop:text-lg"
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
