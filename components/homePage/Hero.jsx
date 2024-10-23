import Image from "next/image"
// public
import HeroImg from '@/public/hero.jpg'

const Hero = () => {
    return (
        <section className="hero relative mb-8">
            <Image src={HeroImg} alt="hero" className="hero-img object-cover object-top" fill placeholder="blur" quality={80} />

            <div className="relative z-10 text-center text-orange-600">
                <h1 className="text-7xl mb-10">
                    Organize your day
                </h1>
                <h2 className="text-5xl">
                    with
                    <span className="ms-3 text-7xl font-bold">
                        DAILY PATH
                    </span>
                </h2>
            </div>
        </section>
    )
}

export default Hero