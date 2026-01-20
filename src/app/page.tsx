import { Hero } from "@/components/landing/hero";
import { ServicesMarquee } from "@/components/landing/services-marquee";
import { FeaturedProjects } from "@/components/landing/featured-projects";
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
      <Hero />
      <ServicesMarquee />
      <ServicesGrid />
      <FeaturedProjects />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ArticlesPreview />
      <Team />
    </div>
  );
}
