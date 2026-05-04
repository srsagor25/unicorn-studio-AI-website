import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FourSystems from "@/components/FourSystems";
import WhatWeBuild from "@/components/WhatWeBuild";
import Plan from "@/components/Plan";
import Transformation from "@/components/Transformation";
import Guarantee from "@/components/Guarantee";
import RecentLaunches from "@/components/RecentLaunches";
import CaseStudies from "@/components/CaseStudies";
import Scarcity from "@/components/Scarcity";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <FourSystems />
        <WhatWeBuild />
        <Plan />
        <Transformation />
        <Guarantee />
        <RecentLaunches />
        <CaseStudies />
        <Scarcity />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
