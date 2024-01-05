"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import HomeContent from "@/components/Home/HomeContent";
import AboutSection from "@/components/about/AboutSection";
import ProjectSection from "@/components/Project/ProjectSection";
import ContactSection from "@/components/Contact/ContactSection";
import BlogSection from "@/components/Blog/BlogSection";

export default function HomePage() {
  const AboutRef = React.useRef<HTMLDivElement>(null);
  const ProjectRef = React.useRef<HTMLDivElement>(null);

  const toAbout = React.useCallback(() => {
    AboutRef.current?.scrollIntoView();
  }, []);

  const toProjects = React.useCallback(() => {
    ProjectRef.current?.scrollIntoView();
  }, []);
  return (
    <Container sx={{ backgroundColor: "#141E46" }} maxWidth="xl" disableGutters>
      {AboutRef.current !== undefined && <HomeContent toAbout={toAbout} />}
      <div ref={AboutRef}>
        {ProjectRef.current !== undefined && (
          <AboutSection toProjects={toProjects} />
        )}
      </div>
      <div ref={ProjectRef}>
        <ProjectSection />
      </div>
      <div>
        <BlogSection />
      </div>
      <ContactSection />
    </Container>
  );
}
