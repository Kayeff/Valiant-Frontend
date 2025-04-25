import { twMerge } from "tailwind-merge";

export default function NavbarLink({ link, className }) {
  return (
    <li className="tracking-tight">
      <a
        className={twMerge(
          "text-night/60 duration-300 hover:text-night",
          className
        )}
        href={link.href}
      >
        {link.linkText}
      </a>
    </li>
  );
}
