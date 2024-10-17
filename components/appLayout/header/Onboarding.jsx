// components
import OnboardingOptions from "./OnboardingOptions"

const Onboarding = () => {
    return (
        <div className="onboarding m-5 pb-3 flex justify-between">
            <h2 className="mb-0 text-4xl font-bold">
                Daily Path - LOGO
            </h2>

            <OnboardingOptions/>
        </div>
    )
}

export default Onboarding