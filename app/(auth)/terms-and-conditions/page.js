// components
import BackButton from '@/components/BackButton'
import PageHeader from '@/components/PageHeader'
// data 
import termsAndConditions from '@/data/termsAndConditions'

const TermsAndConditions = () => {
  return (
    <div className='t&c-page mt-10'>
      <div className="container">
        <BackButton backPath='/sign-up' />

        <PageHeader pageTitle="Terms & Conditions" />

        <section className='t&c-page-content mb-10'>
          <div className="disclaimer text-center font-bold mb-7">
            <h5>
              Terms & Conditions - content has been generate using AI
            </h5>
            <h5>
              This is just for development purposes
            </h5>
          </div>
          <ul>
            {termsAndConditions.map(paragraph => <li key={paragraph} className='mb-3'>{paragraph}</li>)}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions