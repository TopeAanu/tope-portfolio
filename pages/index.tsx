// pages/index.tsx
import { useState } from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import SocialsSection from "../components/SocialsSection";
import { Project, SkillGroup } from "../components/models/types";

export default function Home() {
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "Real-time weather application using weather API with location tracking.",
      technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates.",
      technologies: ["TypeScript", "React", "Firebase", "Material UI"],
    },
  ];

  // Skills data
  const skills: SkillGroup[] = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "GraphQL"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
    },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "GitHub Actions"] },
  ];

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <SocialsSection />
    </Layout>
  );
}
