'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
// data - links
import { navigationLinks } from "@/data/navigationLinks"

const Navbar = () => {
    const pathname = usePathname() 

    return (
        <nav className="navbar-header my-3">
            <ul className="flex justify-center">
                {navigationLinks.map(navigationLink => {                    
                    return <li key={navigationLink.label} className={`mx-28 font-semibold ${pathname == navigationLink.href ? 'text-orange-500' : ''}`}>
                        <Link href={navigationLink.href}>
                            {navigationLink.label}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navbar