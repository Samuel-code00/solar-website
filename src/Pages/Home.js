import Header from "../components/Header/Header";
import Hero from "../components/HERO1/Hero";
import Footer from "../components/Footer/Footer";
import Quote from "../components/Service/qoute";
// import Carousals from "../components/carousal/Carousel";
export default function Home() {
    return(
        <div>
           <Header/>
           {/* <Carousals/> */}
           <Hero/>
           <Quote/>
           <Footer/>
        </div>
    )
}