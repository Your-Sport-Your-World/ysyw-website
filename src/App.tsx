import Details from "./components/DetailsSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import HorizontalScrollCarousel from "./components/StatsScroll"

function App() {

  return (
    <>
       <Navbar />
       <Hero/> 
       <Details/>
       <HorizontalScrollCarousel/>
       {/* <Hero/>  */}
       <img src="/image.png" alt="" className="h-screen w-screen"/>
      
    </>
  )
}

export default App
