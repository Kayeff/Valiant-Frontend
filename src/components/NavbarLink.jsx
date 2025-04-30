import { twMerge } from "tailwind-merge";

export default function NavbarLink({ link, className }) {
  return (
    <li className="tracking-tighter">
      <a
        className={twMerge(
          "text-night/60 duration-300 hover:text-night text-sm tablet-l:text-base desktop:text-lg",
          className
        )}
        href={link.href}
      >
        {link.linkText}
      </a>
    </li>
  );
}
