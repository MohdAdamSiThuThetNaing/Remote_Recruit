import { useState } from "react";

export default function AssessmentModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        px-4 py-6
      "
    >
      <div
        className="
          w-full
          max-w-[680px]
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-white
          p-5
          sm:p-6
          md:p-8
          shadow-2xl
          animate-[fadeIn_0.3s_ease-out]
        "
      >
        <h2
          className="
            mb-4
            text-center
            text-[24px]
            sm:text-[28px]
            md:text-[34px]
            font-bold
            text-[#0E1630]
          "
        >
          RemoteRecruit Assessment
        </h2>

        <p
          className="
            mb-5
            text-center
            text-[14px]
            sm:text-[15px]
            md:text-[16px]
            leading-7
            text-[#667085]
          "
        >
          This project is a responsive implementation of the RemoteRecruit
          landing page based on the provided Figma design.
        </p>

        <div
          className="
            mb-5
            rounded-2xl
            bg-[#F5F9FF]
            p-4
            md:p-5
          "
        >
          <h3
            className="
              mb-3
              text-[16px]
              md:text-[18px]
              font-semibold
              text-[#1E3E85]
            "
          >
            Technologies Used
          </h3>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-2
              text-[13px]
              sm:text-[14px]
              text-[#667085]
            "
          >
            <div>✅ React 19</div>
            <div>✅ TypeScript</div>
            <div>✅ Vite</div>
            <div>✅ Tailwind CSS</div>
            <div>✅ Framer Motion</div>
            <div>✅ Docker</div>
            <div>✅ Docker Compose</div>
            <div>✅ ESLint</div>
          </div>
        </div>

        <div
          className="
            mb-5
            rounded-2xl
            border
            border-[#E5E7EB]
            p-4
            text-[13px]
            sm:text-[14px]
            text-[#667085]
          "
        >
          <h3 className="mb-2 font-semibold text-[#1E3E85]">
            Features Implemented
          </h3>

          <div className="space-y-1">
            <p>✔ Fully Responsive Design</p>
            <p>✔ Desktop / Tablet / Mobile Support</p>
            <p>✔ Interactive Hover Effects</p>
            <p>✔ Smooth Framer Motion Animations</p>
            <p>✔ Scroll To Top Functionality</p>
            <p>✔ FAQ Expand / Collapse Section</p>
            <p>✔ Optimized Assets & Lazy Loading</p>
            <p>✔ Accessibility Improvements</p>
          </div>
        </div>

        <div
          className="
            mb-6
            border-t
            border-[#E5E7EB]
            pt-4
            text-center
            text-[13px]
            sm:text-[14px]
            text-[#667085]
          "
        >
          <p>
            <strong>Candidate:</strong> Adam Si Thu Thet Naing
          </p>

          <p>
            <strong>Role:</strong> Full-Stack Developer
          </p>

          <p>
            <strong>Stack:</strong> React + TypeScript + Tailwind CSS + Framer
            Motion + Docker
          </p>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="
            w-full
            rounded-full
            bg-[#1681C4]
            py-3
            text-[14px]
            sm:text-[15px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-[#1E3E85]
            active:scale-[0.98]
          "
        >
          View
        </button>
      </div>
    </div>
  );
}
