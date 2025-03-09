import { useFormStatus } from 'react-dom';


const FormSubmitBtn = ({ btnTitle }) => {
    const { pending } = useFormStatus();    

    return (
        <button
            type="submit"
            className="btn bg-orange-300 hover:bg-orange-400 text-lg font-bold border-0 w-full text-white"
            disabled={pending}
        >
            {btnTitle}
        </button>
    )
}

export default FormSubmitBtn