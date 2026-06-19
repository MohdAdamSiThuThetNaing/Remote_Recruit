import React from "react";
import { motion } from "framer-motion";

const SignUpAd: React.FC = () => {
  return (
    <section className={styles.section} id="sign-up-ad">
      <div className={styles.circleTopRight} />
      <div className={styles.circleCenter} />
      <div className={styles.circleLeft} />
      <div className={styles.greenSphere} />

      {/* LEFT CANVAS */}
      <div className={styles.leftColumnViewport}>
        <div className={styles.imageWrapper}>
          <div className={styles.innerImageWrapper}>
            <img
              src="/src/assets/remote_recruit_ui.png"
              alt="RemoteRecruit Dashboard Mockup"
              className={styles.mockupImage}
              loading="lazy"
            />
          </div>
        </div>

        <motion.div
          className={styles.yellowSphere}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
            rotate: [0, 6, 0, -6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.container}>
        <div className={styles.rightColumn}>
          <p className={styles.preHeading}>Are you ready?</p>

          <h2 className={styles.heading}>
            Help is only a few
            <br className="hidden md:inline" />
            clicks away!
          </h2>

          <p className={styles.subHeading}>
            Click Below to get set up super
            <br className="hidden md:inline" />
            quickly and find help now!
          </p>

          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className={styles.iconCircle}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrowIcon}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <span className={styles.buttonText}>Get Started</span>
          </motion.button>
        </div>
      </div>

      <motion.div
        className={styles.blueSphere}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 8, 0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default SignUpAd;

const styles = {
  section:
    "relative min-h-[650px] lg:h-[610px] w-full overflow-hidden bg-[linear-gradient(132.56deg,rgba(87,153,235,0.10)_5.63%,rgba(159,116,251,0.10)_106.18%)]",

  circleTopRight:
    "absolute right-[-120px] top-[-120px] h-[220px] w-[220px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] rounded-full bg-white opacity-30",

  circleCenter:
    "absolute left-1/2 bottom-[-180px] -translate-x-1/2 h-[280px] w-[280px] md:h-[380px] md:w-[380px] lg:h-[493px] lg:w-[493px] rounded-full bg-white opacity-30",

  circleLeft:
    "absolute left-[-100px] top-[-80px] h-[180px] w-[180px] md:h-[250px] md:w-[250px] lg:h-[321px] lg:w-[321px] rounded-full bg-white opacity-30",

  greenSphere:
    "absolute left-[30px] bottom-[30px] md:left-[80px] lg:left-[163px] h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[87px] lg:w-[87px] rounded-full bg-[#19CDB8]",

  container:
    "relative z-30 mx-auto flex h-full max-w-[1440px] items-center justify-center lg:justify-end px-6 md:px-10 lg:px-[100px] py-16 lg:py-0",

  rightColumn: "relative w-full max-w-[520px] text-center lg:text-left",

  preHeading:
    "mb-3 text-[14px] md:text-[16px] font-bold uppercase tracking-wide text-[#1F4FA3]",

  heading:
    "mb-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-[#0E1630]",

  subHeading:
    "mb-8 text-[15px] md:text-[16px] leading-[28px] md:leading-[30px] text-[#7A889B] max-w-[440px] mx-auto lg:mx-0",

  ctaButton:
    "mx-auto lg:mx-0 flex h-[54px] w-[188px] items-center gap-[14px] rounded-[30px] bg-[#CBE4FF] p-[6px] shadow-[0_6px_22px_rgba(37,87,180,0.14)]",

  iconCircle:
    "ml-[3px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#52B4DA] text-white",

  arrowIcon: "translate-x-[0.5px]",

  buttonText: "text-[15px] font-bold text-[#1E3E85] tracking-tight",

  leftColumnViewport:
    "absolute left-[-60px] bottom-0 z-20 hidden lg:flex w-[700px] xl:w-[850px] 2xl:w-[917px] items-end",

  imageWrapper:
    "relative w-full rounded-[40px] bg-white shadow-[15px_44px_108px_rgba(49,89,211,0.12)]",

  innerImageWrapper: "overflow-hidden rounded-[30px]",

  mockupImage: "w-full h-auto object-cover",

  yellowSphere:
    "absolute left-[55%] top-[-40px] z-30 h-[53px] w-[53px] rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)] shadow-[0px_12px_28px_rgba(255,177,0,0.35)]",

  blueSphere:
    "absolute right-[420px] bottom-[40px] h-[29px] w-[29px] rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]",
} as const;
