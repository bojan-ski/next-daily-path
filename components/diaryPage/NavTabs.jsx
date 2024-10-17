'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavTabs = () => {
    const pathname = usePathname()

    return (
        <div className="container">
            <div role="tablist" className="tabs tabs-lifted tabs-lg mt-5 mb-14">
                <Link role="tab" className={`tab font-bold text-xl ${pathname == '/diary' && 'tab-active text-orange-500'}`} href='/diary'>
                    Diary
                </Link>
                <Link role="tab" className={`tab font-bold text-xl ${pathname == '/diary/new-entry' && 'tab-active text-orange-500'}`} href='/diary/new-entry'>
                    New Entry
                </Link>
            </div>
        </div>
    )
}

export default NavTabs

