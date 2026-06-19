import { memo } from "react";
import { motion } from "framer-motion";

const RAIN_DROP_COUNT = 60;

type RainDrop = {
  id: number;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
};

const RAIN_DROPS: RainDrop[] = Array.from(
  { length: RAIN_DROP_COUNT },
  (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    duration: 1.5 + Math.random() * 2,
    delay: Math.random() * 5,
    opacity: 0.15 + Math.random() * 0.4,
  })
);

const DROP_ANIMATION = {
  y: ["0vh", "120vh"],
};

const DROP_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
} as const;

function RainBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {RAIN_DROPS.map((drop) => (
        <motion.div
          key={drop.id}
          className="
            absolute
            top-[-120px]
            h-[120px]
            w-[2px]
            rounded-full
            bg-gradient-to-b
            from-transparent
            via-[#52B4DA]
            to-transparent
            blur-[1px]
          "
          style={{
            left: drop.left,
            opacity: drop.opacity,
            willChange: "transform",
          }}
          animate={DROP_ANIMATION}
          transition={{
            ...DROP_TRANSITION,
            duration: drop.duration,
            delay: drop.delay,
          }}
        />
      ))}
    </div>
  );
}

export default memo(RainBackground);
