import AboutSection from "@/components/home/AboutSection";
import AdTopCar from "@/components/home/AdTopCar";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import FeaturedCars from "@/components/home/FeaturedCars";
import MarqueeSlider from "@/components/home/MarqueeSlider";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSlider />
      <AboutSection />
      <FeaturedCars />
      <AdTopCar />
      <Contact />
    </div>
  );
}
