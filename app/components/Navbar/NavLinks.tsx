import LinkComp, { LinkCompProps } from "./linkComp";

const links: LinkCompProps[] = [
  { href: "/", text: "Home" },
  { href: "/menu", text: "Menu / Meal Plans" },
  { href: "/subscriptions", text: "Subscriptions" },
  { href: "/#contact", text: "Contact" },
  { href: "/get-started", text: "Get Started" },
];

export default function NavbarLinks() {
  return (
    <>
      {links.map((link) => (
        <LinkComp key={link.href} href={link.href} text={link.text} />
      ))}
    </>
  );
}
