"use client"
import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import JobExperience from '@/components/Home/JobExperience';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TwitterSection from '@/components/sections/TwitterSection';
import LinkedInSection from '@/components/sections/LinkedInSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleCursorStyles = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <>
      <HeroSection />
      <SkillsSection />
      <JobExperience />
      <ProjectsSection />
      <TestimonialsSection />
      <TwitterSection />
      <LinkedInSection />
      <ContactSection />
      <div
        className={`follow-cursor ${isHovered ? 'hovered' : ''}`}
        style={{ left: position.x, top: position.y }}
      ></div>
    </>
  );
}
