import Link from "next/link";

function NotFound() {
    return (
        <div className='not-found-page text-center space-y-6 mt-40'>
            <h1 className='text-5xl font-semibold mb-7'>
                This page could not be found 
            </h1>
            <Link href='/' className='btn btn-primary text-xl'>
                Go back to the Home page
            </Link>
        </div>
    );
}

export default NotFound;  