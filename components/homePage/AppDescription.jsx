import Image from "next/image";
// public
import homeImgOne from '@/public/home-img-one.jpg'
import homeImgTwo from '@/public/home-img-two.jpg'

const AppDescription = () => {
    return (
        <section className="app-desc grid grid-cols-5 gap-10 lg:text-lg items-center mb-8">

            {/* grid item 1 */}
            <div className="col-span-5 md:col-span-2 lg:col-span-3">
                <h2 className="text-4xl mb-5 lg:mb-8 font-medium">
                    Remember your day
                </h2>

                <div className="space-y-2 lg:space-y-5">
                    <p>
                        The Diary feature offers a personal space for you to document your daily experiences, reflections, and important moments. Whether you're capturing memories or keeping track of personal goals, this tool provides a seamless way to organize and reflect on your thoughts. With the ability to add text and images, you can bring your entries to life, making your diary more than just words.
                    </p>
                    <p>
                        Your entries are stored securely, allowing you to revisit and reflect on past moments anytime. Easily navigate through your diary entries, and find those special memories whenever you want. Whether you're looking for a past milestone or a recent event, the Diary feature&apos;s intuitive design makes it simple to find and explore old entries. Relive key moments with just a few clicks.
                    </p>
                    <p>
                        With a clear, organized interface, it&apos;s easy to track your progress over time, offering inspiration as you review your journey.
                    </p>
                </div>
            </div>

            <div className="col-span-4 md:col-span-3 lg:col-span-2">
                <Image src={homeImgOne} alt="home-page-img-one" className="rounded-lg" placeholder="blur" quality={80} />
            </div>

            {/* grid item 2 */}
            <div className="col-span-4 md:col-span-3 lg:col-span-2 order-last md:order-none">
                <Image src={homeImgTwo} alt="home-page-img-two" className="rounded-lg " placeholder="blur" quality={80} />
            </div>

            <div className="col-span-5 md:col-span-2 lg:col-span-3">
                <h1 className="text-4xl mb-5 lg:mb-8 font-medium">
                    Stay organized with your tasks
                </h1>

                <div className="space-y-2 lg:space-y-5">
                    <p>
                        With the Tasks feature, staying on top of your daily responsibilities has never been easier. Create new tasks in seconds, organize them by priority, and set deadlines to keep yourself on track. Whether it's a simple to-do list or a complex project, you can seamlessly manage all your tasks in one place. The intuitive design allows you to view, edit, and complete tasks without any hassle, helping you stay organized and focused throughout the day.
                    </p>
                    <p>
                        Our dynamic pagination system makes managing large task lists simple. Easily browse through your tasks page by page, so you can focus on what&apos;s important without getting overwhelmed. Whether you&apos;re working on upcoming deadlines or revisiting older tasks, the Tasks feature gives you full control.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AppDescription