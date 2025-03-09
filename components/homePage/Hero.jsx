import Image from "next/image";
// public
import HeroImg from '@/public/hero.jpg';


const Hero = () => {
    return (
        <section className="hero relative mb-8">
            <Image src={HeroImg} alt="hero" className="hero-img object-cover object-top" fill placeholder="blur" quality={80} />

            <div className="relative z-10 text-center text-orange-600">
                <h2 className="text-8xl mb-10">
                    Organize your day
                </h2>
                <h3 className="text-6xl mb-10">
                    with
                </h3>
                <h1 className="text-8xl font-bold">
                    DAILY PATH
                </h1>
            </div>
        </section>
    )
}

export default Hero