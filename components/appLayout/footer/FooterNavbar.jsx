'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
// data - links icons
import { navigationLinksIcons } from "@/data/navigationLinkIcons";


const FooterNavbar = () => {
    const pathname = usePathname();
    
    return (
        <nav className="navbar-footer my-3 md:hidden">
            <ul className="flex justify-center">
                {navigationLinksIcons.map(({ href, icon, altPath }) => {                    
                    return <li key={href} className={`mx-24 text-4xl font-semibold text-white ${pathname === href || pathname === altPath ? 'active' : ''}`}>
                        <Link href={href}>
                            {icon}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default FooterNavbar