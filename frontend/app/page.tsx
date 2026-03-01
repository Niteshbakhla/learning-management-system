"use client"

import CoursePreview from "@/components/landing/CoursePreview";
import CTABanner from "@/components/landing/CTABanner";
import Features from "@/components/landing/Feature";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-950/40 dark:via-background dark:to-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CoursePreview />
      <CTABanner />
      <Footer />
    </main>
  );
}