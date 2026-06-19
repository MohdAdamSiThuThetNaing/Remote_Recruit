import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <header
      className="
        w-full
        h-[80px]
        md:h-[108px]
      "
    >
      <div
        className="
          mx-4
          sm:mx-6
          md:mx-[51px]
          h-[50px]
          flex
          items-center
          justify-between
          relative
          top-[15px]
          md:top-[29px]
        "
      >
        {/* Logo */}
        <img
          src={logo}
          alt="RemoteRecruit logo"
          loading="eager"
          decoding="async"
          width={123}
          height={50}
          className="
    w-[100px]
    sm:w-[110px]
    md:w-[123px]
    h-auto
    object-contain
  "
        />

        {/* Navigation */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:gap-5
            md:gap-[32px]
          "
        >
          {/* Sign In */}
          <button
            className="
              font-poppins
              font-semibold
              text-[12px]
              sm:text-[13px]
              md:text-[14px]
              leading-[18px]
              tracking-[0.4px]
              text-[#F5F7FE]
              transition-opacity
              duration-300
              hover:opacity-80
            "
          >
            Sign In
          </button>

          {/* Sign Up */}
          <button
            className="
              w-[80px]
              sm:w-[88px]
              md:w-[92px]
              h-[40px]
              md:h-[44px]
              rounded-full
              bg-[#4DA8CCE5]
              flex
              items-center
              justify-center
              font-poppins
              font-semibold
              text-[12px]
              md:text-[14px]
              leading-[18px]
              tracking-[0.4px]
              text-[#F5F7FE]
              transition-all
              duration-300
              hover:bg-[#4DA8CC]
              hover:scale-105
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
