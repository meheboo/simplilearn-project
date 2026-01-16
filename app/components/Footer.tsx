"use client"
import React from "react"
import Image from "next/image"
import { Mail } from "lucide-react"
import { submitRSDV } from "../actions/submit-rsvp"

const Footer = () => {
  return (
    <footer className="relative w-full h-[280px] md:h-[300px] text-white">
      
      {/* Background Image */}
      <Image
        src="/images/Maskgroup.png"
        alt="Footer Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[1240px] mx-auto px-5 md:px-20 pb-6 md:pb-8">

          {/* RSVP FORM */}
          <div className="mb-16 md:mb-20 max-w-[640px]">
            <p className="font-bold mb-3 md:mb-6 text-[18px] md:text-[30px]">
              Space is limited.
            </p>

            <form
              action={submitRSDV}
              className="flex flex-col gap-3 md:flex-row md:gap-4"
            >
              {/* Input */}
              <div className="relative w-full bg-[#E7E7E7] rounded-md h-[44px] md:h-[50px]">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your work email to confirm your attendance"
                  className="
                    w-full h-full
                    pl-10 pr-3
                    rounded-md
                    text-[#000000]
                    outline-none
                    text-[12px] md:text-sm
                  "
                />
              </div>

              {/* Button */}
              <button
                className="
                  h-[40px] md:h-[50px]
                  w-[120px] md:w-auto
                  bg-[#F5AB40E5]
                  hover:bg-[#e18e2a]
                  px-4 md:px-10
                  rounded-md
                  font-semibold
                  cursor-pointer
                  text-[12px] md:text-sm
                "
              >
                RSDV Now
              </button>
            </form>
          </div>

          {/* FOOTER BOTTOM ROW */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-0 items-start md:items-center justify-between -mb-4">
            
            {/* Logo */}
            <Image
              src="/images/logo.png"
              alt="Simplilearn Logo"
              width={130}
              height={36}
            />

            {/* Copyright */}
            <p className="text-[10px] md:text-sm opacity-90">
              © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
