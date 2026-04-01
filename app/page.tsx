import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import MarqueeSlider from "@/components/home/MarqueeSlider";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeSlider />
      <AboutSection />
    </div>
  );
}
