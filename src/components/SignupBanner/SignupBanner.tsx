export default function SignupBanner() {
  return (
    <section
      className="
        bg-blue-700
        text-white
        py-16
        sm:py-20
        md:py-24
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
          text-center
        "
      >
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
          "
        >
          Join Today
        </h2>

        <p
          className="
            mt-4
            text-base
            sm:text-lg
            md:text-xl
            text-white/90
          "
        >
          Start your journey with us.
        </p>

        <button
          className="
            mt-6
            md:mt-8
            bg-white
            text-blue-700
            px-5
            sm:px-6
            py-3
            rounded-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:bg-gray-100
          "
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}
