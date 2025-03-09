import Link from "next/link";


const FormInputCheckbox = ({ linkTitle, linkUrl }) => {
    return (
        <div className="relative flex gap-x-3 items-center mb-2">
            <input className="h-4 w-4 rounded" type="checkbox" required />
            <p className="text-gray-500">
                I accept:
                <Link className="ms-3 hover:text-orange-300 font-bold" href={`/${linkUrl}`}>
                    {linkTitle}
                </Link>
            </p>
        </div>
    )
}

export default FormInputCheckbox