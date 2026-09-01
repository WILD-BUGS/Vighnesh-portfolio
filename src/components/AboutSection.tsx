import React from 'react';
import { User, MapPin, Briefcase, Sparkles, Heart, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SakuraIcon } from './SakuraIcon';
import { JapaneseQuote } from './JapaneseQuote';

export const AboutSection: React.FC = () => {
  return (
    <div
      id="about"
      className="sakura-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Decorative Sakura Corner SVG */}
      <div className="absolute -top-8 -right-8 text-pink-100/70 pointer-events-none group-hover:rotate-12 transition-transform duration-500">
        <SakuraIcon className="w-32 h-32" />
      </div>

      <div className="space-y-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SakuraIcon className="w-5 h-5 text-[#E87898]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#303442] tracking-tight">
              About Me
            </h2>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E87898] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
            Character Profile
          </span>
        </div>

        {/* Content Layout: Circular Avatar + Bio */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* Avatar with Sakura Ring */}
          <div className="sm:col-span-4 flex justify-center">
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#F7B2C4] via-[#A9D6F5] to-[#DCD6F7] animate-spin blur-xs" style={{ animationDuration: '12s' }} />
              
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-3 border-white shadow-lg bg-pink-50">
                <img
                  src="/src/assets/images/profile_avatar_1788237936523.jpg"
                  alt="Vignesh K anime profile avatar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Status Mini Pill with SVG Indicator */}
              <div className="absolute -bottom-1 -right-1 bg-white px-2.5 py-1 rounded-full border border-pink-200 shadow-xs flex items-center gap-1.5 text-[10px] font-bold text-[#E87898]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Activity className="w-3 h-3 text-emerald-600" />
                <span>Active Dev</span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="sm:col-span-8 space-y-3 text-left">
            <p className="text-sm sm:text-base text-[#303442] leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Interactive Japanese Quote with Hover Translation */}
            <div className="pt-1">
              <JapaneseQuote
                japanese="未来を予測する最善の方法は、それを創り出すことだ。"
                english="The best way to predict the future is to create it."
                author="Alan Kay"
                variant="callout"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meta Stats Pills Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-6 border-t border-pink-100/80 mt-6">
        <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/80 border border-pink-100/90 shadow-2xs">
          <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-[#E87898]">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">Name</p>
            <p className="text-xs font-extrabold text-[#303442]">{PERSONAL_INFO.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/80 border border-pink-100/90 shadow-2xs">
          <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">Location</p>
            <p className="text-xs font-extrabold text-[#303442]">{PERSONAL_INFO.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/80 border border-pink-100/90 shadow-2xs">
          <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">Role</p>
            <p className="text-xs font-extrabold text-[#303442]">{PERSONAL_INFO.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
