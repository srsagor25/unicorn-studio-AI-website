"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("services");
  const [isVisible, setIsVisible] = useState(false);

  const navLinks = [
    {
      name: "Services",
      href: "#services",
      id: "services",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      isLink: false,
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      id: "portfolio",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      isLink: false,
    },
    {
      name: "Case Studies",
      href: "#case-studies",
      id: "case-studies",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      isLink: false,
    },
    {
      name: "About",
      href: "/about",
      id: "about",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      isLink: true,
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      isLink: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const sections = ["hero", "who", "services", "process", "pricing", "portfolio", "case-studies", "why-us", "faq", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Hide navigation when in hero section
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - window.innerHeight / 2);
      }

      // Detect active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (sectionId === "hero" || sectionId === "who" || sectionId === "process" || sectionId === "pricing") {
              setActiveSection("services");
            } else if (sectionId === "why-us" || sectionId === "faq") {
              setActiveSection("case-studies");
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-0 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 transition-all duration-500 hidden md:block ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-full px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const className = `px-2 sm:px-3 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
              activeSection === link.id
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
            }`;
            return link.isLink ? (
              <Link key={link.name} href={link.href} className={className}>
                {link.icon}
                <span className="hidden lg:inline">{link.name}</span>
              </Link>
            ) : (
              <a key={link.name} href={link.href} className={className}>
                {link.icon}
                <span className="hidden lg:inline">{link.name}</span>
              </a>
            );
          })}

          {/* Book a Meeting CTA */}
          <a
            href="#contact"
            className="ml-1 sm:ml-2 px-3 sm:px-5 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="hidden lg:inline">Book a Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
