import React, { useState } from 'react';
import {
  GitPullRequest,
  GitCommit,
  FolderGit2,
  Flame,
  Award,
  Sparkles,
  Trophy,
  Code2,
  ExternalLink,
  Activity,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
  Swords,
  Timer,
  Terminal,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  GITHUB_LIVE_TIMELINE,
  LEETCODE_LIVE_TIMELINE,
} from '../data/portfolioData';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';
import { JapaneseQuote } from './JapaneseQuote';

export const DeveloperStats: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; commits: number } | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timelines' | 'rpg_levels'>('dashboard');
  const [timelinePlatform, setTimelinePlatform] = useState<'all' | 'github' | 'leetcode'>('all');

  // Generate simulated GitHub heatmap commit activity (7 rows x 22 weeks)
  const generateHeatmap = () => {
    const weeks = [];
    for (let w = 0; w < 22; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const baseChance = w > 12 ? 0.85 : 0.6;
        const hasCommits = Math.random() < baseChance;
        const count = hasCommits ? Math.floor(Math.random() * 8) + 1 : 0;
        days.push({
          id: `${w}-${d}`,
          count,
          level: count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : 3,
        });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const [heatmap] = useState(generateHeatmap());

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-pink-50/80 hover:border-pink-300';
      case 1:
        return 'bg-[#FFD9E4] hover:bg-pink-300';
      case 2:
        return 'bg-[#F7B2C4] hover:bg-[#E87898]';
      case 3:
        return 'bg-[#E87898] hover:bg-[#d86687] shadow-2xs';
      default:
        return 'bg-pink-50';
    }
  };

  return (
    <section id="stats" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <SakuraIcon className="w-7 h-7 text-[#E87898]" />
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303442] tracking-tight">
              Coding Universe & Live Telemetry
            </h2>
            <p className="text-xs sm:text-sm text-[#687080] font-medium -mt-0.5">
              Live GitHub commits, LeetCode accomplishments, and problem-solving timeline
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-white/90 p-1.5 rounded-2xl border border-pink-200 shadow-2xs shrink-0">
          <button
            onClick={() => {
              animeAudio.playChime(600);
              setActiveTab('dashboard');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#E87898] text-white shadow-xs'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            Metrics Dashboard
          </button>

          <button
            onClick={() => {
              animeAudio.playChime(700);
              setActiveTab('timelines');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'timelines'
                ? 'bg-[#E87898] text-white shadow-xs'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Live Timelines</span>
          </button>

          <button
            onClick={() => {
              animeAudio.playChime(800);
              setActiveTab('rpg_levels');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'rpg_levels'
                ? 'bg-[#E87898] text-white shadow-xs'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            <span>RPG Status</span>
          </button>
        </div>
      </div>

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* 1. GitHub Stats Card (Left) */}
          <div className="lg:col-span-3 sakura-card rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden group border border-pink-200/80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-[#303442] hover:text-[#E87898] flex items-center gap-1.5 transition-colors group/link"
                >
                  <FolderGit2 className="w-4 h-4 text-[#E87898]" />
                  <span>GitHub Stats</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#E87898] bg-pink-50 hover:bg-pink-100 px-2 py-0.5 rounded-full border border-pink-200 transition-colors"
                >
                  @{PERSONAL_INFO.stats.github.username}
                </a>
              </div>

              {/* Stats List */}
              <div className="space-y-2.5 text-xs text-left">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
                  <div className="flex items-center gap-2 text-[#687080]">
                    <FolderGit2 className="w-3.5 h-3.5 text-pink-400" />
                    <span>Repositories</span>
                  </div>
                  <span className="font-bold text-[#303442]">
                    {PERSONAL_INFO.stats.github.repos}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
                  <div className="flex items-center gap-2 text-[#687080]">
                    <GitCommit className="w-3.5 h-3.5 text-rose-400" />
                    <span>Commits</span>
                  </div>
                  <span className="font-bold text-[#E87898]">
                    {PERSONAL_INFO.stats.github.commits}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
                  <div className="flex items-center gap-2 text-[#687080]">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Contributions</span>
                  </div>
                  <span className="font-bold text-sky-600">
                    {PERSONAL_INFO.stats.github.contributions}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
                  <div className="flex items-center gap-2 text-[#687080]">
                    <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />
                    <span>Pull Requests</span>
                  </div>
                  <span className="font-bold text-purple-600">
                    {PERSONAL_INFO.stats.github.pullRequests}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Link Button */}
            <div className="pt-4 border-t border-pink-100 mt-3 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#E87898] hover:text-[#d86687] flex items-center gap-1.5"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <SakuraIcon className="w-4 h-4 text-[#F7B2C4]" />
            </div>
          </div>

          {/* 2. LeetCode Stats Card (Middle Left) */}
          <div className="lg:col-span-3 sakura-card rounded-3xl p-5 flex flex-col justify-between border border-pink-200/80">
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-[#303442] hover:text-amber-600 flex items-center gap-1.5 transition-colors group/lc"
                >
                  <Code2 className="w-4 h-4 text-amber-500" />
                  <span>LeetCode Stats</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/lc:opacity-100 transition-transform" />
                </a>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  {PERSONAL_INFO.stats.leetcode.rating}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase text-[#687080]">
                  Problems Solved
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#E87898]">
                    {PERSONAL_INFO.stats.leetcode.solved}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    Acc: {PERSONAL_INFO.stats.leetcode.accuracy}
                  </span>
                </div>
              </div>

              {/* Sparkline curve */}
              <div className="h-10 flex items-end gap-1 px-1">
                {[30, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-pink-200 to-[#E87898] rounded-t-sm transition-all duration-300 hover:opacity-100 opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-1 text-center">
                <div className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <p className="text-[9px] text-emerald-700 font-bold">Easy</p>
                  <p className="text-xs font-extrabold text-emerald-800">
                    {PERSONAL_INFO.stats.leetcode.easy}
                  </p>
                </div>
                <div className="bg-amber-50 p-1.5 rounded-lg border border-amber-200">
                  <p className="text-[9px] text-amber-700 font-bold">Med</p>
                  <p className="text-xs font-extrabold text-amber-800">
                    {PERSONAL_INFO.stats.leetcode.medium}
                  </p>
                </div>
                <div className="bg-rose-50 p-1.5 rounded-lg border border-rose-200">
                  <p className="text-[9px] text-rose-700 font-bold">Hard</p>
                  <p className="text-xs font-extrabold text-rose-800">
                    {PERSONAL_INFO.stats.leetcode.hard}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-pink-100 flex items-center justify-between text-left">
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <span>Open LeetCode Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[10px] text-[#687080] font-bold">
                {PERSONAL_INFO.stats.leetcode.contests} Contests
              </span>
            </div>
          </div>

          {/* 3. GitHub Streak & Heatmap Card (Middle Right) */}
          <div className="lg:col-span-3 sakura-card rounded-3xl p-5 flex flex-col justify-between border border-pink-200/80">
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-[#303442] hover:text-orange-600 flex items-center gap-1.5"
                >
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-400 animate-pulse" />
                  <span>GitHub Streak</span>
                </a>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-orange-500" />
                  <span>Active</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-orange-600">
                  {PERSONAL_INFO.stats.github.currentStreak}
                </span>
                <span className="text-xs font-bold text-[#687080]">Days Continuous</span>
              </div>

              {/* Heatmap Months Header */}
              <div className="flex justify-between text-[9px] font-bold text-[#687080] px-0.5">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>

              {/* Matrix Heatmap Grid */}
              <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto py-1">
                {heatmap.map((week, wIdx) =>
                  week.map((day, dIdx) => (
                    <div
                      key={day.id}
                      onMouseEnter={() => {
                        setHoveredCell({ day: wIdx * 7 + dIdx, commits: day.count });
                        if (day.count > 0) animeAudio.playChime(700 + day.count * 40);
                      }}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-2.5 h-2.5 rounded-xs transition-all duration-150 cursor-pointer ${getHeatmapColor(
                        day.level
                      )}`}
                      title={`${day.count} commits`}
                    />
                  ))
                )}
              </div>

              {/* Hover Commit Info */}
              <p className="text-[10px] text-[#687080] font-semibold h-4 flex items-center gap-1">
                <SakuraIcon className="w-3 h-3 text-[#E87898]" />
                <span>
                  {hoveredCell
                    ? `${hoveredCell.commits} commits recorded on this day`
                    : 'Hover over sakura squares for details'}
                </span>
              </p>
            </div>

            <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-[10px] text-[#687080]">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-xs bg-pink-50 border border-pink-200" />
                <div className="w-2 h-2 rounded-xs bg-[#FFD9E4]" />
                <div className="w-2 h-2 rounded-xs bg-[#F7B2C4]" />
                <div className="w-2 h-2 rounded-xs bg-[#E87898]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* 4. Japanese Consistency Calligraphy Card with Hover Translation (Right) */}
          <div className="lg:col-span-3 sakura-card rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white/90 to-pink-50/80 border border-pink-200/80">
            <div className="space-y-3 text-center">
              {/* Interactive Japanese Quote Card */}
              <JapaneseQuote
                japanese={PERSONAL_INFO.consistencyQuote.japanese}
                english={PERSONAL_INFO.consistencyQuote.english}
                romaji={PERSONAL_INFO.consistencyQuote.romaji}
                variant="floating-card"
              />

              {/* Secondary Inscription */}
              <div className="pt-2">
                <JapaneseQuote
                  japanese={PERSONAL_INFO.consistencyQuote.secondaryJp}
                  english={PERSONAL_INFO.consistencyQuote.secondaryEn}
                  romaji={PERSONAL_INFO.consistencyQuote.secondaryRomaji}
                  variant="callout"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-pink-100 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#E87898]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Daily Continuous Evolution</span>
            </div>
          </div>
        </div>
      )}

      {/* LIVE TIMELINES TAB */}
      {activeTab === 'timelines' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Sub-Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 p-3 rounded-2xl border border-pink-200 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#303442]">Filter Timeline:</span>
              <button
                onClick={() => setTimelinePlatform('all')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  timelinePlatform === 'all'
                    ? 'bg-[#303442] text-white'
                    : 'bg-stone-100 text-[#687080] hover:text-[#303442]'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setTimelinePlatform('github')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  timelinePlatform === 'github'
                    ? 'bg-[#E87898] text-white'
                    : 'bg-pink-50 text-[#E87898] hover:bg-pink-100'
                }`}
              >
                <FolderGit2 className="w-3 h-3" />
                <span>GitHub Only</span>
              </button>
              <button
                onClick={() => setTimelinePlatform('leetcode')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  timelinePlatform === 'leetcode'
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                }`}
              >
                <Code2 className="w-3 h-3" />
                <span>LeetCode Only</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#303442] hover:text-[#E87898] flex items-center gap-1 underline"
              >
                <span>github.com/vigneshk1845</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-pink-300">•</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 underline"
              >
                <span>leetcode.com/u/M9iiQQLnVQ</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Timeline Grid (2 Columns: GitHub Activity Stream & LeetCode Solved Stream) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GitHub Timeline Column */}
            {(timelinePlatform === 'all' || timelinePlatform === 'github') && (
              <div className="sakura-card rounded-3xl p-6 border border-pink-200/80 text-left space-y-4">
                <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-[#E87898]">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#303442]">GitHub Activity Stream</h3>
                      <p className="text-[10px] text-[#687080]">Real-time commits & repository sync</p>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#E87898] bg-pink-50 hover:bg-pink-100 px-2.5 py-1 rounded-full border border-pink-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Open GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* GitHub Event List */}
                <div className="space-y-3">
                  {GITHUB_LIVE_TIMELINE.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-white/90 border border-pink-100 hover:border-pink-300 hover:shadow-xs transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-[#E87898]">
                            {item.hash}
                          </span>
                          <a
                            href={item.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#303442] hover:text-[#E87898] transition-colors"
                          >
                            vigneshk1845 / {item.repo}
                          </a>
                        </div>
                        <span className="text-[10px] text-[#687080] font-medium">
                          {item.timestamp}
                        </span>
                      </div>

                      <p className="text-xs text-[#474c59] font-medium leading-relaxed font-mono">
                        {item.message}
                      </p>

                      <div className="flex items-center justify-between text-[10px] text-[#687080] pt-1 border-t border-pink-50">
                        <div className="flex items-center gap-1.5">
                          <GitCommit className="w-3 h-3 text-pink-400" />
                          <span>branch: {item.branch}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-emerald-600 font-bold">+{item.changes.additions}</span>
                          <span className="text-rose-500 font-bold">-{item.changes.deletions}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LeetCode Timeline Column */}
            {(timelinePlatform === 'all' || timelinePlatform === 'leetcode') && (
              <div className="sakura-card rounded-3xl p-6 border border-pink-200/80 text-left space-y-4">
                <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#303442]">LeetCode Solved Stream</h3>
                      <p className="text-[10px] text-[#687080]">350+ Problems • Real-time DSA Solutions</p>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1 transition-colors"
                  >
                    <span>Open LeetCode</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* LeetCode Solved List */}
                <div className="space-y-3">
                  {LEETCODE_LIVE_TIMELINE.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-white/90 border border-pink-100 hover:border-amber-300 hover:shadow-xs transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              item.difficulty === 'Easy'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : item.difficulty === 'Medium'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-rose-50 text-rose-700 border-rose-200'
                            }`}
                          >
                            {item.difficulty}
                          </span>
                          <a
                            href={item.problemUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-[#303442] hover:text-amber-600 transition-colors flex items-center gap-1"
                          >
                            <span>{item.title}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        </div>
                        <span className="text-[10px] text-[#687080] font-medium">
                          {item.timestamp}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] pt-1 border-t border-pink-50">
                        <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{item.status} ({item.language})</span>
                        </div>

                        <div className="flex items-center gap-2 text-[#687080]">
                          <span className="font-semibold">{item.category}</span>
                          <span>•</span>
                          <span className="text-indigo-600 font-bold">{item.runtimeSpeed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* RPG STATUS SCREEN */}
      {activeTab === 'rpg_levels' && (
        <div className="sakura-card rounded-3xl p-6 sm:p-8 space-y-6 border border-pink-200/80 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-100 pb-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E87898] to-[#F7B2C4] flex items-center justify-center text-white shadow-sm">
                <Swords className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#303442]">
                  CHARACTER STATS : VIGNESH K
                </h3>
                <p className="text-xs text-[#687080] font-semibold">
                  CLASS: SOFTWARE DEVELOPER • SPECIALIZATION: COMPUTER VISION & ML
                </p>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-pink-100 text-[#E87898] border border-pink-200 shrink-0">
              POWER RATING: S-RANK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.rpgLevels.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-2xl border border-pink-100 space-y-2 text-left"
              >
                <div className="flex items-center justify-between font-bold text-xs">
                  <span className="text-[#303442]">{stat.skill}</span>
                  <span className="text-[#E87898]">LVL {stat.level} / {stat.max}</span>
                </div>
                <div className="w-full bg-pink-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#F7B2C4] to-[#E87898] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(stat.level / stat.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
