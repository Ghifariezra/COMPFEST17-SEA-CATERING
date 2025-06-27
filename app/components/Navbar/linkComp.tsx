"use client";

import Link from "next/link";
import { useState } from "react";
import AvatarMenu from "../Profile/Profile";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export interface LinkCompProps {
  href: string;
  text: string;
}

export default function LinkComp({ href, text }: LinkCompProps) {
  const [active, setActive] = useState<string | null>(null);
  const { isLoggedIn, user } = useCheckAuth();

  const handleNavbarItem = (item: string) => {
    setActive(item);
  };

  if (text === "Get Started") {
    return (
      <li className="navitem">
        {isLoggedIn && user ? (
          <AvatarMenu user={user} />
        ) : (
          <Link href={href} className="navbutton">
            {text}
          </Link>
        )}
      </li>
    );
  }

  return (
    <li className="navitem">
      <Link href={href} onClick={() => handleNavbarItem(text)} className={`navlink ${active === text ? "underline underline-offset-4" : ""}`}>
        {text}
      </Link>
    </li>
  );
}
