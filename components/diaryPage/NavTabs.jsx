'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavTabs = () => {
    const pathname = usePathname()
    // console.log(pathname);
    
    return (
        <div role="tablist" className="tabs tabs-lifted tabs-lg mb-5">
            <Link role="tab" className={`tab ${pathname == '/diary' && 'tab-active'}`} href='/diary'>
                Diary
            </Link>
            <Link role="tab" className={`tab ${pathname == '/diary/new-entry' && 'tab-active'}`} href='/diary/new-entry'>
                New Entry
            </Link>
        </div>
    )
}

export default NavTabs

