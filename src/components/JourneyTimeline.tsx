import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle,
  Sparkles,
  Trophy,
  Coffee,
  Code2,
  BookOpen,
  ScrollText,
  Medal,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EDUCATION_ITEMS, CERTIFICATIONS, EXPERIENCE } from '../data/portfolioData';
import { AchievementItem } from '../types';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

export const JourneyTimeline: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);

  const handleCertificateClick = (cert: AchievementItem) => {
    setSelectedCert(cert);
    animeAudio.playSuccessTone();

    // Trigger celebratory sakura confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F7B2C4', '#E87898', '#FFD9E4', '#A9D6F5', '#DCD6F7'],
    });
  };

  const renderCertIcon = (type: string, className = 'w-4 h-4') => {
    switch (type) {
      case 'coffee':
        return <Coffee className={`text-amber-600 ${className}`} />;
      case 'trophy':
        return <Trophy className={`text-amber-500 ${className}`} />;
      case 'python':
        return <Code2 className={`text-[#4B8BBE] ${className}`} />;
      case 'star':
      case 'award':
      default:
        return <Medal className={`text-[#E87898] ${className}`} />;
    }
  };

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-2.5">
        <SakuraIcon className="w-7 h-7 text-[#E87898]" />
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303442] tracking-tight">
            Journey & Growth
          </h2>
          <p className="text-xs sm:text-sm text-[#687080] font-medium -mt-0.5">
            Education milestones, unlocked achievements, and professional chapters
          </p>
        </div>
      </div>

      {/* 3-Column Layout Matching the Reference Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {/* 1. Education Column */}
        <div
          id="education-card"
          className="sakura-card rounded-3xl p-6 flex flex-col justify-between border border-pink-200/80 text-left relative overflow-hidden group"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-pink-100 pb-3">
              <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-[#E87898]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-extrabold text-[#303442]">Education</h3>
            </div>

            {/* Timeline Items */}
            <div className="space-y-5 relative">
              {/* Vertical connector line */}
              <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#E87898] via-pink-200 to-transparent" />

              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="relative pl-7 space-y-1">
                  {/* Timeline dot */}
                  <div className="absolute left-1 top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#E87898] shadow-xs flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E87898]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#E87898] uppercase tracking-wider bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200">
                    {edu.period}
                  </span>

                  <h4 className="text-sm font-extrabold text-[#303442] pt-0.5">
                    {edu.institution}
                  </h4>

                  <p className="text-xs font-bold text-[#687080]">
                    {edu.degree}, {edu.field}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#687080]">
                    <span className="font-bold text-[#E87898]">{edu.score}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-pink-100 mt-4 flex items-center justify-between">
            <span className="text-[11px] text-[#687080] font-medium">Foundations Built</span>
            <BookOpen className="w-4 h-4 text-[#E87898]" />
          </div>
        </div>

        {/* 2. Certifications & Achievements Column */}
        <div
          id="achievements"
          className="sakura-card rounded-3xl p-6 flex flex-col justify-between border border-pink-200/80 text-left relative overflow-hidden group"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#303442]">Certifications</h3>
              </div>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-amber-500" />
                <span>Verified</span>
              </span>
            </div>

            {/* Badges List */}
            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => handleCertificateClick(cert)}
                  className="p-2.5 rounded-2xl bg-white/90 hover:bg-white border border-pink-100 hover:border-amber-300 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between group/cert"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200/60 group-hover/cert:rotate-12 transition-transform">
                      {renderCertIcon(cert.iconType)}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#687080] uppercase">
                        {cert.issuer}
                      </p>
                      <h4 className="text-xs font-extrabold text-[#303442] group-hover/cert:text-[#E87898] transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-emerald-600" />
                    <span>Unlocked</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-pink-100 mt-4 flex items-center justify-between">
            <span className="text-[11px] text-[#687080] font-medium">Click badge to inspect</span>
            <span className="text-xs text-[#E87898] font-bold flex items-center gap-1">
              <Medal className="w-3.5 h-3.5" />
              <span>4 Achievements</span>
            </span>
          </div>
        </div>

        {/* 3. Experience Column */}
        <div
          className="sakura-card rounded-3xl p-6 flex flex-col justify-between border border-pink-200/80 text-left relative overflow-hidden group"
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#303442]">Experience</h3>
              </div>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                Chapter 04
              </span>
            </div>

            {/* Experience Body */}
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div>
                  <h4 className="text-sm font-extrabold text-[#303442]">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-bold text-[#E87898]">
                    {exp.summary}
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-[#687080]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#E87898] font-bold text-sm leading-none">•</span>
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-pink-100 mt-4 flex items-center justify-between">
            <span className="text-[11px] text-[#687080] font-medium">Real-World Execution</span>
            <ScrollText className="w-4 h-4 text-[#E87898]" />
          </div>
        </div>
      </div>

      {/* Certificate Modal Dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border-2 border-pink-200 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-100 to-pink-100 mx-auto flex items-center justify-center shadow-xs">
              {renderCertIcon(selectedCert.iconType, 'w-8 h-8')}
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 inline-flex items-center gap-1">
                <Trophy className="w-3 h-3 text-amber-600" />
                <span>Achievement Unlocked</span>
              </span>
              <h3 className="text-lg font-extrabold text-[#303442] mt-1.5">
                {selectedCert.title}
              </h3>
              <p className="text-xs font-bold text-[#687080]">
                Issued by {selectedCert.issuer} ({selectedCert.issueDate})
              </p>
            </div>

            <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100 text-left space-y-1.5">
              <p className="text-[10px] font-bold uppercase text-[#687080]">
                Skills & Competencies Verified:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skillsUnlocked.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-bold bg-white text-[#E87898] px-2.5 py-0.5 rounded-full border border-pink-200"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-2xl bg-[#E87898] hover:bg-[#d86687] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Collect Badge & Close</span>
              <SakuraIcon className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
