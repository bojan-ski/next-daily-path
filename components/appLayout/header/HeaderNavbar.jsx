'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
// data - links
import { navigationLinks } from "@/data/navigationLinks"

const HeaderNavbar = () => {
    const pathname = usePathname()

    return (
        <nav className="navbar-header my-3 hidden md:block">
            <ul className="flex justify-center">
                {navigationLinks.map(({ href, label, altPath }) => {
                    return <li key={href} className={`mx-28 font-bold hover:text-orange-500 ${pathname === href || pathname === altPath ? 'text-orange-500' : ''}`}>
                        <Link href={href} className='text-lg'>
                            {label}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default HeaderNavbar