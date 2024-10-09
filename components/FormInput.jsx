const FormInput = ({ label, name, type, placeholder, value, defaultValue, required, onMutate, disabled, maxLength, minLength }) => {
    return (
        <div className="col-span-full mb-2">
            <label htmlFor={name} className="mb-2 block font-medium leading-6 text-gray-900">
                {label}:
            </label>
            <input
                className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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