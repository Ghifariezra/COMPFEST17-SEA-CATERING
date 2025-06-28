"use client";

import Link from "next/link";
import AvatarMenu from "../Profile/Profile";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export interface LinkCompProps {
  href: string;
  text: string;
  active?: string | null;
  setActive?: (text: string) => void;
}

export default function LinkComp({ href, text, active, setActive }: LinkCompProps) {
  const { isLoggedIn, user } = useCheckAuth();

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
      <Link href={href} className={`navlink ${active === text ? "underline underline-offset-4" : ""}`} onClick={() => setActive && setActive(text)}>
        {text}
      </Link>
    </li>
  );
} 
