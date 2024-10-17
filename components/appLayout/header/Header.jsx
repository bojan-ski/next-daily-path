// components
import HeaderNavbar from "./HeaderNavbar"
import Onboarding from "./Onboarding"

const Header = () => {
  return (
    <header className="bg-orange-300">
        <Onboarding/>
        <HeaderNavbar/>
    </header>
  )
}

export default Header