"use client";
import { useState } from "react";
import LinkComp from "./linkComp";
import Link from "next/link";
import ToggleMenu from "../ToggleMenu/Toggle";

const links = [
  { href: "/", text: "Home" },
  { href: "/menu", text: "Menu / Meal Plans" },
  { href: "/subscriptions", text: "Subscriptions" },
  { href: "/contact", text: "Contact" },
  { href: "/get-started", text: "Get Started" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link href="/" className="text-2xl font-bold cursor-pointer">
        SEA Catering
      </Link>
      <ul className="wrapper-links">
        {links.map((link) => (
          <LinkComp key={link.href} href={link.href} text={link.text} />
        ))}
      </ul>
      <ToggleMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
