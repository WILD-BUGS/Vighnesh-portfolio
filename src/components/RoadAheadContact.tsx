import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUp, Sparkles, Sunrise, MailCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';
import { JapaneseQuote } from './JapaneseQuote';

export const RoadAheadContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive Message Form State
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    animeAudio.playChime(880);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    animeAudio.playChime(880);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;

    setIsSubmitting(true);
    animeAudio.playChime(700);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      animeAudio.playSuccessTone();

      // Confetti burst
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#F7B2C4', '#E87898', '#FFD9E4', '#7FB8E8'],
      });

      // Reset form after delay
      setTimeout(() => {
        setName('');
        setSenderEmail('');
        setMessage('');
        setIsSent(false);
      }, 4000);
    }, 900);
  };

  const scrollToTop = () => {
    animeAudio.playChime(659.25);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Sunset Journey Feature Hero Card */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-pink-200 shadow-xl bg-gradient-to-r from-[#FFF0F4] via-[#FFE8D6] to-[#E8F0FE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Sunset Story Text */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-xs font-bold text-[#E87898]">
              <Sunrise className="w-3.5 h-3.5 text-[#E87898]" />
              <span>Final Chapter : The Road Ahead</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#303442] tracking-tight leading-tight">
              The best projects are{' '}
              <span className="font-handwriting text-4xl sm:text-5xl text-[#E87898]">
                still ahead.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-[#687080] leading-relaxed">
              "The next great idea might begin with a simple <code className="text-[#E87898] font-mono-code font-bold bg-white px-1.5 py-0.5 rounded border border-pink-200">Hello, World</code>. Let's create something meaningful together."
            </p>

            {/* Interactive Japanese Quote banner with Hover Translation */}
            <div className="pt-2">
              <JapaneseQuote
                japanese="小さな一歩が、未来をつくる。"
                english="Small steps make the future."
                romaji="Chiisana ippo ga, mirai o tsukuru."
                variant="callout"
              />
            </div>
          </div>

          {/* Sunset Illustration */}
          <div className="lg:col-span-6 h-64 lg:h-80 relative overflow-hidden">
            <img
              src="/src/assets/images/sunset_journey_dev_1788238005780.jpg"
              alt="Anime Vignesh walking toward sunset city"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#FFF0F4] lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>

      {/* Main Let's Connect Card */}
      <div className="sakura-card rounded-3xl p-6 sm:p-8 space-y-6 border border-pink-200/90 text-left">
        {/* Header & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-100 pb-4">
          <div className="flex items-center gap-2.5">
            <SakuraIcon className="w-6 h-6 text-[#E87898]" />
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#303442]">
                Let's Connect
              </h2>
              <p className="text-xs sm:text-sm text-[#687080]">
                I'm always open to collaborating on interesting projects or discussing tech, AI, and problem-solving.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Open for Opportunities</span>
          </div>
        </div>

        {/* 3 Contact Cards Row Matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-100/90 shadow-2xs hover:border-[#E87898] hover:shadow-xs transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E87898] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">
                  Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-extrabold text-[#303442] hover:text-[#E87898] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg text-[#687080] hover:text-[#E87898] hover:bg-pink-50 transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-100/90 shadow-2xs hover:border-[#E87898] hover:shadow-xs transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E87898] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">
                  Phone
                </p>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-extrabold text-[#303442] hover:text-[#E87898] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 rounded-lg text-[#687080] hover:text-[#E87898] hover:bg-pink-50 transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-100/90 shadow-2xs hover:border-[#E87898] hover:shadow-xs transition-all flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E87898] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#687080]">
                Location
              </p>
              <p className="text-xs font-extrabold text-[#303442]">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Sakura Envelope Letter Form */}
        <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-[#303442] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E87898]" />
              <span>Send a Sakura Letter to Vignesh</span>
            </h3>
            <span className="text-[10px] text-[#687080] font-semibold">
              Instant Delivery Simulation
            </span>
          </div>

          {isSent ? (
            <div className="p-6 bg-white rounded-2xl border border-pink-200 text-center space-y-2 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-[#E87898] flex items-center justify-center mx-auto">
                <MailCheck className="w-6 h-6 text-[#E87898]" />
              </div>
              <h4 className="text-base font-extrabold text-[#303442]">
                Sakura Letter Delivered!
              </h4>
              <p className="text-xs text-[#687080]">
                Thank you for reaching out! Vignesh will review your note and respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white px-4 py-2.5 rounded-xl border border-pink-200 text-xs text-[#303442] focus:outline-hidden focus:border-[#E87898] focus:ring-1 focus:ring-[#E87898]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="bg-white px-4 py-2.5 rounded-xl border border-pink-200 text-xs text-[#303442] focus:outline-hidden focus:border-[#E87898] focus:ring-1 focus:ring-[#E87898]"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="Say hello, propose a project collaboration, or discuss AI/ML opportunities..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white px-4 py-2.5 rounded-xl border border-pink-200 text-xs text-[#303442] focus:outline-hidden focus:border-[#E87898] focus:ring-1 focus:ring-[#E87898]"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E87898] hover:bg-[#d86687] text-white text-xs font-bold transition-all shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Delivering Note...</span>
                  ) : (
                    <>
                      <span>Send Sakura Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom Bar Matching Mockup with Interactive Translation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-pink-200/80 text-xs text-[#687080]">
        <div className="flex flex-wrap items-center gap-2">
          <span>© 2026 Vignesh K. All rights reserved.</span>
          <span>•</span>
          <JapaneseQuote
            japanese="小さな一歩が、未来をつくる。"
            english="Small steps make the future."
            variant="inline-badge"
          />
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 font-bold text-[#E87898] hover:text-[#d86687] transition-colors group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
