import React from 'react';
import { X, Download, Printer, ExternalLink, Sparkles, Award, GraduationCap, Briefcase, Code, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, EDUCATION_ITEMS, CERTIFICATIONS, EXPERIENCE } from '../data/portfolioData';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    animeAudio.playChime(659.25);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl border-2 border-pink-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-50/80 border-b border-pink-100 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <SakuraIcon className="w-5 h-5 text-[#E87898]" />
            <div>
              <h3 className="text-base font-extrabold text-[#303442]">
                Curriculum Vitae — Vignesh K
              </h3>
              <p className="text-[10px] text-[#687080] font-semibold">
                Software Developer • Computer Vision • Machine Learning
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-pink-200 text-xs font-bold text-[#303442] hover:text-[#E87898] transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-pink-100 text-stone-600 hover:text-[#E87898] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Scrollable) */}
        <div className="p-8 overflow-y-auto space-y-6 text-left text-[#303442] text-xs">
          {/* Resume Header */}
          <div className="border-b-2 border-[#E87898] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-[#303442] tracking-tight">
                VIGNESH K
              </h1>
              <p className="text-sm font-bold text-[#E87898] mt-0.5">
                Software Developer • AI & Machine Learning Enthusiast
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1 text-[11px] text-[#687080]">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-[#E87898]" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-[#E87898]" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3 h-3 text-[#E87898]" />
                <span>{PERSONAL_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#E87898] border-b border-pink-100 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-[#474c59] leading-relaxed">
              {PERSONAL_INFO.bio} Hands-on builder passionate about applying Computer Vision algorithms, scalable full-stack architectures, and robust algorithmic problem-solving to real-world software.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#E87898] border-b border-pink-100 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h2>
            {EDUCATION_ITEMS.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-extrabold text-[#303442]">{edu.institution}</h3>
                  <p className="text-[11px] text-[#687080]">{edu.degree} in {edu.field} ({edu.score})</p>
                </div>
                <span className="font-bold text-[#E87898] text-[11px]">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#E87898] border-b border-pink-100 pb-1 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="font-bold block text-[#303442]">Languages</span>
                <span className="text-[11px] text-[#687080]">Python, Java, JavaScript, TypeScript, SQL</span>
              </div>
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="font-bold block text-[#303442]">AI & Vision</span>
                <span className="text-[11px] text-[#687080]">OpenCV, YOLOv8, FaceNet, PyTorch, NumPy</span>
              </div>
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="font-bold block text-[#303442]">Web & Backend</span>
                <span className="text-[11px] text-[#687080]">Flask, Node.js, Express, React, RESTful APIs</span>
              </div>
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="font-bold block text-[#303442]">Databases & Tools</span>
                <span className="text-[11px] text-[#687080]">MySQL, SQLite, Git, GitHub, Linux, JWT</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#E87898] border-b border-pink-100 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Projects</span>
            </h2>
            {PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-[#303442]">{proj.title}</h3>
                  <span className="text-[10px] font-bold text-[#E87898] bg-pink-50 px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                </div>
                <p className="text-[11px] text-[#687080] leading-snug">{proj.fullOverview}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.techStack.map((t) => (
                    <span key={t} className="text-[9px] font-bold bg-stone-100 px-1.5 py-0.5 rounded text-stone-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#E87898] border-b border-pink-100 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications & Highlights</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-pink-50/40 border border-pink-100">
                  <span className="font-bold text-[#303442]">{c.title} — {c.issuer}</span>
                  <span className="text-[10px] text-emerald-600 font-bold">{c.scoreOrLevel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
