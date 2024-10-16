const FormCustomization = ({ setCustomEntry }) => {
    return (
        <section className="new-diary-entry-form-customization mb-7">
            <div className="grid lg:grid-cols-3 gap-5">
                {/* image one toggle */}
                <div className="form-control border rounded-full p-2">
                    <label className="label cursor-pointer">
                        <span className="label-text text-black">
                            Add image option - one
                        </span>
                        <input type="checkbox" className="toggle toggle-primary" onChange={e => setCustomEntry(curState => ({
                            ...curState, imageOne: e.target.checked
                        }))} />
                    </label>
                </div>
                {/* entry content toggle */}
                <div className="form-control border rounded-full p-2">
                    <label className="label cursor-pointer">
                        <span className="label-text text-black">
                            Add new entry field
                        </span>
                        <input type="checkbox" className="toggle toggle-secondary" onChange={e => setCustomEntry(curState => ({
                            ...curState, entryContentTwo: e.target.checked
                        }))} />
                    </label>
                </div>
                {/* image two toggle */}
                <div className="form-control border rounded-full p-2">
                    <label className="label cursor-pointer">
                        <span className="label-text text-black">
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