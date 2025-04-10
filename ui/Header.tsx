import Logo from "./Logo"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-dark border-b border-gray h-[70px] flex items-center p-4">
      <div className="flex justify-between w-full">
        <Logo />
        <div>
          <button className="hover:bg-gray-dark p-2 cursor-pointer rounded-lg"><ArrowLeftEndOnRectangleIcon className="text-prim  w-[24px]"/></button>
        </div>
      </div>
    </header> 
  )
}
