import React from "react";
import { motion, type Variants } from "framer-motion";
import SectionThreeImg from "/src/assets/SectionThreeImg.png";
import avator from "../../assets/avator.png";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const floatingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
  },
};

const FeatureThree = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.layout}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={styles.sectionTransition}
      >
        {/* LEFT COLUMN CONTENT */}
        <div className={styles.leftColumn}>
          <span className={styles.badge}>Custom Profile</span>
          <h2 className={styles.heading}>Showcase Your Talents</h2>
          <p className={styles.description}>
            Personalize your profile with everything that makes you unique. Add
            an introductory video and other media for a personal touch that
            stands out to employers and candidates.
          </p>
        </div>

        {/* RIGHT COLUMN GRAPHIC COMPOSITION */}
        <div className={styles.rightColumn}>
          <motion.div
            className={styles.topLeftDot}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className={styles.graphicCanvas}>
            <div className={styles.imageWrapper}>
              <img
                src={SectionThreeImg}
                alt="Custom Profile Base"
                className={styles.graphicAsset}
                loading="lazy"
              />
            </div>

            <div className={styles.tagsContainer}>
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className={tag === "+12" ? styles.tagMore : styles.tagStatic}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.rightFloatingAvatar}>
              <img
                src={avator}
                alt="Client Portrait"
                className={styles.avatarImage}
              />
            </div>

            <motion.div
              className={styles.feedbackBanner}
              variants={floatingVariants}
            >
              <div className={styles.feedbackAvatarCircle}>
                <img
                  src={avator}
                  alt="Feedback Client Portrait"
                  className={styles.avatarImage}
                />
              </div>
              <div className="flex flex-col">
                <span className={styles.feedbackLabel}>
                  Past Client Feedback
                </span>
                <span className={styles.feedbackText}>
                  Best Developer Ever!
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureThree;

// Skill Tag Data Set
const skillTags = [
  "Python Dev",
  "Javascript",
  "Front End",
  "Back End",
  "iOS Development",
  "+12",
] as const;

const styles = {
  section:
    "mx-auto max-w-[1067px] px-5 sm:px-6 lg:px-4 mt-[80px] md:mt-[100px] lg:mt-[120px] mb-[60px]",

  layout:
    "grid grid-cols-1 lg:grid-cols-[500px_451px] items-center gap-14 lg:gap-[116px]",

  leftColumn:
    "w-full flex flex-col justify-center text-center lg:text-left order-2 lg:order-1",

  badge:
    "inline-flex self-center lg:self-start items-center rounded-full bg-[#DFF1FF] px-4 py-2 text-xs sm:text-sm font-semibold text-[#1681C4] mb-5 lg:mb-6",

  heading:
    "text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[38px] sm:leading-[46px] lg:leading-[52px] text-[#0E1630] mb-5 lg:mb-8",

  description:
    "text-[15px] sm:text-[17px] lg:text-[19px] leading-[28px] sm:leading-[32px] lg:leading-[35px] text-[#11142DA4] max-w-[500px] mx-auto lg:mx-0",

  rightColumn:
    "relative mx-auto w-full max-w-[451px] flex flex-col items-center order-1 lg:order-2",

  graphicCanvas:
    "relative w-[300px] sm:w-[355px] h-[400px] sm:h-[451px] bg-white rounded-[24px] sm:rounded-[34px] border border-[#F6F4FF] shadow-[0px_24px_48px_rgba(135,129,245,0.06)] p-6 pt-2 pb-8 flex flex-col items-center",

  imageWrapper:
    "absolute left-[16px] sm:left-[20px] top-0 w-[268px] sm:w-[315px] h-[150px] sm:h-[176px] overflow-hidden rounded-[16px]",

  graphicAsset: "h-full w-full object-cover rounded-[16px]",

  topLeftDot:
    "absolute left-[8px] top-[-12px] z-30 h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-[0_8px_20px_rgba(30,62,133,0.25)]",

  rightFloatingAvatar:
    "absolute right-[-10px] sm:right-[-24px] top-[135px] sm:top-[152px] z-30 flex h-[70px] w-[70px] sm:h-[92px] sm:w-[92px] items-center justify-center rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] p-[5px] sm:p-[6px] shadow-xl",

  avatarImage: "h-full w-full rounded-full object-cover",

  feedbackBanner:
    "absolute left-[-10px] sm:left-[-95px] top-[220px] sm:top-[232px] z-40 flex h-[65px] sm:h-[73px] w-[260px] sm:w-[352px] items-center gap-3 sm:gap-4 rounded-full bg-white px-[12px] sm:px-[16px] shadow-[14px_13px_20px_rgba(135,129,245,0.11)]",

  feedbackAvatarCircle:
    "flex h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-[4px] border-[#FFD84D] bg-white shadow-[0_8px_20px_rgba(255,216,77,0.25)]",

  feedbackLabel:
    "text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-[#243B8F]",

  feedbackText:
    "mt-[2px] text-[14px] sm:text-[17px] font-bold leading-none text-[#111827]",

  tagsContainer:
    "absolute left-[16px] sm:left-[20px] top-[300px] sm:top-[340px] z-20 flex w-[268px] sm:w-[315px] flex-wrap gap-[8px]",

  tagStatic:
    "flex h-[30px] sm:h-[32px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)] px-[10px] sm:px-[12px] text-[11px] sm:text-[12px] font-medium text-[#1E3E85]",

  tagMore:
    "flex h-[30px] sm:h-[32px] items-center justify-center whitespace-nowrap rounded-[8px] bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)] px-[10px] sm:px-[12px] text-[11px] sm:text-[12px] font-bold text-[#1681C4]",

  sectionTransition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  } as const,
};
