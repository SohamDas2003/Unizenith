"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bglines from "../../public/bgLines.png"
function ContactBanner() {
  return (
    <div className="relative w-full bg-figma-gradient py-12 md:py-16 lg:py-[120px] overflow-hidden">
      {/* Background lines image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={bglines}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <div className="mb-2 md:mb-2">
          <div className="w-fit inline-flex items-center bg-white p-0.5 sm:p-1 rounded-[18px]">
            <Link
              href="/"
              className="flex items-center h-5 sm:h-7 px-2 sm:px-4 bg-figma-gradient rounded-[18px]"
            >
              <span className="font-['Inter'] font-medium text-[10px] sm:text-[14px] leading-4 sm:leading-5 text-center text-white">
                Home {'>'}
              </span>
            </Link>
            <span className="font-['Inter'] text-[10px] sm:text-[14px] font-[500] leading-4 sm:leading-[20px] text-[#163F7A] pl-2 pr-4 sm:pl-4 sm:pr-8">
              Contact us
            </span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="font-[600] text-2xl sm:text-4xl md:text-[50px] leading-tight sm:leading-tight md:leading-[98px] text-white mb-2 md:mb-6">
          Contact us
        </h1>
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left card – Talk to Expert */}
          <div
            className="rounded-[20px] p-6 md:p-8 bg-white"
          >
            <div className="flex items-center mb-6">
              {/* Icon container with outer circle */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#697EC466] flex items-center justify-center">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#163F7A]"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 10.5C12.7614 10.5 15 8.26142 15 5.5C15 2.73858 12.7614 0.5 10 0.5C7.23858 0.5 5 2.73858 5 5.5C5 8.26142 7.23858 10.5 10 10.5Z"
                        fill="#fff"
                      />
                      <path
                        d="M17.5 20.5H2.5C2.1 20.5 1.75 20.325 1.525 20.025C1.3 19.725 1.225 19.35 1.325 19C2.325 15.575 5.825 13.125 10 13.125C14.175 13.125 17.675 15.575 18.675 19C18.775 19.35 18.7 19.725 18.475 20.025C18.25 20.325 17.9 20.5 17.5 20.5Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            <h3 className="font-[700] text-lg sm:text-[22px] leading-[158%] ml-5 text-[#1C1C1C]">
                Talk to Expert
              </h3>
            </div>
            <p className="font-normal text-sm md:text-[16px] leading-[150%] mb-6 text-[#1C1C1C]">
              Dial in for clarity, care, and compassion. Our team is ready to provide informed guidance.
            </p>
            <Link
              href="tel:18002660515"
              className="font-medium text-sm md:text-base px-6 py-2 rounded-3xl bg-figma-gradient text-white inline-block"
            >
              Call Now
            </Link>
          </div>
          {/* Right card – Mail Us */}
          <div
            className="rounded-[20px] p-6 md:p-8 bg-[linear-gradient(0deg,rgba(20,38,99,0.55),rgba(20,38,99,0.55)),linear-gradient(0deg,rgba(167,167,167,0.2),rgba(167,167,167,0.2))]"
          >
            <div className="flex items-center mb-6">
              {/* Icon container with outer circle */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#697EC466] flex items-center justify-center">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="#163F7A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-[700] text-lg sm:text-[22px] leading-[158%] ml-5 text-white">
                Mail Us
              </h3>
            </div>
            <p className="font-normal text-sm md:text-[16px] leading-[150%] mb-6 text-white">
              Write to us with your concerns, questions, or collaboration ideas. Expect a quick and professional response.
            </p>
            <a
              href="mailto:info@rhcpl.com"
              className="font-[700] text-base leading-[150%] text-white"
            >
              info@unizenith.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactBanner