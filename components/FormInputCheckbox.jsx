import Link from "next/link"

const FormInputCheckbox = ({ linkTitle, linkUrl }) => {
    return (
        <div className="d-flex align-items-center mb-3">
            <input className="form-check-input mt-0" type="checkbox" required />
            <p className="ms-3 mb-0">
                I accept:
                <Link className="ms-3" href={`/${linkUrl}`}>
                    {linkTitle}
                </Link>
            </p>
        </div>
    )
}

export default FormInputCheckbox