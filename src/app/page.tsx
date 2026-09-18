import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Industries } from "@/components/sections/Industries";
import { ManagerDashboard } from "@/components/sections/ManagerDashboard";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <ProcessSteps />
        <FeaturesGrid />
        <Industries />
        <ManagerDashboard />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
