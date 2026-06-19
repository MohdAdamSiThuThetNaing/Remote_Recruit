import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
    fixed
    bottom-6
    right-6
    z-50
    flex
    items-center
    justify-center
    w-[56px]
    h-[56px]
    rounded-full
    text-white
    text-[22px]
    font-bold
    bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]
    shadow-[10px_0px_50px_0px_rgba(49,89,211,0.28)]
    hover:-translate-y-1
    hover:scale-105
    transition-all
    duration-300
  "
    >
      ↑
    </button>
  );
}
