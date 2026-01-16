import React from 'react'
import { submitRSDV } from '../actions/submit-rsvp'

const CurtainInsights = () => {
  const benefits = [
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting."
  ]

  return (
    <section className="bg-white pt-16 font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">

          {/* Right Side Image — comes FIRST on mobile */}
          <div className="w-full md:w-[420px] flex-shrink-0 order-1 md:order-2">
            <div className="p-2 relative">
              <img
                src="/images/shutterstock.png"
                alt="Strategic Strategy Chess"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Left Side Content — comes AFTER image on mobile */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-[#F4A03C] text-3xl md:text-4xl font-bold leading-tight mb-8">
              Go behind the curtain with real <br className="hidden md:block" /> examples and high-scale insights
            </h2>

            <p className="text-gray-900 font-bold mb-6 text-lg">
              You'll walk away with:
            </p>

            <ul className="space-y-6 mb-12">
              {benefits.map((text, index) => (
                <li key={index} className="flex items-start gap-5">
                  <div className="w-[3px] h-12 bg-[#F4A03C] flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px] leading-relaxed py-1">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

          {/* RSVP FORM */}
{/* RSVP FORM */}
<form
  action={submitRSDV}
  className="flex flex-col sm:flex-row items-start gap-4 max-w-2xl"
>
  <div className="relative w-full">
    <span className="absolute inset-y-0 left-3 flex items-center">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </span>

    <input
      type="email"
      name="email"
      required
      placeholder="Enter your work email to confirm your attendance"
      className="
        w-full 
        pl-10 pr-2 py-3.5 
        border border-gray-300 
        rounded-lg 
        focus:ring-2 focus:ring-[#F4A03C] 
        outline-none 
        shadow-sm
        text-[13px] sm:text-sm 
        /* This ensures the placeholder fits the width of a mobile screen */
        placeholder:text-[10px] placeholder:sm:text-sm
      "
    />
  </div>

  <button
    type="submit"
    className="
      bg-[#F5A623]
      text-white
      font-bold
      h-[46px] md:h-[50px]
      w-[140px] md:w-auto
      px-6 md:px-10
      rounded-lg
      cursor-pointer
      hover:bg-[#e18e2a]
      transition-colors
      text-[14px] md:text-base
      whitespace-nowrap
      /* Ensures alignment to the left on mobile */
      self-start 
    "
  >
    RSDV Now
  </button>
</form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CurtainInsights
