import React from "react";
import footerLogo from "../../assets/RR_Icon_Logo.png";
import footerMark from "../../assets/logo.png";
import socialIconsImg from "../../assets/social_896.png";
import activeIcon from "../../assets/Active Icon.svg";
import inActiveIcon from "../../assets/InActive Icon.svg";
import Diamond from "../../assets/diamond.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.section} id="pricing-footer">
      <div className={styles.headerWrap}>
        <h2 className={styles.heading}>Help Is One Click Away</h2>
      </div>

      <div className={styles.cardsGrid}>
        <article className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.planBadge}>
              <div className={styles.planContent}>
                <span className={styles.planTitle}>Free</span>
                <span className={styles.planSubtitle}>Basic</span>
              </div>
            </div>

            <ul className={styles.featuresList}>
              {allFeatures.map((feature) => (
                <li key={feature.text} className={styles.featureItem}>
                  <img
                    src={feature.active ? activeIcon : inActiveIcon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className={
                      feature.active ? styles.activeIcon : styles.inactiveIcon
                    }
                  />

                  <span
                    className={
                      feature.active
                        ? styles.featureText
                        : styles.featureTextDisabled
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.gradientBorder}>
            <button type="button" className={styles.outlineButton}>
              Get Started
            </button>
          </div>
        </article>

        <article className={styles.cardEmphasis}>
          <div className={styles.cardTop}>
            <div className={styles.planBadgePremium}>
              <div className={styles.planTag}>
                <div className={styles.diamondWrapper}>
                  <img
                    src={Diamond}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className={styles.diamondImg}
                  />
                </div>

                <span className={styles.planTagText}>Premium</span>
              </div>

              <div className={styles.planContentPremium}>
                <span className={styles.planPrice}>$79.99</span>

                <span className={styles.planSubtitlePremium}>Per Month</span>
              </div>
            </div>

            <ul className={styles.featuresList}>
              {premiumFeatures.map((feature) => (
                <li key={feature.text} className={styles.featureItem}>
                  <img
                    src={activeIcon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className={styles.activeIcon}
                  />

                  <span className={styles.featureText}>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.primaryButtonWrapper}>
            <button type="button" className={styles.primaryButton}>
              Get Started
            </button>
          </div>
        </article>
      </div>

      <div className={styles.footerBackground}>
        <div className={styles.lightBlueBackground} />
        <div className={styles.darkBlueBackground} />

        <div
          className={styles.footerCurve}
          style={{
            borderBottomLeftRadius: "300% 300%",
            borderBottomRightRadius: "10% 20%",
          }}
        />

        <div className={styles.topRightEllipse} />
        <div className={styles.bottomLeftEllipse} />

        <div className={styles.footerInnerLayout}>
          <img
            src={footerMark}
            alt="RemoteRecruit logo"
            loading="lazy"
            decoding="async"
            width={184}
            height={74}
            className={styles.footerLogo}
          />

          <div className={styles.socialsRow}>
            <img
              src={socialIconsImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={242}
              height={32}
              className="h-[32px] w-[242px] object-contain"
            />
          </div>

          <div className={styles.bottomCenterAccent}>
            <img
              src={footerLogo}
              alt="RemoteRecruit icon"
              loading="lazy"
              decoding="async"
              width={40}
              height={32}
              className={styles.bottomLogo}
            />
          </div>
        </div>
        <div className="absolute top-[550px] left-0 h-px w-full bg-[#8BA3CC] opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;

const allFeatures = [
  { text: "1 Active Job", active: true },
  { text: "Basic List Placement", active: true },
  { text: "Unlimited Job Applicants", active: false },
  { text: "Invite Anyone to Apply to Your Jobs", active: false },
] as const;

const premiumFeatures = [
  { text: "Unlimited Job Posts", active: true },
  { text: "Instant Job Post Approval", active: true },
  { text: "Premium List Placement", active: true },
  { text: "Unlimited Job Applicants", active: true },
] as const;

const styles = {
  section:
    "relative flex w-full flex-col overflow-hidden bg-white pt-[40px] md:pt-[60px] text-[#0E1630]",

  headerWrap:
    "relative z-30 mx-auto w-full max-w-[1040px] px-4 md:px-6 text-center",

  heading:
    "inline-block text-[28px] md:text-[34px] font-bold tracking-[-0.02em] text-[#0E1630]",

  cardsGrid:
    "relative z-[20] mx-auto mt-[40px] md:mt-[60px] mb-[-80px] md:mb-[-180px] flex max-w-[1040px] flex-col justify-center gap-[20px] md:gap-[28px] px-4 md:px-6 md:flex-row",

  card: "relative h-auto md:h-[343px] w-full md:w-[500px] rounded-[28px] bg-white p-[20px] md:p-[32px] shadow-[-15px_50px_150px_rgba(49,89,211,0.12)]",

  cardEmphasis:
    "relative h-auto md:h-[343px] w-full md:w-[500px] rounded-[28px] bg-white p-[20px] md:p-[32px] shadow-[-15px_50px_150px_rgba(49,89,211,0.12)]",

  cardTop:
    "flex flex-col sm:flex-row w-full items-center sm:items-start gap-[24px]",

  planBadge:
    "w-[140px] h-[160px] md:w-[160px] md:h-[180px] rounded-[16px] bg-[#ECF2FF] flex items-center justify-center shrink-0",

  planContent: "w-[70px] h-[76px] flex flex-col items-center justify-center",

  planBadgePremium:
    "relative w-[140px] h-[160px] md:w-[160px] md:h-[180px] rounded-[16px] bg-[#ECF2FF] flex items-center justify-center shrink-0",

  planTitle: "text-[22px] md:text-[26px] font-bold text-[#1681C4]",

  diamondWrapper:
    "w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shrink-0",

  planContentPremium:
    "w-[112px] h-[96px] flex flex-col items-center justify-center",

  planTagText:
    "text-[14px] md:text-[16px] font-semibold leading-[15px] tracking-[0.4px] text-[#11142D] flex items-center",

  planTag:
    "absolute top-[-20px] left-1/2 -translate-x-1/2 md:left-[7px] md:translate-x-0 w-[146px] h-[44px] rounded-[22px] bg-[#DDF8FA] flex items-center justify-center gap-[8px]",

  planPrice:
    "flex items-center justify-center text-[24px] md:text-[32px] font-semibold leading-[45px] bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)] bg-clip-text text-transparent",

  planSubtitle: "mt-[6px] text-[11px] text-[#9AA0AF]",

  diamondImg: "w-[20px] h-[20px] object-contain shrink-0",

  planSubtitlePremium:
    "text-[16px] md:text-[20px] font-medium leading-[35px] text-[rgba(17,20,45,0.4)]",

  checkIcon:
    "inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#E3F2FD] text-[10px] font-bold text-[#1681C4]",

  primaryButton:
    "w-full h-full rounded-[24px] flex items-center justify-center text-white text-[18px] md:text-[20px] font-semibold leading-[26px]",

  topRightCircle:
    "hidden lg:block absolute right-[-120px] top-[-150px] h-[524px] w-[524px] rounded-full bg-white opacity-[0.05]",

  bottomLeftCircle:
    "hidden lg:block absolute left-[-120px] bottom-[-260px] h-[524px] w-[524px] rounded-full bg-white opacity-[0.02]",

  primaryButtonWrapper:
    "relative md:absolute left-0 md:left-[32px] bottom-0 md:bottom-[32px] mt-[24px] md:mt-0 w-full md:w-[436px] h-[72px] rounded-[24px] bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] shadow-[10px_0px_50px_0px_rgba(49,89,211,0.28)]",

  socialCircleLink:
    "flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(235,237,255,0.15)_0%,rgba(173,184,255,0.15)_100%)] text-[#DFE1F2]",

  footerBgContainer:
    "relative h-[569px] w-full overflow-hidden bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)]",

  footerDivider:
    "absolute bottom-[76px] left-0 h-px w-full bg-[#8BA3CC] opacity-50 z-20",

  bottomCenterAccent:
    "absolute left-1/2 -translate-x-1/2 md:left-[700px] md:translate-x-0 bottom-[20px] md:bottom-[24px] z-20",

  bottomLogo: "h-[28px] md:h-[32px] w-auto object-contain",

  activeIcon: "w-[20px] h-[20px] mt-[2px] shrink-0",

  inactiveIcon: "w-[20px] h-[20px] mt-[2px] shrink-0",

  featureText:
    "text-[14px] md:text-[16px] font-medium leading-[24px] text-[#323445]",

  featureTextDisabled:
    "text-[14px] md:text-[16px] font-medium leading-[24px] text-[#808191]",

  featureItem: "flex items-start gap-[12px]",

  featuresList: "w-full sm:w-[256px] flex flex-col gap-[20px]",

  footerBackground:
    "relative w-full h-[760px] md:h-[630px] overflow-hidden mt-[-40px] md:mt-[-80px]",

  lightBlueBackground:
    "absolute inset-0 bg-[linear-gradient(131.63deg,#52B4DA_6.87%,#377999_106.04%)]",

  darkBlueBackground:
    "absolute inset-0 bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)]",

  topRightEllipse:
    "hidden lg:block absolute w-[524px] h-[524px] left-[1060px] top-[-155px] rounded-full bg-white opacity-[0.05]",

  footerCurve:
    "absolute top-[-120px] md:top-[-180px] left-[59%] -translate-x-1/2 w-[2200px] md:w-[1800px] h-[280px] md:h-[360px] z-[2] border-[5px] border-[#336DA6] bg-white",

  bottomLeftEllipse:
    "hidden lg:block absolute w-[524px] h-[524px] left-[-6px] top-[512px] rounded-full bg-white opacity-[0.02]",

  footerInnerLayout:
    "relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 md:px-0",

  footerLogo:
    "absolute left-1/2 -translate-x-1/2 md:left-[200px] md:translate-x-0 top-[280px] md:top-[350px] h-[60px] md:h-[74px] w-auto object-contain z-20",

  socialsRow:
    "absolute left-1/2 -translate-x-1/2 md:left-auto md:right-[220px] md:translate-x-0 top-[380px] md:top-[350px] z-20",

  gradientBorder:
    "relative md:absolute left-0 md:left-[32px] bottom-0 md:bottom-[32px] mt-[24px] md:mt-0 w-full md:w-[436px] h-[72px] rounded-[24px] bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] p-[2px]",

  outlineButton:
    "w-full h-full rounded-[22px] bg-white text-[#1E3E85] text-[18px] md:text-[20px] font-semibold leading-[26px] tracking-[0px] flex items-center justify-center",
} as const;
