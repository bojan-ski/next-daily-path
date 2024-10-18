'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
// data - links
import { navigationLinks } from "@/data/navigationLinks"

const HeaderNavbar = () => {
    const pathname = usePathname()

    return (
        <nav className="navbar-header my-3 hidden md:block">
            <ul className="flex justify-center ">
                {navigationLinks.map(({ href, label, altPath }) => {
                    return <Link
                        key={href}
                        href={href}
                        className={`mx-28 font-bold border px-16 py-2 rounded-xl text-white hover:bg-orange-500 ${pathname === href || pathname === altPath ? 'bg-orange-500' : ''}`}
                    >
                        <li href={href} className='text-2xl'>
                            {label}
                        </li>
                    </Link>
                })}
            </ul>
        </nav>
    )
}

export default HeaderNavbar