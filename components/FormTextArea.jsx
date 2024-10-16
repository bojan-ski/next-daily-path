const FormTextArea = ({ name, rows, cols, value, defaultValue, minLength, maxLength, required }) => {
    return (
        <textarea
            className="block w-full rounded-md border-0 px-3 py-1.5 mb-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name={name}
            id={name}
            rows={rows}
            cols={cols}
            value={value}
            defaultValue={defaultValue}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
        />
    )
}

export default FormTextArea