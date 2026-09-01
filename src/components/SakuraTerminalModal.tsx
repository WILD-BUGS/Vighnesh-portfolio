import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Terminal as TerminalIcon,
  Sparkles,
  Flame,
  FolderGit2,
  Trophy,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';
import { SkillIcon } from './SkillIcon';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const SakuraTerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 1,
      command: 'vignesh --version',
      output: (
        <div className="space-y-1 text-pink-300">
          <p className="font-bold flex items-center gap-1.5">
            <SakuraIcon className="w-3.5 h-3.5 text-[#E87898]" />
            <span>Sakura CLI v2.4.0 [Anime Developer Edition]</span>
          </p>
          <p className="text-stone-300">
            Type <span className="text-emerald-400 font-bold">'help'</span> to see available commands or explore Vignesh K's technical profile.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    animeAudio.playChime(750);
    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-stone-300">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <p><span className="text-pink-400 font-mono">whoami</span> - Developer profile synopsis</p>
            <p><span className="text-pink-400 font-mono">skills</span> - List core languages & frameworks</p>
            <p><span className="text-pink-400 font-mono">projects</span> - View anime worlds & applications</p>
            <p><span className="text-pink-400 font-mono">stats</span> - GitHub commits & LeetCode rating</p>
            <p><span className="text-pink-400 font-mono">certs</span> - Unlocked certifications & achievements</p>
            <p><span className="text-pink-400 font-mono">quote</span> - Inspiring anime quote</p>
            <p><span className="text-pink-400 font-mono">contact</span> - Email, phone & location</p>
            <p><span className="text-pink-400 font-mono">hire</span> - S-rank recruit sequence!</p>
            <p><span className="text-pink-400 font-mono">clear</span> - Clear terminal window</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-stone-200">
            <p className="text-pink-300 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-stone-300">{PERSONAL_INFO.bio}</p>
            <p className="text-xs text-stone-400 flex items-center gap-2">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-pink-400" /> {PERSONAL_INFO.location}</span>
              <span>|</span>
              <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3 text-sky-400" /> B.Tech IT</span>
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="grid grid-cols-2 gap-2 text-stone-300">
            {SKILLS.map((s) => (
              <div key={s.id} className="flex items-center justify-between border-b border-stone-800 pb-1">
                <span className="text-pink-300 flex items-center gap-1.5">
                  <SkillIcon iconKey={s.iconKey} className="w-3.5 h-3.5" />
                  <span>{s.name}</span>
                </span>
                <span className="text-emerald-400 font-bold">{s.level}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-stone-300">
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="p-2 bg-stone-900 rounded border border-stone-800">
                <p className="text-pink-400 font-bold">{idx + 1}. {p.title} [{p.category}]</p>
                <p className="text-xs text-stone-400">{p.description}</p>
                <p className="text-[10px] text-emerald-400">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="space-y-1 text-stone-300 font-mono">
            <p className="text-pink-300 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
              <span>Current GitHub Streak: {PERSONAL_INFO.stats.github.currentStreak} Days</span>
            </p>
            <p className="flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Repositories: {PERSONAL_INFO.stats.github.repos} | Commits: {PERSONAL_INFO.stats.github.commits}</span>
            </p>
            <p className="text-amber-400">
              LeetCode Solved: {PERSONAL_INFO.stats.leetcode.solved} ({PERSONAL_INFO.stats.leetcode.rating})
            </p>
          </div>
        );
        break;

      case 'certs':
        output = (
          <div className="space-y-1 text-stone-300">
            {CERTIFICATIONS.map((c) => (
              <p key={c.id} className="text-xs flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-pink-300 font-bold">{c.title}</span> — {c.issuer} ({c.scoreOrLevel})
              </p>
            ))}
          </div>
        );
        break;

      case 'quote':
        output = (
          <div className="p-3 bg-pink-950/40 border border-pink-500/30 rounded text-pink-200 space-y-1">
            <p className="font-japanese font-bold">{PERSONAL_INFO.quote.japanese}</p>
            <p className="italic">"{PERSONAL_INFO.quote.english}" ― {PERSONAL_INFO.quote.author}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-stone-300 space-y-1">
            <p className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-pink-400 underline">{PERSONAL_INFO.email}</a></span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-pink-400" />
              <span>Phone: {PERSONAL_INFO.phone}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>Location: {PERSONAL_INFO.location}</span>
            </p>
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire vignesh':
        output = (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded text-emerald-300 space-y-1 animate-pulse">
            <p className="font-bold text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>RECRUITMENT PROTOCOL INITIATED!</span>
            </p>
            <p className="text-xs">Vignesh is ready to build impactful software for your team. Reach out via vigneshk1845@gmail.com!</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-rose-400">
            Command not recognized: '{input}'. Type <span className="text-emerald-400 font-bold">'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: input,
        output,
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-stone-950 text-stone-100 rounded-2xl border border-pink-500/40 shadow-2xl overflow-hidden flex flex-col font-mono text-xs max-h-[85vh]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-pink-300 font-bold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>vignesh@sakura-box:~</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-pink-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output Window */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 min-h-[300px]">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-pink-400 font-bold">
                <span>sakura-dev $</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Line */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-stone-900 border-t border-stone-800"
        >
          <span className="text-pink-400 font-bold">sakura-dev $</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'stats'..."
            className="flex-1 bg-transparent text-emerald-400 focus:outline-hidden font-mono text-xs"
          />
        </form>
      </div>
    </div>
  );
};
