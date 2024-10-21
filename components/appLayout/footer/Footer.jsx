// components
import AppDeveloperRights from "./AppDeveloperRights"
import FooterNavbar from "./FooterNavbar"

const Footer = () => {
    return (
        <footer className="text-center bg-orange-300 py-4">
            <FooterNavbar />
            <AppDeveloperRights />
        </footer>
    )
}

export default Footer