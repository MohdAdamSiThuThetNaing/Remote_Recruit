import { motion } from "framer-motion";
import dashboard from "../../assets/work-dashboard-ui.png";
import logo from "../../assets/remoterecruit-logo.png";
import avator from "../../assets/avator.png";

const FeatureOne = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className={styles.gridContainer}>
          {/* LEFT CONTENT BLOCK */}
          <div className={styles.leftColumn}>
            <motion.span
              className={styles.badge}
              whileHover={{
                scale: 1.08,
                y: -3,
              }}
              transition={{ duration: 0.3 }}
            >
              Global Reach
            </motion.span>

            <motion.h2
              className={styles.heading}
              whileHover={{
                scale: 1.03,
                color: "#1681C4",
                textShadow: "0px 0px 15px rgba(82,180,218,0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              The First Fully Global
              <br />
              Job Board, Anywhere,
              <br />
              Ever
            </motion.h2>

            <motion.p
              className={styles.description}
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              transition={{ duration: 0.3 }}
            >
              RemoteRecruit connects candidates with opportunities around the
              world. With today's remote-first workforce, you need to be able to
              find the best jobs and the best people for them, wherever they may
              be.
            </motion.p>
          </div>

          {/* RIGHT GRAPHIC BLOCK */}
          <div className={styles.rightColumn}>
            {/* Dashed Background Graphic */}
            <div className={styles.dashedBg} />

            {/* Core Dashboard UI Asset */}
            <img
              src={dashboard}
              alt="RemoteRecruit dashboard preview"
              loading="lazy"
              decoding="async"
              width={315}
              height={176}
              className={styles.dashboardImg}
            />

            <motion.img
              src={logo}
              alt="RemoteRecruit floating logo"
              loading="lazy"
              decoding="async"
              width={91}
              height={91}
              animate={{ y: [0, -8, 0] }}
              transition={styles.floatingTransition}
              className={styles.floatingLogo}
            />

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={styles.cardOneTransition}
              className={styles.profileCardOne}
            >
              <div className={styles.avatarContainer}>
                <img
                  src={avator}
                  alt="Python Developer profile"
                  loading="lazy"
                  decoding="async"
                  width={56}
                  height={56}
                  className={`
  ${styles.avatarImg}
  transition-all
  duration-500
  ease-out
  hover:-translate-y-2
  hover:scale-110
  hover:shadow-[0_15px_30px_rgba(30,62,133,0.25)]
`}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <h4 className={styles.cardTitle}>Python Developer</h4>
                <p className={styles.cardSubtitle}>7 years experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={styles.cardTwoTransition}
              className={styles.profileCardTwo}
            >
              <div className={styles.avatarContainer}>
                <img
                  src={avator}
                  alt="Frontend Developer profile"
                  loading="lazy"
                  decoding="async"
                  width={56}
                  height={56}
                  className={`
  ${styles.avatarImg}
  transition-all
  duration-500
  ease-out
  hover:-translate-y-2
  hover:scale-110
  hover:shadow-[0_15px_30px_rgba(30,62,133,0.25)]
`}
                />
              </div>
              <div className={styles.cardTextContainer}>
                <h4 className={styles.cardTitle}>Front End Wizard</h4>
                <p className={styles.cardSubtitle}>React • TypeScript</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureOne;

const styles = {
  wrapper:
    "mx-auto max-w-[1067px] px-5 sm:px-6 lg:px-4 mt-[60px] md:mt-[80px] lg:mt-[100px]",

  gridContainer:
    "grid grid-cols-1 lg:grid-cols-[500px_451px] gap-12 lg:gap-[60px] items-center",

  leftColumn: "w-full text-center lg:text-left order-2 lg:order-1",

  badge:
    "inline-flex items-center rounded-full bg-[#DFF1FF] px-4 py-2 text-xs sm:text-sm font-semibold text-[#1681C4] mb-5 lg:mb-6",

  heading:
    "text-[30px] sm:text-[36px] lg:text-[42px] leading-[38px] sm:leading-[44px] lg:leading-[50px] font-bold text-[#0E1630] mb-6 lg:mb-8",

  description:
    "text-[15px] sm:text-[16px] lg:text-[18px] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-[#61708E]",

  /* Right side */
  rightColumn:
    "relative w-full max-w-[451px] h-[340px] sm:h-[420px] lg:h-[454px] mx-auto order-1 lg:order-2",

  dashedBg:
    "absolute top-0 left-[10%] w-[80%] h-full rounded-[24px] lg:rounded-[34px] border border-dashed border-[#D8DDE8] z-0",

  dashboardImg:
    "absolute top-[15px] left-[15%] w-[70%] h-auto object-contain z-10",

  floatingLogo:
    "absolute top-[95px] sm:top-[120px] right-[0px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[91px] lg:h-[91px] z-30",

  profileCardOne:
    "absolute left-0 top-[170px] sm:top-[220px] w-[80%] h-[65px] sm:h-[73px] bg-white rounded-[16px] shadow-[14px_13px_20px_0px_rgba(135,129,245,0.11)] flex items-center px-3 sm:px-4 z-20",

  profileCardTwo:
    "absolute left-[10%] top-[255px] sm:top-[330px] w-[80%] h-[65px] sm:h-[73px] bg-white rounded-[16px] shadow-[14px_13px_20px_0px_rgba(135,129,245,0.11)] flex items-center px-3 sm:px-4 z-20",

  avatarContainer:
    "w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0 border-[4px] border-[#FFC83D] bg-white shadow-[0_8px_20px_rgba(255,200,61,0.25)]",

  avatarImg: "w-full h-full object-cover",

  cardTextContainer:
    "flex flex-col justify-center min-w-0 cursor-pointer transition-all duration-300 ease-out hover:translate-x-2 hover:scale-[1.02]",

  cardTitle:
    "text-[13px] sm:text-[15px] font-semibold text-[#0E1630] truncate transition-all duration-300 hover:text-[#1E3E85]",

  cardSubtitle:
    "text-[11px] sm:text-[13px] text-[#667085] truncate transition-all duration-300 hover:text-[#52B4DA]",

  viewTransition: { duration: 0.6 } as const,

  floatingTransition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  } as const,

  cardOneTransition: {
    delay: 0.3,
    duration: 0.6,
  } as const,

  cardTwoTransition: {
    delay: 0.5,
    duration: 0.6,
  } as const,
};
