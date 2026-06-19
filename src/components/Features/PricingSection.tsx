import activeIcon from "../../../assets/Active Icon.svg";
import inActiveIcon from "../../../assets/InActive Icon.svg";

const PricingSection = () => {
  return (
    <section className={styles.section} id="pricing">
      {/* SECTION HEADER */}
      <div className={styles.pricingHeader}>
        <h2 className={styles.pricingTitle}>Help Is One Click Away</h2>
      </div>

      {/* PRICING CARDS CONTAINER */}
      <div className={styles.cardsGrid}>
        {/* FREE CARD */}
        <div className={styles.freeCard}>
          <div className={styles.cardHeaderRow}>
            <div className={styles.freeBadgeBox}>
              <span className={styles.freeBadgeTitle}>Free</span>
              <span className={styles.freeBadgeSub}>Basic</span>
            </div>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <img
                  src={activeIcon}
                  alt="Active"
                  className={styles.activeIcon}
                />
                <span className={styles.featureText}>1 Active Job</span>
              </div>
              <div className={styles.featureItem}>
                <img
                  src={activeIcon}
                  alt="Active"
                  className={styles.activeIcon}
                />
                <span className={styles.featureText}>Basic List Placement</span>
              </div>
              <div className={styles.featureItem}>
                <img
                  src={inActiveIcon}
                  alt="inActive"
                  className={styles.inActiveIcon}
                />
                <span className={styles.featureTextDisabled}>
                  Unlimited Job Applicants
                </span>
              </div>
              <div className={styles.featureItem}>
                <img
                  src={inActiveIcon}
                  alt="inActive"
                  className={styles.inActiveIcon}
                />
                <span className={styles.featureTextDisabled}>
                  Invite Anyone to Apply to Your Jobs
                </span>
              </div>
            </div>
          </div>

          <button type="button" className={styles.freeButton}>
            Get Started
          </button>
        </div>

        {/* PREMIUM CARD */}
        <div className={styles.premiumCard}>
          <div className={styles.cardHeaderRow}>
            <div className={styles.premiumBadgeBox}>
              <div className={styles.premiumLabelTag}>
                <span className={styles.diamondIcon}>♦</span> Premium
              </div>
              <span className={styles.premiumPrice}>$79.99</span>
              <span className={styles.premiumPeriod}>Per Month</span>
            </div>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.checkIconBlue}>✓</span>
                <span className={styles.featureText}>Unlimited Job Posts</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIconBlue}>✓</span>
                <span className={styles.featureText}>
                  Instant Job Post Approval
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIconBlue}>✓</span>
                <span className={styles.featureText}>
                  Premium List Placement
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkIconBlue}>✓</span>
                <span className={styles.featureText}>
                  Unlimited Job Applicants
                </span>
              </div>
            </div>
          </div>

          <button type="button" className={styles.premiumButton}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const styles = {
  section:
    "relative w-full bg-white overflow-hidden py-[70px] md:py-[90px] lg:py-[120px]",

  pricingHeader: "w-full text-center mb-10 md:mb-14",

  pricingTitle:
    "text-[28px] sm:text-[34px] md:text-[42px] font-bold text-[#0E1630] tracking-tight px-4",

  cardsGrid:
    "max-w-[1040px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6 relative z-10",

  activeIcon: "w-5 h-5 flex-shrink-0",

  inActiveIcon: "w-5 h-5 flex-shrink-0",

  freeCard:
    "w-full bg-white rounded-[24px] border border-zinc-100 p-5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-[0px_16px_32px_rgba(135,129,245,0.04)] min-h-[340px]",

  freeBadgeBox:
    "w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-[16px] bg-[#EDF5FF] flex flex-col items-center justify-center flex-shrink-0 mx-auto sm:mx-0",

  freeBadgeTitle: "text-[20px] sm:text-[24px] font-bold text-[#1681C4]",

  freeBadgeSub: "text-[11px] sm:text-[12px] text-[#1681C4]/70 font-medium",

  freeButton:
    "w-full h-[50px] sm:h-[52px] rounded-[14px] border-2 border-[#1E4FA3] bg-white text-[#1E4FA3] font-bold text-[15px] sm:text-[16px] transition-all hover:bg-zinc-50",

  premiumCard:
    "w-full bg-white rounded-[24px] border border-zinc-100 p-5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-[0px_24px_48px_rgba(135,129,245,0.08)] min-h-[340px]",

  premiumBadgeBox:
    "w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-[16px] bg-[#F1F4FF] flex flex-col items-center justify-center relative flex-shrink-0 mx-auto sm:mx-0",

  premiumLabelTag:
    "absolute top-[-10px] px-3 py-1 rounded-full bg-[#CBE4FF] text-[#1681C4] text-[10px] font-bold flex items-center gap-1",

  diamondIcon: "text-[8px] leading-none",

  premiumPrice: "text-[20px] sm:text-[24px] font-bold text-[#1E4FA3] mt-2",

  premiumPeriod: "text-[10px] sm:text-[11px] text-zinc-400 font-medium",

  premiumButton:
    "w-full h-[50px] sm:h-[52px] rounded-[14px] bg-[#2557B4] text-white font-bold text-[15px] sm:text-[16px] transition-all hover:bg-[#1E4FA3]",

  cardHeaderRow:
    "flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-5 w-full",

  featuresList: "w-full flex flex-col gap-4 sm:gap-5 flex-1 justify-center",

  featureItem: "flex items-start gap-3 min-h-[28px]",

  checkIconBlue:
    "inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#E3F2FD] text-[#1681C4] text-[10px] font-bold flex-shrink-0 mt-[3px]",

  closeIcon:
    "inline-flex items-center justify-center w-4 h-4 rounded-full bg-zinc-100 text-zinc-400 text-[8px] font-bold flex-shrink-0",

  featureText:
    "text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-6 text-[#323445]",

  featureTextDisabled:
    "text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-6 text-[#808191]",
} as const;
