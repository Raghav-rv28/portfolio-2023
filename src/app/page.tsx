"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import AnimatedText from "@/components/Home/AnimatedText";
import AboutSection from "@/components/about/AboutSection";
import ProjectSection from "@/components/Project/ProjectSection";
import Button from "@mui/material/Button";
import ContactSection from "@/components/Contact/ContactSection";

export default function HomePage() {
  return (
    <Container sx={{ backgroundColor: "#141E46" }} maxWidth="xl">
      <AnimatedText />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Container>
  );
}
