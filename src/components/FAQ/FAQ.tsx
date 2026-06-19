import { useState } from "react";
import { faqData } from "../../data/faqData";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-[900px] px-5 sm:px-6 md:px-8">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#0E1630]">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6 md:px-8"
              >
                <span className="pr-4 text-[15px] sm:text-[17px] md:text-[18px] font-semibold text-[#0E1630]">
                  {faq.question}
                </span>

                <span
                  className={`shrink-0 text-2xl font-light transition-transform duration-300 ${
                    active === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 sm:px-6 md:px-8">
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-7 text-[#6B7280]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
