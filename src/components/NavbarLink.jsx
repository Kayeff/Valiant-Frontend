export default function NavbarLink({ link }) {
  return (
    <li className="tracking-tight">
      <a
        className="text-night/60 duration-300 hover:text-night"
        href={link.href}
      >
        {link.linkText}
      </a>
    </li>
  );
}
