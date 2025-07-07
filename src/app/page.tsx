import AppHeader from "@/components/layout/header";
import AppFooter from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import CertificationsSection from "@/components/sections/certifications";
import ProjectsSection from "@/components/sections/projects";
import TeamSection from "@/components/sections/team";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <CertificationsSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <AppFooter />
    </>
  );
}
