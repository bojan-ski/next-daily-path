// components
import Hero from "@/components/homePage/Hero"
import AppDescription from "@/components/homePage/AppDescription"

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      <div className="container">
        <AppDescription />
      </div>
    </div>
  )
}

export default Home