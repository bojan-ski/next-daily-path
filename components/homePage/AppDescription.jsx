import Image from "next/image";
// components
import AppDescColOne from "./AppDescColOne";
import AppDescColTwo from "./AppDescColTwo";
// public
import homeImgOne from '@/public/home-img-one.jpg';
import homeImgTwo from '@/public/home-img-two.jpg';


const AppDescription = () => {
    return (
        <section className="app-desc grid grid-cols-5 gap-10 lg:text-lg items-center mb-8">

            {/* grid item 1 */}
            <div className="col-span-5 md:col-span-2 lg:col-span-3">
                <AppDescColOne />
            </div>

            <div className="col-span-4 md:col-span-3 lg:col-span-2">
                <Image src={homeImgOne} alt="home-page-img-one" className="rounded-lg" placeholder="blur" quality={80} />
            </div>

            {/* grid item 2 */}
            <div className="col-span-4 md:col-span-3 lg:col-span-2 order-last md:order-none">
                <Image src={homeImgTwo} alt="home-page-img-two" className="rounded-lg" placeholder="blur" quality={80} />
            </div>

            <div className="col-span-5 md:col-span-2 lg:col-span-3">
                <AppDescColTwo />
            </div>
        </section>
    )
}

export default AppDescription