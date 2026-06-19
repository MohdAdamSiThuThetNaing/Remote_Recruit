import FeatureCard from "../Features/FeatureCard";
import { smartFeatures } from "../../data/featureData";

export default function SmartFeatures() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="
            text-center
            text-3xl
            sm:text-4xl
            font-bold
            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          Smart Features
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {smartFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
