// === NEW V2 SECTIONS ===
import { HeroV2 } from "@/components/landing/hero-v2";
import { ProjectsShowcaseV2 } from "@/components/landing/projects-showcase-v2";
import { StatsCardsV2 } from "@/components/landing/stats-cards-v2";

// === PREVIOUS SECTIONS (commented out) ===
// import { Hero } from "@/components/landing/hero";
// import { ServicesMarquee } from "@/components/landing/services-marquee";
// import { FeaturedProjects } from "@/components/landing/featured-projects";
import { ServicesGrid } from "@/components/landing/services-grid";
import { Process } from "@/components/landing/process";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { Team } from "@/components/landing/team";
import { ArticlesPreview } from "@/components/landing/articles-preview";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      {/* === NEW V2 SECTIONS === */}
      <HeroV2 />
      <ProjectsShowcaseV2 />
      <StatsCardsV2 />

      {/* === PREVIOUS FIRST 3 SECTIONS (commented out) === */}
      {/* <Hero /> */}
      {/* <ServicesMarquee /> */}
      {/* <FeaturedProjects /> */}

      {/* === REMAINING ORIGINAL SECTIONS (kept active) === */}
      <ServicesGrid />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ArticlesPreview />
      <Team />
    </div>
  );
}
