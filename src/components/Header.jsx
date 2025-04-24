import NavbarLink from "./NavbarLink";

const links = [
  { id: 1, href: "#", linkText: "Products & Solutions" },
  { id: 2, href: "#", linkText: "Industries" },
  { id: 3, href: "#", linkText: "About us" },
  { id: 4, href: "#", linkText: "Resources" },
  { id: 5, href: "#", linkText: "Contact us" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center sticky inset-0 z-30 bg-whitesmoke">
      <div className="w-full p-6 flex items-center justify-center">
        <div className="flex items-center justify-between w-[95%]">
          <h1 className=" tracking-tight text-xl">Valiant Entech</h1>
          <ul className="flex items-center justify-center gap-6">
            {links.map((link) => (
              <NavbarLink key={link.id} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
