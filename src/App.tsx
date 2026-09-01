import React, { useState, useEffect } from 'react';
import { TimeOfDay } from './types';
import { SakuraPetalsCanvas } from './components/SakuraPetalsCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillGarden } from './components/SkillGarden';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DeveloperStats } from './components/DeveloperStats';
import { JourneyTimeline } from './components/JourneyTimeline';
import { RoadAheadContact } from './components/RoadAheadContact';
import { ResumeModal } from './components/ResumeModal';
import { SakuraTerminalModal } from './components/SakuraTerminalModal';
import { animeAudio } from './utils/audioSynthesizer';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');
  const [userManuallySetTime, setUserManuallySetTime] = useState(false);
  const [petalDensity, setPetalDensity] = useState<'subtle' | 'normal' | 'cinematic'>('normal');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Time-of-Day Scroll Progression (Morning -> Afternoon -> Sunset -> Night)
  useEffect(() => {
    const handleScrollTimeTransition = () => {
      if (userManuallySetTime) return; // Respect manual user toggle

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / Math.max(docHeight, 1);

      if (progress < 0.25) {
        setTimeOfDay('morning');
      } else if (progress < 0.6) {
        setTimeOfDay('afternoon');
      } else if (progress < 0.88) {
        setTimeOfDay('sunset');
      } else {
        setTimeOfDay('night');
      }
    };

    window.addEventListener('scroll', handleScrollTimeTransition);
    return () => window.removeEventListener('scroll', handleScrollTimeTransition);
  }, [userManuallySetTime]);

  const handleManualTimeOfDay = (newTime: TimeOfDay) => {
    setUserManuallySetTime(true);
    setTimeOfDay(newTime);
  };

  const handleExploreWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Background gradient matching time of day
  const getAtmosphereClasses = (time: TimeOfDay) => {
    switch (time) {
      case 'morning':
        return 'bg-gradient-to-b from-[#EBF5FB] via-[#FFF9F5] to-[#FFF0F4] text-[#303442]';
      case 'afternoon':
        return 'bg-gradient-to-b from-[#F0F8FF] via-[#FFF9F5] to-[#FFF0F5] text-[#303442]';
      case 'sunset':
        return 'bg-gradient-to-b from-[#FFF0F4] via-[#FFE4E6] to-[#EDE9FE] text-[#303442]';
      case 'night':
        return 'bg-gradient-to-b from-[#1E1B4B]/90 via-[#2E1065]/70 to-[#0F172A] text-stone-100';
    }
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-1000 overflow-x-hidden ${getAtmosphereClasses(
        timeOfDay
      )}`}
    >
      {/* Background Anime Cloud & Ambient Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F7B2C4]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#A9D6F5]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-[#DCD6F7]/25 rounded-full blur-3xl" />
      </div>

      {/* Interactive Falling Sakura Petals Canvas */}
      <SakuraPetalsCanvas
        timeOfDay={timeOfDay}
        density={petalDensity}
        interactive={true}
      />

      {/* Main Top Navigation */}
      <Navbar
        timeOfDay={timeOfDay}
        onTimeOfDayChange={handleManualTimeOfDay}
        petalDensity={petalDensity}
        onPetalDensityChange={setPetalDensity}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-20 space-y-4">
        {/* 01 Hero Section */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 02 & 03: About Me & Tech Stack (2-Column Layout matching Reference Mockup) */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <AboutSection />
            </div>
            <div className="lg:col-span-6">
              <SkillGarden />
            </div>
          </div>
        </section>

        {/* 04 Featured Projects */}
        <FeaturedProjects />

        {/* 05 Coding Universe & Stats */}
        <DeveloperStats />

        {/* 06 Journey & Growth (Education, Certifications, Experience) */}
        <JourneyTimeline />

        {/* 07 The Road Ahead & Let's Connect */}
        <RoadAheadContact />
      </main>

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Sakura CLI Easter Egg Terminal */}
      <SakuraTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
