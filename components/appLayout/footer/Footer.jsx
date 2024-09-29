const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="text-center bg-black py-3">
            <p className="mb-0 font-bold text-white ">
                &copy; {year} BPdevelopment. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer