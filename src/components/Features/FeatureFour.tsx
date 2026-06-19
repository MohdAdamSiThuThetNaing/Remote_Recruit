import React from "react";
import { motion } from "framer-motion";
import remoteRecruitUI from "../../assets/remote_recruit_ui.png";

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
              src={remoteRecruitUI}
              alt="RemoteRecruit Dashboard Mockup"
              className={styles.mockupImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <motion.div
          className={styles.yellowSphere}
          animate={{
            y: [0, -20, 0],
            x: [0, 8, 0, -8, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mobile & Tablet Image */}
      <div className="xl:hidden relative z-20 px-4 pt-10 flex justify-center">
        <img
          src={remoteRecruitUI}
          alt="RemoteRecruit Dashboard Mockup"
          loading="lazy"
          decoding="async"
          className="
      w-full
      max-w-[700px]
      rounded-[24px]
      shadow-[15px_44px_108px_rgba(49,89,211,0.12)]
    "
        />

        <motion.div
          className="
      absolute
      right-[10%]
      top-0
      h-[40px]
      w-[40px]
      rounded-full
      bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)]
      shadow-[0px_12px_28px_rgba(255,177,0,0.35)]
    "
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
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
    "relative min-h-[600px] md:min-h-[650px] lg:h-[610px] w-full overflow-hidden bg-[linear-gradient(132.56deg,rgba(87,153,235,0.10)_5.63%,rgba(159,116,251,0.10)_106.18%)]",

  circleTopRight:
    "absolute right-[-100px] md:right-[-120px] lg:left-[1168px] top-[-100px] md:top-[-138px] h-[220px] w-[220px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] rounded-full bg-white opacity-30",

  circleCenter:
    "absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[497px] bottom-[-180px] lg:top-[299px] h-[280px] w-[280px] md:h-[380px] md:w-[380px] lg:h-[493px] lg:w-[493px] rounded-full bg-white opacity-30",

  circleLeft:
    "absolute left-[-80px] top-[-80px] lg:left-[-85px] lg:top-[-92px] h-[180px] w-[180px] md:h-[250px] md:w-[250px] lg:h-[321px] lg:w-[321px] rounded-full bg-white opacity-30",

  greenSphere:
    "absolute left-[30px] bottom-[20px] md:left-[80px] md:bottom-[-20px] lg:left-[163px] lg:bottom-[-43px] h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[87px] lg:w-[87px] rounded-full bg-[#19CDB8]",

  imageWrapper:
    "relative h-[420px] w-[650px] xl:h-[520px] xl:w-[800px] 2xl:h-[589px] 2xl:w-[917px] rounded-[40.11px] bg-white shadow-[15.18px_44.45px_108.41px_rgba(49,89,211,0.12)]",

  innerImageWrapper:
    "absolute inset-[12px] xl:left-[18px] xl:top-[13px] xl:h-[560px] xl:w-[886px] overflow-hidden rounded-[30.35px]",

  leftColumnViewport:
    "absolute left-[-38px] top-[101px] z-20 hidden lg:flex h-[589px] w-[917px] items-end",

  mockupImage:
    "h-full w-full rounded-[40px] shadow-[15px_44px_108px_rgba(49,89,211,0.12)] object-cover xl:translate-x-[-20px]",

  yellowSphere:
    "absolute left-[55%] top-[-40px] xl:left-[491px] xl:top-[-70px] z-30 h-[53px] w-[53px] rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)] shadow-[0px_12px_28px_rgba(255,177,0,0.35)]",

  container:
    "relative z-30 mx-auto flex h-full w-full max-w-[1440px] items-center justify-center lg:justify-end px-6 md:px-10 lg:px-[100px]",

  rightColumn: "relative w-full max-w-[520px] text-center lg:text-left",

  preHeading:
    "mb-[12px] lg:mb-[14px] text-[14px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-wide text-[#1F4FA3] transition-all duration-300 ease-out cursor-pointer hover:text-[#52B4DA] hover:tracking-[0.12em] hover:drop-shadow-[0_0_12px_rgba(82,180,218,0.4)]",

  heading:
    "mb-[18px] lg:mb-[22px] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[42px] md:leading-[50px] lg:leading-[58px] text-[#0E1630]",

  subHeading:
    "mb-[28px] lg:mb-[34px] max-w-[440px] mx-auto lg:mx-0 text-[15px] lg:text-[16px] leading-[28px] lg:leading-[30px] text-[#7A889B] transition-all duration-300 ease-out cursor-pointer hover:text-[#1E3E85] hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(30,62,133,0.15)]",

  ctaButton:
    "mx-auto lg:mx-0 flex h-[54px] w-[188px] items-center gap-[14px] rounded-[30px] bg-[#CBE4FF] p-[6px] shadow-[0_6px_22px_rgba(37,87,180,0.14)] transition-all duration-200 hover:bg-[#B3D6FF]",

  iconCircle:
    "ml-[3px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#52B4DA] text-white shadow-[0_4px_12px_rgba(22,129,196,0.25)]",

  arrowIcon: "translate-x-[0.5px]",

  buttonText: "text-[15px] font-bold text-[#1E3E85] tracking-tight",

  blueSphere:
    "hidden lg:block absolute left-[1370px] top-[532px] h-[29px] w-[29px] rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]",
} as const;
