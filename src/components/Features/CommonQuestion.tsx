import React from "react";

const CommonQuestions = () => {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Common Questions</h2>

        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <button type="button" className={styles.moreButton}>
          More Questions
        </button>
      </div>
    </section>
  );
};

export default CommonQuestions;

const faqData = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: "What if I need help?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
] as const;

const styles = {
  section:
    "w-full bg-white pt-[80px] md:pt-[110px] lg:pt-[140px] pb-[60px] md:pb-[80px] lg:pb-[100px] overflow-hidden",

  container:
    "max-w-[1040px] mx-auto px-5 sm:px-6 md:px-8 lg:px-6 flex flex-col items-start",

  title:
    "w-full text-center lg:text-left text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-[#0E1630] mb-[36px] md:mb-[48px] lg:mb-[56px] tracking-tight leading-tight",

  faqList:
    "w-full flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] mb-[32px] md:mb-[40px] lg:mb-[44px]",

  faqItem:
    "w-full flex flex-col gap-[10px] md:gap-[12px] lg:gap-[14px] max-w-full lg:max-w-[940px]",

  question:
    "text-[15px] sm:text-[16px] lg:text-[18px] font-bold text-[#0E1630] tracking-[0.01em] leading-normal",

  answer:
    "text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#61708E] leading-[24px] md:leading-[26px]",

  moreButton:
    "mx-auto lg:mx-0 h-[44px] md:h-[46px] px-[20px] md:px-[24px] rounded-[12px] border-[1.5px] border-[#1681C4] bg-white text-[#1681C4] text-[13px] md:text-[14px] font-bold tracking-wide transition-all hover:bg-sky-50 active:scale-[0.98] cursor-pointer outline-none",
} as const;
