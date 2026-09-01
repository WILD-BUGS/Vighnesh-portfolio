import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Shield,
  Eye,
  Layers,
  Cpu,
  Sparkles,
  Terminal,
  BookOpen,
  Settings,
  Lock,
  RotateCw,
  Target,
  Rocket,
  UserCheck,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive_demo' | 'architecture'>('overview');
  
  // Interactive Simulator States
  const [cvScanning, setCvScanning] = useState(false);
  const [attendanceLogged, setAttendanceLogged] = useState(false);
  const [testApiKey, setTestApiKey] = useState('sakura_live_9f83a2e1d74b901a');
  const [encryptedKey, setEncryptedKey] = useState('U2FsdGVkX1+vG8sJ214...');
  const [encryptionDone, setEncryptionDone] = useState(false);
  const [complaintStatus, setComplaintStatus] = useState<'Raised' | 'Assigned' | 'Resolved'>('Raised');

  if (!project) return null;

  const runCvScan = () => {
    setCvScanning(true);
    animeAudio.playChime(783.99);
    setTimeout(() => {
      setCvScanning(false);
      setAttendanceLogged(true);
      animeAudio.playSuccessTone();
    }, 1200);
  };

  const runEncrypt = () => {
    animeAudio.playChime(659.25);
    setEncryptionDone(true);
    setEncryptedKey('AES256::' + btoa(testApiKey).substring(0, 18) + '==');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
      <div
        id="case-study-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF9F5] rounded-3xl border-2 border-pink-200/90 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/90 border-b border-pink-100/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-[#E87898]">
              <SakuraIcon className="w-4 h-4 text-[#E87898]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E87898]">
                {project.worldSubtitle}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#303442]">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:bg-pink-100 hover:text-[#E87898] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 py-2 bg-pink-50/50 border-b border-pink-100">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-white text-[#E87898] shadow-xs border border-pink-200'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>World Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('interactive_demo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'interactive_demo'
                ? 'bg-white text-[#E87898] shadow-xs border border-pink-200'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E87898]" />
            <span>Live Interactive Simulation</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-white text-[#E87898] shadow-xs border border-pink-200'
                : 'text-[#687080] hover:text-[#303442]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Systems & Pipeline</span>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Cover Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-pink-200 shadow-sm max-h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E87898] text-white">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold">{project.worldName}</h4>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-2xl border border-pink-100 text-center shadow-2xs"
                  >
                    <p className="text-[10px] font-bold uppercase text-[#687080]">
                      {metric.label}
                    </p>
                    <p className="text-lg sm:text-xl font-extrabold text-[#E87898]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Problem & Solution */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-[#303442] uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#E87898]" />
                  <span>Problem Solved</span>
                </h4>
                <p className="text-sm text-[#474c59] bg-white p-4 rounded-2xl border border-pink-100 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-[#303442] uppercase tracking-wider flex items-center gap-1.5">
                  <SakuraIcon className="w-4 h-4 text-[#E87898]" />
                  <span>Project Synopsis</span>
                </h4>
                <p className="text-sm text-[#474c59] leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-[#303442] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Key Highlights & Capabilities</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#303442] bg-white/90 p-2.5 rounded-xl border border-pink-100/90 flex items-start gap-2"
                    >
                      <span className="text-[#E87898] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'interactive_demo' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-pink-200 shadow-sm">
                <h4 className="text-sm font-bold text-[#303442] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E87898]" />
                  <span>Interactive World Simulator</span>
                </h4>

                {project.interactiveDemoType === 'cv_detection' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#687080]">
                      Simulate real-time camera face recognition and automated biometric attendance logging.
                    </p>
                    
                    <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-pink-300 bg-stone-900 text-white p-4 h-64 flex flex-col justify-between">
                      {/* Simulated Camera Feed */}
                      <div className="flex justify-between items-center text-xs font-mono text-emerald-400">
                        <span>LIVE CAMERA FEED: [CLASSROOM-CAM-01]</span>
                        <span>FPS: 30.2 | LATENCY: 18ms</span>
                      </div>

                      {/* Detection Bounding Boxes */}
                      <div className="relative flex-1 flex items-center justify-center">
                        <div className="relative border-2 border-emerald-400 p-4 rounded-lg bg-emerald-500/10 backdrop-blur-xs">
                          <span className="absolute -top-3 left-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                            Vignesh K (ID: 2023IT042) • 99.2% match
                          </span>
                          <UserCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                          <div className="text-[10px] text-emerald-300 mt-1 font-mono">
                            Status: Authenticated
                          </div>
                        </div>

                        {cvScanning && (
                          <div className="absolute inset-0 bg-emerald-400/20 flex items-center justify-center animate-pulse">
                            <span className="bg-black/80 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400">
                              Extracting 128-d FaceNet Vector...
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Log output */}
                      <div className="bg-stone-950/80 p-2 rounded text-[10px] font-mono text-pink-300 flex justify-between items-center">
                        <span>
                          {attendanceLogged
                            ? '✓ ATTENDANCE RECORDED IN MYSQL [TIMESTAMP: 2026-08-31 09:00:02 AM]'
                            : '⚡ Ready for student scan.'}
                        </span>
                        <button
                          onClick={runCvScan}
                          disabled={cvScanning}
                          className="bg-[#E87898] hover:bg-[#d86687] text-white px-3 py-1 rounded text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{cvScanning ? 'Scanning Frame...' : 'Trigger Scan'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {project.interactiveDemoType === 'api_vault' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#687080]">
                      Test AES-256 cryptographic vault encryption and token bucket rate limits.
                    </p>

                    <div className="space-y-3 bg-stone-900 text-white p-4 rounded-2xl font-mono text-xs">
                      <div>
                        <label className="text-[10px] text-pink-300 uppercase font-bold block mb-1">
                          Plaintext Secret Key:
                        </label>
                        <input
                          type="text"
                          value={testApiKey}
                          onChange={(e) => setTestApiKey(e.target.value)}
                          className="w-full bg-stone-800 border border-stone-700 px-3 py-2 rounded text-emerald-300 font-mono text-xs focus:outline-hidden focus:border-[#E87898]"
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={runEncrypt}
                          className="bg-[#E87898] hover:bg-[#d86687] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Encrypt with AES-256-GCM</span>
                        </button>
                      </div>

                      {encryptionDone && (
                        <div className="p-3 bg-stone-950 rounded-xl border border-emerald-500/40 text-emerald-400 space-y-1">
                          <p className="text-[10px] uppercase font-bold text-pink-300">
                            Vault Cipher Output:
                          </p>
                          <p className="font-mono text-xs break-all">{encryptedKey}</p>
                          <p className="text-[9px] text-stone-400">
                            Status: Zero-knowledge encrypted at rest. Rate quota: 100 req/min.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {project.interactiveDemoType === 'complaint_system' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#687080]">
                      Interactive status tracking pipeline simulation across Student, Faculty, and Admin.
                    </p>

                    <div className="p-4 bg-pink-50/70 rounded-2xl border border-pink-200 space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-[#303442]">
                        <span>Ticket #TK-8492 : Lab AC Calibration</span>
                        <span className="px-2 py-0.5 rounded-full bg-pink-100 text-[#E87898] text-[10px]">
                          Priority: Medium
                        </span>
                      </div>

                      {/* Pipeline steps */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div
                          className={`p-2.5 rounded-xl border transition-all ${
                            complaintStatus === 'Raised'
                              ? 'bg-[#E87898] text-white font-bold border-[#E87898]'
                              : 'bg-white text-stone-600 border-pink-100'
                          }`}
                        >
                          1. Raised (Student)
                        </div>
                        <div
                          className={`p-2.5 rounded-xl border transition-all ${
                            complaintStatus === 'Assigned'
                              ? 'bg-amber-500 text-white font-bold border-amber-500'
                              : 'bg-white text-stone-600 border-pink-100'
                          }`}
                        >
                          2. In Progress (Faculty)
                        </div>
                        <div
                          className={`p-2.5 rounded-xl border transition-all ${
                            complaintStatus === 'Resolved'
                              ? 'bg-emerald-500 text-white font-bold border-emerald-500'
                              : 'bg-white text-stone-600 border-pink-100'
                          }`}
                        >
                          3. Resolved (Admin)
                        </div>
                      </div>

                      {/* Advance Pipeline Button */}
                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          onClick={() => {
                            animeAudio.playChime(700);
                            setComplaintStatus(
                              complaintStatus === 'Raised'
                                ? 'Assigned'
                                : complaintStatus === 'Assigned'
                                ? 'Resolved'
                                : 'Raised'
                            );
                          }}
                          className="px-4 py-2 rounded-xl bg-white border border-pink-300 text-xs font-bold text-[#E87898] hover:bg-pink-50 transition-colors shadow-2xs flex items-center gap-1.5"
                        >
                          <span>Advance Status Cycle</span>
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {project.interactiveDemoType === 'ai_assistant' && (
                  <div className="text-center py-8 space-y-3">
                    <Rocket className="w-12 h-12 text-[#E87898] mx-auto animate-bounce" />
                    <h5 className="font-extrabold text-[#303442]">
                      New Frontiers in Active Development!
                    </h5>
                    <p className="text-xs text-[#687080] max-w-md mx-auto">
                      Vignesh is currently experimenting with agentic reasoning models and distributed microservices. Check back soon or connect via GitHub!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-pink-200 space-y-4">
                <h4 className="text-sm font-bold text-[#303442] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E87898]" />
                  <span>System Architecture & Data Flow</span>
                </h4>

                <div className="space-y-2.5">
                  {project.architecture.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-pink-50/40 border border-pink-100 text-xs text-[#303442]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E87898] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#687080]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-pink-200 text-[#303442] shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white/90 border-t border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-[#303442] hover:text-[#E87898] bg-pink-50 px-3 py-1.5 rounded-xl border border-pink-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#E87898] hover:bg-[#d86687] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Close World</span>
            <SakuraIcon className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
