import Details from "./components/DetailsSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import HorizontalScrollCarousel from "./components/StatsScroll"
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
    <Helmet>
        <title>Your Sport Your World</title>
    </Helmet>
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
