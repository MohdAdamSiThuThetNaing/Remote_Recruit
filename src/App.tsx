import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeatureOne from "./components/Features/FeatureOne";
import FeatureTwo from "./components/Features/FeatureTwo";
import FeatureThree from "./components/Features/FeatureThree";
import FeatureFour from "./components/Features/FeatureFour";
import CommonQuestions from "./components/Features/CommonQuestion";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop.tsx";

import backgroundSvg from "./assets/Background.svg";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="
          relative
          w-full
          min-h-[560px]
          sm:min-h-[620px]
          lg:min-h-[704px]
          overflow-hidden
        "
      >
        <img
          src={backgroundSvg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "
        />

        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* Content */}
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <CommonQuestions />
      <Footer />

      <ScrollTop />
    </div>
  );
}

export default App;
