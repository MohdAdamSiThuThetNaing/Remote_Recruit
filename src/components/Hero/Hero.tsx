import { motion } from "framer-motion";
import React from "react";

const Hero = (): React.JSX.Element => {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={styles.headingTransition}
        >
          RemoteRecruit&apos;s Difference
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={styles.descriptionTransition}
        >
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there's nothing but you, your talents, and the next step
          in your career.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

const styles = {
  section:
    "relative flex min-h-[500px] md:h-[596px] w-full flex-col items-center text-white",

  container:
    "mx-auto w-full max-w-[1040px] px-5 sm:px-6 pt-[80px] sm:pt-[100px] md:pt-[117px] text-center",

  heading:
    "font-poppins text-[32px] sm:text-[42px] md:text-[53px] font-bold leading-[42px] sm:leading-[54px] md:leading-[68px] text-white",

  headingTransition: {
    duration: 0.8,
    ease: "easeOut",
  } as const,

  description:
    "mx-auto mt-[16px] max-w-[800px] text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[28px] sm:leading-[30px] md:leading-[32px] text-white/80 px-2 sm:px-0",

  descriptionTransition: {
    delay: 0.3,
    duration: 0.8,
    ease: "easeOut",
  } as const,
} as const;
