'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { HomeIcon, CalendarDaysIcon, ClockIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";

const menuRoutes = [
  {
    id: 0,
    name: "Home",
    Icon: HomeIcon,
    href: "/"
  },
  {
    id: 1,
    name: "Agenda",
    Icon: CalendarDaysIcon,
    href: "/agenda"
  },
  {
    id: 2,
    name: "Horários",
    Icon: ClockIcon,
    href: "/scheduling"
  },
  {
    id: 3,
    name: "Configurações",
    Icon: Cog6ToothIcon,
    href: "/settings"
  },
  {
    id: 4,
    name: "Usuário",
    Icon: UserIcon,
    href: "/user"
  },
]
export default function Menu() {
  const pathname = usePathname()
  return (
    <div>
      <nav>
        <ul className="flex flex-col gap-4">
          {menuRoutes.map(({ id, name, Icon, href }) => (
            <li key={id}>
              <Link className={clsx({
                "text-gray hover:!bg-gray-dark p-2 w-full inline-block rounded-lg": true,
                "bg-prim-lighter text-prim": href === pathname
              })} href={href}>
                <div className="flex gap-2 items-center">
                  <Icon className="h-[24px]"/>
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
