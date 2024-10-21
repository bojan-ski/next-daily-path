const Copyright = () => {
    const year = new Date().getFullYear()

    return (
        <div className="app-developer-rights hidden md:block">
            <p className="mb-0 font-bold text-white ">
                &copy; {year} BPdevelopment. All rights reserved.
            </p>
        </div>
    )
}

export default Copyright