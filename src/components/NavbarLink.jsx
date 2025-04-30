import { twMerge } from "tailwind-merge";

export default function NavbarLink({ link, className }) {
  return (
    <li className="tracking-tighter group-hover:text-night/60">
      <a
        className={twMerge(
          "duration-300 hover:text-night text-sm tablet-l:text-base desktop:text-lg",
          className
        )}
        href={link.href}
      >
        {link.linkText}
      </a>
    </li>
  );
}
