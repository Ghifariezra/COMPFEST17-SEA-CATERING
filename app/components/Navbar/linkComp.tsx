import Link from "next/link";

export interface LinkCompProps {
  href: string;
  text: string;
}

export default function LinkComp({ href, text }: LinkCompProps) {
  return (
    <li className="navitem">
      {text == "Get Started" ? (
        <Link href={href} className="navbutton">
          {text}
        </Link>
      ) : (
        <Link href={href} className="navlink">
          {text}
        </Link>
      )}
    </li>
  );
}
 