const FormCustomization = ({ setCustomEntry }) => {
    return (
        <section className="new-diary-entry-form-customization mb-7">
            <div className="grid lg:grid-cols-3 gap-5">
                {/* image one toggle */}
                <div className="form-control border border-orange-300 rounded-full px-4 py-2">
                    <label className="label cursor-pointer">
                        <span className="label-text">
                            Add image - size 1MB max
                        </span>
                        <input type="checkbox" className="toggle toggle-primary" onChange={e => setCustomEntry(curState => ({
                            ...curState, imageOne: e.target.checked
                        }))} />
                    </label>
                </div>

                {/* entry content toggle */}
                <div className="form-control border border-orange-300 rounded-full px-4 py-2">
                    <label className="label cursor-pointer">
                        <span className="label-text">
                            Add image - size 1MB max
                        </span>
                        <input type="checkbox" className="toggle toggle-secondary" onChange={e => setCustomEntry(curState => ({
                            ...curState, entryContentTwo: e.target.checked
                        }))} />
                    </label>
                </div>
                
                {/* image two toggle */}
                <div className="form-control border border-orange-300 rounded-full px-4 py-2">
                    <label className="label cursor-pointer">
                        <span className="label-text">
                            Add image option - two
                        </span>
                        <input type="checkbox" className="toggle toggle-accent" onChange={e => setCustomEntry(curState => ({
                            ...curState, imageTwo: e.target.checked
                        }))} />
                    </label>
                </div>
            </div>
        </section>
    )
}

export default FormCustomization