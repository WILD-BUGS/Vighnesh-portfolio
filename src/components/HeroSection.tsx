import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Code2, Sparkles, ScanFace, Coffee, GitBranch, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';
import { JapaneseQuote } from './JapaneseQuote';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Subtle Story Arrival Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 border border-pink-200/90 shadow-2xs">
            <SakuraIcon className="w-4 h-4 text-[#E87898] animate-spin" />
            <span className="text-xs font-bold text-[#E87898] uppercase tracking-wider">
              Chapter 01 : Arrival & Dream
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#303442] leading-[1.12]">
              Building the{' '}
              <span className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-[#E87898] font-bold inline-block hover:scale-105 transition-transform">
                future
              </span>
              ,
              <br />
              one{' '}
              <span className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-[#E87898] font-bold inline-block hover:scale-105 transition-transform">
                commit
              </span>{' '}
              at a time.
            </h1>
          </div>

          {/* Sakura Divider */}
          <div className="flex items-center gap-3 py-1">
            <SakuraIcon className="w-5 h-5 text-[#F7B2C4]" />
            <div className="h-px w-24 bg-gradient-to-r from-pink-300 to-transparent" />
          </div>

          {/* Role Subtitle */}
          <div className="space-y-1.5 text-[#687080] font-medium text-base sm:text-lg">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#303442]">Software Developer</span>
              <span className="text-[#E87898]">•</span>
              <span className="font-bold text-[#303442]">Problem Solver</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-[#687080]">
              <span>Computer Vision</span>
              <span className="text-pink-300">•</span>
              <span>Machine Learning</span>
              <span className="text-pink-300">•</span>
              <span>Full-Stack Architecture</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-explore-btn"
              onClick={() => {
                animeAudio.playSuccessTone();
                onExploreWork();
              }}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E87898] to-[#F7B2C4] hover:from-[#d86687] hover:to-[#f59eb3] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-resume-btn"
              onClick={() => {
                animeAudio.playChime(659.25);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-[#303442] hover:text-[#E87898] font-bold text-sm border border-pink-200/90 shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-[#E87898]" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Icons & Location */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              id="hero-social-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-pink-100/90 text-[#303442] hover:text-[#E87898] hover:border-pink-300 hover:shadow-xs transition-all hover:-translate-y-0.5 text-xs font-bold"
              title="View Vignesh's GitHub Profile"
            >
              <Github className="w-4 h-4 text-[#303442] group-hover:text-[#E87898]" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>

            <a
              id="hero-social-leetcode"
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-pink-100/90 text-[#303442] hover:text-amber-600 hover:border-amber-300 hover:shadow-xs transition-all hover:-translate-y-0.5 text-xs font-bold"
              title="View Vignesh's LeetCode Profile (350+ Solved)"
            >
              <Code2 className="w-4 h-4 text-amber-500" />
              <span>LeetCode (350+)</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>

            <a
              id="hero-social-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white border border-pink-100/90 flex items-center justify-center text-[#303442] hover:text-[#0077b5] hover:border-sky-300 hover:shadow-xs transition-all hover:-translate-y-0.5"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="hero-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-2xl bg-white border border-pink-100/90 flex items-center justify-center text-[#303442] hover:text-rose-500 hover:border-rose-300 hover:shadow-xs transition-all hover:-translate-y-0.5"
              title="Send Email to Vignesh"
            >
              <Mail className="w-4 h-4 text-rose-500" />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/90 border border-pink-100/90 text-xs font-bold text-[#687080]">
              <MapPin className="w-3.5 h-3.5 text-[#E87898]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Anime Artwork & Interactive Hover-to-Translate Japanese Quote */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md mx-auto group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F7B2C4]/40 via-[#A9D6F5]/30 to-[#DCD6F7]/40 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity opacity-80" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white/40 backdrop-blur-xs">
              <img
                src="/src/assets/images/hero_anime_dev_1788237922228.jpg"
                alt="Anime Vignesh K - Software Developer under Sakura tree"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Bottom sticker overlay with clean SVG icons */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-pink-200/80 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <span title="Python"><Code2 className="w-3.5 h-3.5 text-[#4B8BBE]" /></span>
                  <span title="Computer Vision"><ScanFace className="w-3.5 h-3.5 text-[#E87898]" /></span>
                  <span title="Java"><Coffee className="w-3.5 h-3.5 text-[#E76F51]" /></span>
                  <span title="GitHub"><GitBranch className="w-3.5 h-3.5 text-[#F05032]" /></span>
                  <span className="text-[11px] font-bold text-[#303442]">Vignesh's Dev Rig</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#E87898] bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  <Sparkles className="w-3 h-3" />
                  <span>Ready to Build</span>
                </div>
              </div>
            </div>

            {/* Interactive Japanese Quote with Drag/Hover Translation */}
            <div className="absolute -right-3 sm:-right-8 top-6 sm:top-10 max-w-[210px] sm:max-w-[230px] z-20">
              <JapaneseQuote
                japanese={PERSONAL_INFO.quote.japanese}
                english={PERSONAL_INFO.quote.english}
                author={PERSONAL_INFO.quote.author}
                romaji={PERSONAL_INFO.quote.romaji}
                variant="floating-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
