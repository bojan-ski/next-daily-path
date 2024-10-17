const FormSubmitBtn = ({ btnTitle }) => {
    return (
        <button
            type="submit"
            className="btn bg-orange-300 hover:bg-orange-400 text-lg font-bold border-0 w-full text-white">
            {btnTitle}
        </button>
    )
}

export default FormSubmitBtn