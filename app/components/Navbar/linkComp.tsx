import Link from "next/link";

export interface LinkCompProps {
  href: string;
  text: string;
}

export default function LinkComp({ href, text }: LinkCompProps) {
  return (
    <li>
      {text == "Get Started" ? (
        <Link href={href} className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          {text}
        </Link>
      ) : (
        <Link href={href} className="text-white bg-gray-800 rounded-lg hover:underline hover:underline-offset-4
        transition-all duration-300">
          {text}
        </Link>
      )}
    </li>
  );
}
