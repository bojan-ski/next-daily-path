import Image from 'next/image'
// public - logo
import Logo from '@/public/logo.jpg'
// components
import AuthenticationOptions from "./AuthenticationOptions"
import ThemeToggle from "./ThemeToggle"

const TopHeader = () => {
    return (
        <div className="grid grid-cols-3 items-center mt-5 mx-5 mb-8">
            <div className="logo">
                <Image src={Logo} alt="logo" width={60} className='rounded-xl'/>
            </div>

            <ThemeToggle />

            <AuthenticationOptions />
        </div>
    )
}

export default TopHeader