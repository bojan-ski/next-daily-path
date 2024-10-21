'use client'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.back()} className='btn btn-warning mb-5'>
      Back
    </button>
  )
}

export default BackButton