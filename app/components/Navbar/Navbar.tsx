"use client";
import { useState } from "react";
import LinkComp from "./linkComp";
import { LinkCompProps } from "../../types/Navbar";
import Link from "next/link";
import ToggleMenu from "../ToggleMenu/Toggle";

const links: LinkCompProps[] = [
  { href: "/", text: "Home" },
  { href: "/menu", text: "Menu / Meal Plans" },
  { href: "/subscriptions", text: "Subscriptions" },
  { href: "/#contact", text: "Contact" },
  { href: "/get-started", text: "Get Started" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar sticky top-0 z-50">
      <div className="wrapper-navbar flex flex-row items-center justify-between w-full">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          SEA Catering
        </Link>
        {/* Desktop Menu */}
        <ul className="wrapper-links">
          {links.map((link) => (
            <LinkComp key={link.href} href={link.href} text={link.text} active={active} setActive={setActive} />
          ))}
        </ul>
        <ToggleMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {links.map((link) => (
            <LinkComp key={link.href} href={link.href} text={link.text} active={active} setActive={setActive} />
          ))}
        </ul>
      )}
    </nav>
  );
}
