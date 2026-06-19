export interface Props {
  title: string;
  description: string;
}

/**
 * Reusable feature card component.
 */
export default function FeatureCard({
  title,
  description,
}: Readonly<Props>): React.JSX.Element {
  return (
    <div
      className="
        p-5 sm:p-6 lg:p-8
        rounded-xl lg:rounded-2xl
        bg-white
        shadow-lg
        hover:shadow-xl
        hover:-translate-y-2
        transition-all duration-300
        h-full
      "
    >
      <h3
        className="
          font-bold
          text-lg
          sm:text-xl
          lg:text-2xl
          mb-2
          lg:mb-3
          text-[#0E1630]
        "
      >
        {title}
      </h3>

      <p
        className="
          text-sm
          sm:text-base
          leading-6
          text-gray-600
        "
      >
        {description}
      </p>
    </div>
  );
}
