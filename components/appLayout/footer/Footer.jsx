// components
import AppDeveloperRights from "./AppDeveloperRights"
import FooterNavbar from "./FooterNavbar"

const Footer = () => {   
    return (
        <footer className="text-center bg-black py-3">
            <FooterNavbar/>
            <AppDeveloperRights/>
        </footer>
    )
}

export default Footer