"use client"
import AboutMe from '@/components/Home/AboutMe';
import ConatctMe from '@/components/Home/ConatctMe';
import JobExperience from '@/components/Home/JobExperience';
import RecentProject from '@/components/Home/RecentProject';
import { useEffect, useState } from 'react';

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
      <AboutMe changeCursor={toggleCursorStyles} />
      <JobExperience />
      <RecentProject />
      <ConatctMe />
      <div  className={`follow-cursor ${isHovered ? 'hovered' : ''}`} style={{ left: position.x, top: position.y }}></div>
    </>
  )
}
