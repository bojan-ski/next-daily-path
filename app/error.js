"use client"

const Error = ({ error, reset }) => {
    return (
        <div className='error-page mt-40'>
            <div className="container flex justify-center items-center flex-col gap-6">
                <h1 className='text-5xl font-semibold'>
                    Something went wrong!
                </h1>
                <p className='text-lg mb-7'>
                    {error.message}
                </p>

                <button className='btn btn-warning text-xl' onClick={reset}>
                    Try again
                </button>
            </div>
        </div>
    )
}

export default Error