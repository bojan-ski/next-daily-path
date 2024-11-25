// components
import BackButton from '@/components/BackButton'
import PageHeader from '@/components/PageHeader'
// data 
import privacyPolicy from '@/data/termsAndConditions'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-page mt-10'>
      <div className="container">

        <BackButton />

        <PageHeader pageTitle="Privacy Policy" />

        <section className="disclaimer text-center font-bold mb-7">
          <h5>
            Privacy Policy - content has been generate using AI
          </h5>
          <h5>
            This is just for development purposes
          </h5>
        </section>

        <section className='text mb-10'>
          <ul>
            {privacyPolicy.map(paragraph => <li key={paragraph} className='mb-3'>{paragraph}</li>)}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy