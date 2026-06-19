import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeatureOne from "../components/Features/FeatureOne";
import FeatureTwo from "../components/Features/FeatureTwo";
import FAQ from "../components/FAQ/FAQ";
import SignupBanner from "../components/SignupBanner/SignupBanner";
import SmartFeatures from "../components/SmartFeatures/SmartFeatures";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

import heroBg from "../assets/Hero_Background.png";

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="
          relative
          w-full
          min-h-[600px]
          md:min-h-[650px]
          lg:min-h-[704px]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Navbar />
        <Hero />
      </section>

      {/* Main Content */}
      <main className="w-full">
        <FeatureOne />

        <FeatureTwo />

        <FAQ />

        <SignupBanner />

        <SmartFeatures />

        <Footer />
      </main>

      <ScrollTop />
    </div>
  );
}
