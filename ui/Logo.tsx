import Image from "next/image"
import logoSvg from "../public/logo.svg"

export default function Logo() {
  return (
    <Image src={logoSvg} />
  )
}
