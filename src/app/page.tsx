import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Destinations from "./destination/page";
import About from "./about/page";
import Booking from "./booking/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Destinations />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
