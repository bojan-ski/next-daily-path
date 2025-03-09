import Link from "next/link";


function NotFound() {
    return (
        <div className='not-found-page text-center space-y-6 mt-40'>
            <h1 className='text-5xl font-semibold mb-7'>
                The page you are looking for could not be found 
            </h1>
            <Link href='/' className='btn bg-orange-300 hover:bg-orange-400 text-white text-xl'>
                Go back to the Home page
            </Link>
        </div>
    );
}

export default NotFound;  