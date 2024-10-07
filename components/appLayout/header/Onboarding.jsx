// components
import OnboardingOptions from "./OnboardingOptions"

const Onboarding = () => {
    return (
        <div className="onboarding mx-5 my-3 flex justify-between">
            <h2 className="mb-0 text-2xl font-bold">
                Daily Path
            </h2>

            <OnboardingOptions/>
        </div>
    )
}

export default Onboarding