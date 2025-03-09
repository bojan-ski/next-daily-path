'use client'
import { useRouter } from 'next/navigation';
// react-icons
import { IoReturnUpBack } from "react-icons/io5";


const BackButton = () => {
  const router = useRouter();
 
  return (
    <button type="button" onClick={() => router.back()} className='btn btn-warning mb-5'>
      <IoReturnUpBack size={25}/>
    </button>
  )
}

export default BackButton