// components
import BackButton from '@/components/BackButton'
import PageHeader from '@/components/PageHeader'
// data 
import privacyPolicy from '@/data/termsAndConditions'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-page mt-10'>
      <div className="container">
        <BackButton backPath='/sign-up' />

        <PageHeader pageTitle="Privacy Policy" />

        <section className='privacy-policy-page-content mb-10'>
          <div className="disclaimer text-center font-bold mb-7">
            <h5>
              Privacy Policy - content has been generate using AI
            </h5>
            <h5>
              This is just for development purposes
            </h5>
          </div>
          <ul>
            {privacyPolicy.map(paragraph => <li key={paragraph} className='mb-3'>{paragraph}</li>)}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy