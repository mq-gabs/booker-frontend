import Image from "next/image"
import logoSvg from "../public/logo.svg"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoSvg} alt="Booker Logo" />
    </Link>
  )
}
