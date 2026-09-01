import React, { useState } from 'react';
import { Languages, Sparkles, Volume2, ArrowRightLeft } from 'lucide-react';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

interface JapaneseQuoteProps {
  japanese: string;
  english: string;
  author?: string;
  romaji?: string;
  className?: string;
  variant?: 'floating-card' | 'inline-badge' | 'callout' | 'banner';
}

export const JapaneseQuote: React.FC<JapaneseQuoteProps> = ({
  japanese,
  english,
  author,
  romaji,
  className = '',
  variant = 'floating-card',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowEnglish(true);
    animeAudio.playChime(820);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowEnglish(false);
  };

  const handleToggle = () => {
    setShowEnglish(!showEnglish);
    animeAudio.playChime(showEnglish ? 650 : 880);
  };

  if (variant === 'floating-card') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
        className={`group relative bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 select-none ${
          showEnglish ? 'border-[#E87898] bg-pink-50/80 ring-2 ring-pink-300/50' : 'border-pink-200/90'
        } ${className}`}
        title="Hover or tap to reveal English translation"
      >
        {/* Top Hint Pill */}
        <div className="flex items-center justify-between gap-1.5 pb-2 border-b border-pink-100 text-[10px] font-bold">
          <div className="flex items-center gap-1 text-[#E87898]">
            <Languages className="w-3.5 h-3.5" />
            <span>{showEnglish ? 'English Translation' : 'Japanese Quote'}</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-pink-100/80 text-[#E87898] transition-colors">
            {showEnglish ? 'Hovering ✓' : 'Hover to Translate'}
          </span>
        </div>

        {/* Quote Content Transition Container */}
        <div className="py-2.5 min-h-[76px] flex flex-col justify-center text-center">
          {showEnglish ? (
            <div className="space-y-1 animate-fadeIn">
              <p className="font-handwriting text-base sm:text-lg font-bold text-[#E87898] leading-tight">
                "{english}"
              </p>
              {author && <p className="text-[11px] font-bold text-[#687080]">{author}</p>}
            </div>
          ) : (
            <div className="space-y-1 animate-fadeIn">
              <p className="font-japanese font-extrabold text-xs sm:text-sm text-[#303442] leading-relaxed tracking-wider">
                {japanese}
              </p>
              {romaji && <p className="text-[9px] text-[#687080] italic">{romaji}</p>}
              {author && <p className="text-[10px] font-bold text-[#E87898]">{author}</p>}
            </div>
          )}
        </div>

        {/* Footer info & interactive indicator */}
        <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-[9px] text-[#687080]">
          <div className="flex items-center gap-1">
            <SakuraIcon className="w-3 h-3 text-[#F7B2C4]" />
            <span className="italic">{showEnglish ? 'Drag away to reset' : 'Hover or tap to translate'}</span>
          </div>
          <ArrowRightLeft className="w-3 h-3 text-pink-400 group-hover:rotate-180 transition-transform duration-300" />
        </div>
      </div>
    );
  }

  if (variant === 'callout') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
        className={`group p-3.5 rounded-2xl border-l-4 transition-all duration-300 cursor-pointer text-left relative overflow-hidden select-none ${
          showEnglish
            ? 'bg-pink-100/80 border-[#E87898] shadow-xs'
            : 'bg-pink-50/70 border-[#E87898]'
        } ${className}`}
      >
        <div className="flex items-center justify-between text-[10px] text-[#687080] font-bold pb-1">
          <div className="flex items-center gap-1 text-[#E87898]">
            <Languages className="w-3 h-3" />
            <span>{showEnglish ? 'Translated into English' : 'Japanese Inscription'}</span>
          </div>
          <span className="text-[9px] bg-white px-2 py-0.5 rounded-full border border-pink-200 text-[#E87898]">
            {showEnglish ? 'Translated' : 'Hover to Translate'}
          </span>
        </div>

        {showEnglish ? (
          <p className="font-handwriting text-lg sm:text-xl font-bold text-[#E87898] leading-tight animate-fadeIn py-1">
            "{english}"
          </p>
        ) : (
          <p className="font-japanese text-sm font-bold text-[#303442] leading-snug animate-fadeIn py-1">
            {japanese}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-[#687080] font-medium pt-1">
          {author && <span>― {author}</span>}
          <div className="flex items-center gap-1 text-[10px] text-pink-400">
            <SakuraIcon className="w-3 h-3" />
            <span>{showEnglish ? 'English' : '日本語'}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
        className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer select-none ${
          showEnglish
            ? 'bg-pink-100 border-[#E87898] text-[#E87898] shadow-xs'
            : 'bg-white/90 border-pink-200 text-[#303442] hover:border-pink-300'
        } ${className}`}
      >
        <Languages className="w-3.5 h-3.5 text-[#E87898] shrink-0" />
        {showEnglish ? (
          <span className="text-xs font-bold text-[#E87898] animate-fadeIn">
            "{english}"
          </span>
        ) : (
          <span className="font-japanese text-xs font-bold text-[#303442] animate-fadeIn">
            {japanese}
          </span>
        )}
        <span className="text-[9px] font-semibold text-[#687080] bg-pink-50 px-1.5 py-0.5 rounded ml-1">
          {showEnglish ? 'En' : 'Jp'}
        </span>
      </div>
    );
  }

  // Default inline badge
  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      className={`group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all duration-300 cursor-pointer select-none ${
        showEnglish
          ? 'bg-pink-100 border-[#E87898] text-[#E87898]'
          : 'bg-white/90 border-pink-200 text-[#303442] hover:border-pink-300'
      } ${className}`}
      title="Hover or drag over to see English translation"
    >
      <Languages className="w-3 h-3 text-[#E87898] shrink-0" />
      {showEnglish ? (
        <span className="text-[11px] font-bold text-[#E87898] animate-fadeIn">
          {english}
        </span>
      ) : (
        <span className="font-japanese text-[11px] font-bold text-[#303442] animate-fadeIn">
          {japanese}
        </span>
      )}
    </span>
  );
};
