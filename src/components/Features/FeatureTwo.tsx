import {
  motion,
  type Variants,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

import logo from "../../assets/remoterecruit-logo.png";
import PaypalMark from "../../assets/paypal-mark.svg";

const FEATURES = [
  "Up to 25 active job posts",
  "Premium Placement & Visibility",
  "Messaging anyone, unlimited",
  "Unlimited invites",
  "View all applicants",
  "Unlimited invites to jobseekers",
] as const;

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.2,
} as const;

const HOVER_TRANSITION: Transition = {
  duration: 0.3,
};

const SECTION_TRANSITION: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const CARD_TRANSITION: Transition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const PAYMENT_TRANSITION: Transition = {
  delay: 0.18,
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const ACCENT_DOT_ANIMATION: TargetAndTransition = {
  y: [0, -10, 0],
  scale: [1, 1.15, 1],
  rotate: [0, 10, 0, -10, 0],
};

const ACCENT_DOT_TRANSITION: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const LOGO_FLOAT_ANIMATION: TargetAndTransition = {
  y: [0, -15, 0],
};

const LOGO_FLOAT_TRANSITION: Transition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

const BADGE_HOVER: TargetAndTransition = {
  scale: 1.08,
  y: -3,
  boxShadow: "0 10px 25px rgba(82,180,218,0.25)",
};

const HEADING_HOVER: TargetAndTransition = {
  scale: 1.03,
  color: "#1681C4",
  textShadow: "0 0 20px rgba(82,180,218,0.25)",
};

const DESCRIPTION_HOVER: TargetAndTransition = {
  scale: 1.02,
  y: -2,
};

const PAYMENT_HOVER: TargetAndTransition = {
  y: -8,
  scale: 1.03,
  boxShadow: "0px 25px 60px rgba(49,89,211,0.20)",
};

const PAYMENT_TAP: TargetAndTransition = {
  scale: 0.98,
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

function FeatureTwo() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.layout}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        variants={sectionVariants}
        transition={SECTION_TRANSITION}
      >
        <motion.div
          className={styles.leftColumn}
          whileHover={{
            rotateY: -4,
            rotateX: 2,
            scale: 1.015,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className={styles.accentDot}
            animate={ACCENT_DOT_ANIMATION}
            transition={ACCENT_DOT_TRANSITION}
          />

          <motion.article
            className={styles.card}
            variants={cardVariants}
            transition={CARD_TRANSITION}
          >
            <header className={styles.header}>
              <p className={styles.headerLabel}>Your Membership Tier</p>
              <h2 className={styles.headerTitle}>Premium</h2>
            </header>

            <div className={styles.featuresSection}>
              <p className={styles.featuresLabel}>FEATURES</p>

              <ul className={styles.featureList}>
                {FEATURES.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span aria-hidden="true" className={styles.checkIcon}>
                      <CheckIcon />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.img
              src={logo}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={140}
              height={140}
              className={styles.floatingLogo}
              animate={LOGO_FLOAT_ANIMATION}
              transition={LOGO_FLOAT_TRANSITION}
            />
          </motion.article>

          <motion.div
            className={styles.paymentBadge}
            variants={cardVariants}
            transition={PAYMENT_TRANSITION}
            whileHover={PAYMENT_HOVER}
            whileTap={PAYMENT_TAP}
          >
            <div className={styles.paymentLogo}>
              <img
                src={PaypalMark}
                alt="PayPal payment method"
                loading="lazy"
                decoding="async"
                width={36}
                height={36}
                className="h-[36px] w-[36px] object-contain"
              />
            </div>

            <div>
              <p className={styles.paymentLabel}>Upcoming Payment In...</p>

              <p className={styles.paymentAmount}>14 Days - $79.99</p>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.rightColumn}>
          <motion.span
            className={styles.badge}
            whileHover={BADGE_HOVER}
            transition={HOVER_TRANSITION}
          >
            Actually Fee Free
          </motion.span>

          <motion.h3
            className={styles.heading}
            whileHover={HEADING_HOVER}
            transition={HOVER_TRANSITION}
          >
            Fee-Free Forever
          </motion.h3>

          <motion.p
            className={styles.description}
            whileHover={DESCRIPTION_HOVER}
            transition={HOVER_TRANSITION}
          >
            We don&apos;t charge you fees and we don&apos;t put up paywalls.
            We&apos;re the bridge that connects job opportunities with the best
            candidates, with no middleman involved.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default FeatureTwo;

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.checkSvg}
    >
      <path
        d="M13.333 4.667L6.667 11.333L3.333 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const styles = {
  section: "mx-auto w-full px-5 sm:px-6 lg:px-4 mt-[80px] lg:mt-[120px]",

  layout:
    "mx-auto max-w-[1067px] grid grid-cols-1 lg:grid-cols-[454px_1fr] items-center gap-16 lg:gap-[72px]",

  leftColumn:
    "relative mx-auto w-full max-w-[451px] h-[500px] sm:h-[540px] lg:h-[454px]",

  accentDot:
    "absolute left-[20px] sm:left-[60px] lg:left-[84px] top-[8px] h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#4FA1D3_0%,#2D71B8_100%)] shadow-[0px_8px_18px_rgba(46,111,176,0.25)]",

  card: [
    "absolute",
    "left-1/2",
    "-translate-x-1/2",
    "lg:left-[124px]",
    "lg:translate-x-0",
    "top-[34px]",
    "w-[300px]",
    "sm:w-[355px]",
    "min-h-[460px]",
    "sm:min-h-[500px]",
    "rounded-[28px]",
    "sm:rounded-[34px]",
    "border",
    "border-[#EEF2FF]",
    "bg-white",
    "px-5",
    "sm:px-[24px]",
    "pt-5",
    "sm:pt-[22px]",
    "shadow-[0px_22px_56px_rgba(120,136,255,0.10)]",
  ].join(" "),

  header: "space-y-2",

  headerLabel:
    "text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-[#7C8091]",

  headerTitle:
    "text-[19px] sm:text-[21px] font-bold leading-[25px] text-[#4AA0D3]",

  featuresSection: "mt-[24px]",

  featuresLabel: "text-[10px] font-bold tracking-[0.28em] text-[#9AA0AF]",

  featureList: "mt-[14px] space-y-[14px] sm:space-y-[17px]",

  featureItem:
    "flex items-start gap-[12px] text-[12px] sm:text-[13px] font-medium leading-[22px] text-[#4A4F63]",

  checkIcon:
    "mt-[2px] inline-flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#5A9DCF_0%,#2E6FB3_100%)] text-white",

  checkSvg: "h-[9px] w-[9px]",

  floatingLogo:
    "absolute right-[-30px] sm:right-[-55px] lg:right-[-70px] top-[90px] z-20 h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px]",

  paymentBadge: [
    "absolute",
    "-bottom-[35px]",
    "left-1/2",
    "-translate-x-1/2",
    "lg:left-[-10px]",
    "lg:translate-x-0",
    "z-20",
    "flex",
    "h-[70px]",
    "sm:h-[76px]",
    "w-[280px]",
    "sm:w-[314px]",
    "items-center",
    "gap-[12px]",
    "rounded-full",
    "bg-white",
    "px-[14px]",
    "shadow-[0px_18px_45px_rgba(120,136,255,0.16)]",
  ].join(" "),

  paymentLogo:
    "flex h-[52px] w-[52px] sm:h-[61px] sm:w-[61px] flex-shrink-0 items-center justify-center rounded-[40px] bg-[linear-gradient(135deg,rgba(235,237,255,0.48)_0%,rgba(173,184,255,0.48)_100%)] shadow-[14px_10px_30px_rgba(49,89,211,0.12)]",

  paymentLabel:
    "text-[11px] sm:text-[12px] font-bold leading-[18px] text-[#2C3E8C]",

  paymentAmount:
    "text-[14px] sm:text-[17px] font-semibold leading-[22px] text-[#111827]",

  rightColumn: "w-full max-w-[448px] text-center lg:text-left mx-auto lg:mx-0",

  badge:
    "inline-flex items-center rounded-full bg-[#BFEAFB] px-4 py-2 text-[12px] sm:text-[13px] font-semibold text-[#223B5B] transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(82,180,218,0.25)]",

  heading:
    "mt-6 lg:mt-[34px] text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[38px] sm:leading-[44px] lg:leading-[50px] text-[#121635]",

  description:
    "mt-6 lg:mt-[30px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[28px] sm:leading-[32px] lg:leading-[34px] text-[#6A728A]",

  sectionTransition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  } as const,

  cardTransition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  } as const,

  logoTransition: {
    delay: 0.12,
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  } as const,

  paymentTransition: {
    delay: 0.18,
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  } as const,
} as const;
