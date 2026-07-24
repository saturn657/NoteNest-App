import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import Trusted from "../components/home/Trusted";

function Home() {
  return (
    <>
     <Navbar />
<Hero />
<Trusted />
<Features />
<HowItWorks />
<CTA />
<Footer />
    </>
  );
}

export default Home;