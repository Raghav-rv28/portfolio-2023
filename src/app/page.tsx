"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import AnimatedText from "@/components/Home/AnimatedText";
import AboutSection from "@/components/about/AboutSection";
import ProjectSection from "@/components/Project/ProjectSection";
import ContactSection from "@/components/Contact/ContactSection";
import BlogSection from "@/components/Blog/BlogSection";

export default function HomePage() {
  const AboutRef = React.useRef<HTMLDivElement>(null);
  const ProjectRef = React.useRef<HTMLDivElement>(null);
  const BlogRef = React.useRef<HTMLDivElement>(null);

  const toAbout = React.useCallback(() => {
    AboutRef.current?.scrollIntoView();
  }, []);

  return (
    <Container sx={{ backgroundColor: "#141E46" }} maxWidth="xl" disableGutters>
      {AboutRef.current !== undefined && <AnimatedText toAbout={toAbout} />}
      <div ref={AboutRef}>
        <AboutSection />
      </div>
      <div>
        <ProjectSection />
      </div>
      <div>
        <BlogSection />
      </div>
      <ContactSection />
    </Container>
  );
}
