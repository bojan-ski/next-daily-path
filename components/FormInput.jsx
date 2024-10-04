const FormInput = ({ label, name, type, placeholder, value, required, onMutate, disabled, maxLength, minLength }) => {
    return (
        <div className="col-span-full mb-5">
            <label htmlFor={name} className="mb-3 block text-sm font-medium leading-6 text-gray-900">
                {label}:
            </label>
            <input
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onMutate}
                disabled={disabled}
                maxLength={maxLength}
                minLength={minLength} />
        </div>
    )
}

export default FormInput