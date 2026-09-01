import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sun, CloudSun, Sunset, Moon, Sparkles, Terminal, Send, FileText } from 'lucide-react';
import { TimeOfDay } from '../types';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

interface NavbarProps {
  timeOfDay: TimeOfDay;
  onTimeOfDayChange: (time: TimeOfDay) => void;
  petalDensity: 'subtle' | 'normal' | 'cinematic';
  onPetalDensityChange: (density: 'subtle' | 'normal' | 'cinematic') => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  timeOfDay,
  onTimeOfDayChange,
  petalDensity,
  onPetalDensityChange,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'stats', label: 'UNIVERSE' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const nextState = animeAudio.toggleAmbientSound((playing) => {
      setIsAudioPlaying(playing);
    });
    if (nextState !== undefined) {
      setIsAudioPlaying(nextState);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    animeAudio.playChime(659.25);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleTimeOfDay = () => {
    const times: TimeOfDay[] = ['morning', 'afternoon', 'sunset', 'night'];
    const nextIdx = (times.indexOf(timeOfDay) + 1) % times.length;
    onTimeOfDayChange(times[nextIdx]);
    animeAudio.playChime(783.99);
  };

  const cyclePetals = () => {
    const densities: ('subtle' | 'normal' | 'cinematic')[] = ['subtle', 'normal', 'cinematic'];
    const nextIdx = (densities.indexOf(petalDensity) + 1) % densities.length;
    onPetalDensityChange(densities[nextIdx]);
    animeAudio.playChime(880.00);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/85 backdrop-blur-md shadow-sm border-b border-pink-100/60'
          : 'py-4 bg-white/40 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          id="navbar-brand-btn"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 group text-left transition-transform hover:scale-102"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F7B2C4] to-[#FFD9E4] flex items-center justify-center shadow-xs border border-pink-200 group-hover:rotate-12 transition-transform duration-300">
            <SakuraIcon className="w-5 h-5 text-[#E87898]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#303442] group-hover:text-[#E87898] transition-colors">
                Vignesh K
              </span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-pink-50 text-[#E87898] border border-pink-200/80">
                Dev
              </span>
            </div>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-[#687080] -mt-0.5">
              Software Developer
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 px-3 py-1.5 rounded-full border border-pink-100/80 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 text-xs font-bold tracking-wider rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#E87898] bg-pink-50/90 shadow-xs'
                    : 'text-[#687080] hover:text-[#303442] hover:bg-pink-50/40'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#E87898] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center gap-2">
          {/* Time of Day Switcher */}
          <button
            id="time-of-day-btn"
            onClick={cycleTimeOfDay}
            title={`Current: ${timeOfDay.toUpperCase()} (Click to change atmosphere)`}
            className="w-8 h-8 rounded-full bg-white/80 border border-pink-100 text-[#303442] hover:border-[#E87898] hover:text-[#E87898] flex items-center justify-center shadow-2xs transition-all"
          >
            {timeOfDay === 'morning' && <Sun className="w-4 h-4 text-amber-500" />}
            {timeOfDay === 'afternoon' && <CloudSun className="w-4 h-4 text-sky-500" />}
            {timeOfDay === 'sunset' && <Sunset className="w-4 h-4 text-rose-500" />}
            {timeOfDay === 'night' && <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Sakura Petals Density */}
          <button
            id="petals-toggle-btn"
            onClick={cyclePetals}
            title={`Petal Density: ${petalDensity.toUpperCase()}`}
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-white/80 border border-pink-100 text-[#687080] hover:border-pink-300 hover:text-[#E87898] shadow-2xs transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E87898]" />
            <span className="text-[11px] capitalize">{petalDensity}</span>
          </button>

          {/* Audio Chime Ambient Player */}
          <button
            id="audio-ambient-btn"
            onClick={handleToggleAudio}
            title={isAudioPlaying ? 'Mute Anime Spring Chimes' : 'Play Anime Spring Chimes (Web Audio)'}
            className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-2xs transition-all ${
              isAudioPlaying
                ? 'bg-pink-100/90 border-[#E87898] text-[#E87898] animate-pulse'
                : 'bg-white/80 border-pink-100 text-[#687080] hover:text-[#E87898]'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Easter Egg */}
          <button
            id="sakura-cli-btn"
            onClick={onOpenTerminal}
            title="Open Sakura Developer CLI"
            className="hidden sm:flex w-8 h-8 rounded-full bg-stone-800 text-pink-300 border border-stone-700 hover:bg-stone-900 items-center justify-center shadow-2xs transition-all"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Let's Connect CTA */}
          <button
            id="lets-connect-btn"
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E87898] to-[#F7B2C4] hover:from-[#d86687] hover:to-[#f59eb3] shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Let's Connect</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#303442] hover:bg-pink-50"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 py-3 bg-white/95 backdrop-blur-lg border-b border-pink-200 shadow-md">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2 text-xs font-bold rounded-lg ${
                  activeSection === link.id ? 'bg-pink-100 text-[#E87898]' : 'text-[#687080] hover:bg-pink-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-pink-100 flex items-center justify-between">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-md"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E87898]" />
              Sakura CLI
            </button>
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-[#E87898] hover:underline flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
