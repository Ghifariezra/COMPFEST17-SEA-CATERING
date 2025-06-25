import LinkComp from "./linkComp";
import Link from "next/link";

const links = [
  { href: "/", text: "Home" },
  { href: "/menu", text: "Menu / Meal Plans" },
  { href: "/subscriptions", text: "Subscriptions" },
  { href: "/contact", text: "Contact" },
  { href: "/get-started", text: "Get Started" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="text-2xl font-bold cursor-pointer">SEA Catering</Link>
      <ul className="flex space-x-4 gap-4">
        {links.map((link) => (
          <LinkComp key={link.href} href={link.href} text={link.text} />
        ))}
      </ul>
    </nav>
  );
}