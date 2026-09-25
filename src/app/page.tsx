import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Advantages } from "@/components/sections/Advantages";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Industries } from "@/components/sections/Industries";
import { ManagerDashboard } from "@/components/sections/ManagerDashboard";
import { Implementation } from "@/components/sections/Implementation";
import { ValueProps } from "@/components/sections/ValueProps";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { DemoModalProvider } from "@/components/demo/DemoModalProvider";
import { WhatsAppFab } from "@/components/demo/WhatsAppFab";

export default function Home() {
  return (
    <DemoModalProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Advantages />
        <ProcessSteps />
        <FeaturesGrid />
        <Industries />
        <ManagerDashboard />
        <Implementation />
        <Pricing />
        <ValueProps />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </DemoModalProvider>
  );
}
