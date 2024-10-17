const FormInput = ({ label, name, type, placeholder, value, defaultValue, required, onMutate, disabled, maxLength, minLength }) => {
    return (
        <div className="col-span-full mb-7">
            <label htmlFor={name} className="mb-2 block font-bold leading-6 text-gray-900">
                {label}:
            </label>
            <input
                className="input input-bordered w-full"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                required={required}
                onChange={onMutate}
                disabled={disabled}
                maxLength={maxLength}
                minLength={minLength} />
        </div>
    )
}

export default FormInput