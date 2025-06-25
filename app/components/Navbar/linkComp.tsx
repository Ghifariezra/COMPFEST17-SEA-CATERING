"use client;";

import Link from "next/link";
import { useState } from "react";

export interface LinkCompProps {
  href: string;
  text: string;
}

export default function LinkComp({ href, text }: LinkCompProps) {
  const [active, setActive] = useState<string | null>(null);

  const handleNavbarItem = (item: string) => {
    setActive(item);
  };

  return (
    <li className="navitem">
      {text == "Get Started" ? (
        <Link href={href} className="navbutton">
          {text}
        </Link>
      ) : (
        <Link href={href} onClick={() => handleNavbarItem(text)} className={`navlink ${active === text ? "underline underline-offset-4" : ""}`}>
          {text}
        </Link>
      )}
    </li>
  );
}
