"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
// import { Button } from "@/components/ui/button"; // Assuming a button component exists
import Image from "next/image";
import { ArrowRight, Link } from "lucide-react";

const servicesData = [
  {
    title: "Web Development",
    description: "Crafting responsive and high-performance websites tailored to your needs.",
    image: "/public/images/saas-website.webp", // Placeholder image
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces for exceptional user experiences.",
    image: "/public/images/digital-wellness-day.webp",
  },
  {
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile applications for iOS and Android.",
    image: "/public/images/ai-employee-solutions.webp",
  },
  {
    title: "E-commerce Solutions",
    description: "Developing robust online stores that drive sales and enhance customer experience.",
    image: "/public/images/luminous-jewel.webp",
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boosting your online visibility and driving organic traffic to your business.",
    image: "/public/images/monarch-inspection.webp",
  },
  {
    title: "Cloud Solutions",
    description: "Leveraging cloud technologies for scalable, secure, and efficient infrastructure.",
    image: "/public/images/tristone-commercial.webp",
  },
  {
    title: "Consulting & Strategy",
    description: "Providing expert guidance to define your digital strategy and achieve business goals.",
    image: "/public/images/coach-dave.webp",
  },
];

interface ServiceCardProps {
  service: typeof servicesData[0];
  index: number;
  scrollYProgress: MotionValue<number>; // Framer Motion's MotionValue<number>
  totalCards: number;
}

const ServiceCard = ({ service, index, scrollYProgress, totalCards }: ServiceCardProps) => {
  const targetScale = 1 - ((totalCards - index) * 0.05);
  const targetOpacity = 1 - ((totalCards - index) * 0.1);

  const y = useTransform(scrollYProgress, [0, 1], [`${index * 50}px`, `${index * -50}px`]);
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [targetOpacity, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: index,
        paddingTop: `${index * 20}px`,
      }}
      className="w-full max-w-md bg-card border border-border/40 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
    >
      {service.image && (
        <Image
          src={service.image}
          alt={service.title}
          width={100}
          height={100}
          className="mb-4 rounded-full object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm">{service.description}</p>
    </motion.div>
  );
};

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Text Content and Button */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            Our Expertise, Your Success
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive suite of digital services designed to elevate your brand, engage your audience, and drive measurable results. From innovative web development to strategic digital marketing, our team is dedicated to transforming your vision into reality.
          </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full border-2 border-foreground/80 bg-transparent px-10 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg"
          >
            Web Design Services
            <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
        </div>

        {/* Right Side: Stacked Cards with Scroll Animation */}
        <div className="relative h-[800px] flex flex-col items-center justify-center">
          {servicesData.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              scrollYProgress={scrollYProgress}
              totalCards={servicesData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
