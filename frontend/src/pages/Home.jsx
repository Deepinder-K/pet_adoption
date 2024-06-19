import Slider from "../components/home/Slider.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import TopSection from "../components/home/TopSection.jsx";
import BottomSection from "../components/home/BottomSection.jsx";
import AdoptionSection from "../components/home/AdoptionSection.jsx";

function Home() {
  return (
    <>
      <Slider />
      <TopSection />
      <AdoptionSection />
      <BottomSection />
      <NewsLetter />
    </>
  );
}

export default Home;
