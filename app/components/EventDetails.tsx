import React from "react";
import { Mail } from "lucide-react";
import { submitRSDV } from "../actions/submit-rsvp";

const EventDetails = () => {
  return (
    <section className="relative w-full bg-white min-h-[693px] md:h-[693px]">

      {/* RSDV INLINE */}
      <form
        action={submitRSDV}
        className="
          max-w-[1240px]
          mx-auto
          px-6 md:px-20
          pt-8 md:pt-12
          flex flex-col md:flex-row
          items-stretch md:items-center
          gap-4
        "
      >
<div className="flex flex-col gap-2 w-full md:flex-row md:items-center md:gap-4">

  {/* Email Input */}
  <div className="flex items-center gap-2 border border-gray-300 px-3 py-3 w-full md:w-[420px] rounded-md">
    <Mail size={18} className="text-gray-500 flex-shrink-0" />
    <input
      type="email"
      name="email"
      placeholder="Enter your work email to confirm your attendance"
      required
      className="flex-1 w-full outline-none text-gray-700 placeholder:text-gray-500 text-sm md:text-base "
    />
  </div>

  {/* RSVP Button */}
  <button
    type="submit"
    className="
      mt-2
      bg-[#F5A623]
      text-white
      font-semibold
      h-[40px] md:h-[50px]
      w-[120px] md:w-auto
      px-4 md:px-10
      rounded-md
      cursor-pointer
      hover:bg-[#e18e2a]
      transition-colors
      text-[12px] md:text-sm
      self-start
    "
  >
    RSDV Now
  </button>
</div>



      </form>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-20 py-12 md:py-16 font-satoshi">

        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-black font-medium max-w-[960px]">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and intelligent
          agents.
          <br /><br />
          But even the most advanced enterprises are asking the same question:
        </p>

        <h2 className="mt-8 md:mt-10 text-center text-[24px] md:text-[32px] leading-[34px] md:leading-[44px] font-bold text-black">
          Which capabilities will matter most,<br />
          and how do we build them at scale?
        </h2>

        <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-black max-w-[960px] mt-8 md:mt-10 font-medium">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>

      </div>
    </section>
  );
};

export default EventDetails;
