const PageHeader = ({ pageTitle }) => {
    return (
        <section className="page-header mb-4">
            <h2 className="text-center font-bold text-4xl">
                {pageTitle}
            </h2>
        </section>
    )
}

export default PageHeader