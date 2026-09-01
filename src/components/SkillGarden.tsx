import React, { useState } from 'react';
import { Code, Sparkles, Sprout } from 'lucide-react';
import { SKILLS, SOFT_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';
import { SkillIcon } from './SkillIcon';

export const SkillGarden: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSkillHover = (skill: SkillItem) => {
    setHoveredSkill(skill.id);
    animeAudio.playChime(600 + (skill.level / 100) * 400);
  };

  return (
    <div
      id="skills"
      className="sakura-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono-code font-bold text-lg text-[#E87898]">{`</>`}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#303442] tracking-tight">
              Tech Stack
            </h2>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span>Skill Garden</span>
          </span>
        </div>

        {/* Skill Garden Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SKILLS.map((skill) => {
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                onMouseEnter={() => handleSkillHover(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group/skill ${
                  isHovered
                    ? 'bg-gradient-to-b from-pink-50/90 to-white border-[#E87898] shadow-md -translate-y-1'
                    : 'bg-white/70 hover:bg-white border-pink-100/80 shadow-2xs'
                }`}
              >
                {/* Growth Stage SVG Icon in Top Right */}
                <div className="absolute top-2 right-2">
                  {isHovered ? (
                    <SakuraIcon className="w-3.5 h-3.5 text-[#E87898] animate-bounce" />
                  ) : (
                    <Sprout className="w-3 h-3 text-emerald-500 opacity-80" />
                  )}
                </div>

                {/* Skill SVG Icon */}
                <div className="p-2 mb-1 rounded-xl bg-pink-50/60 border border-pink-100/60 transform group-hover/skill:scale-115 transition-transform flex items-center justify-center">
                  <SkillIcon iconKey={skill.iconKey} className="w-6 h-6" />
                </div>

                {/* Skill Name */}
                <p className="text-xs sm:text-sm font-bold text-[#303442] tracking-tight line-clamp-1">
                  {skill.name}
                </p>

                {/* Mini Level Gauge */}
                <div className="w-full bg-pink-100/70 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: isHovered ? `${skill.level}%` : `${skill.level * 0.85}%`,
                      backgroundColor: isHovered ? '#E87898' : '#F7B2C4',
                    }}
                  />
                </div>

                {/* Hover Growth Tooltip */}
                {isHovered && (
                  <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-48 bg-stone-900/95 text-white text-[10px] p-2 rounded-xl shadow-xl z-30 pointer-events-none animate-fadeIn border border-pink-400/40">
                    <div className="flex items-center justify-between font-bold text-pink-300 mb-0.5">
                      <span>Proficiency: {skill.level}%</span>
                      <span>{skill.experience}</span>
                    </div>
                    <p className="text-stone-300 text-[9px] line-clamp-2 leading-tight">
                      {skill.growthDescription}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-2 pt-2 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#687080] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E87898]" />
            <span>Soft Skills</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((softSkill) => (
              <span
                key={softSkill}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 border border-pink-200/90 text-[#303442] hover:border-[#E87898] hover:text-[#E87898] hover:bg-pink-50/50 transition-all duration-200 shadow-2xs cursor-default"
              >
                {softSkill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
