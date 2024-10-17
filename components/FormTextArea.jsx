const FormTextArea = ({ name, rows, cols, value, defaultValue, minLength, maxLength, required }) => {
    return (
        <textarea
            className="textarea textarea-bordered w-full mb-7"
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