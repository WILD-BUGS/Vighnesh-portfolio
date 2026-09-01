export type TimeOfDay = 'morning' | 'afternoon' | 'sunset' | 'night';

export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'ai' | 'web' | 'database' | 'tools';
  iconKey: 'python' | 'java' | 'dsa' | 'cv' | 'flask' | 'nodejs' | 'mysql' | 'git' | 'react';
  level: number; // 0-100
  growthStage: 'seed' | 'sprout' | 'blossom';
  growthDescription: string;
  experience: string;
  tags: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  worldName: string;
  worldSubtitle: string;
  category: string;
  description: string;
  fullOverview: string;
  problemSolved: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  image: string;
  badge: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  interactiveDemoType: 'cv_detection' | 'api_vault' | 'complaint_system' | 'ai_assistant';
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  scoreOrLevel: string;
  progress: number;
  credentialUrl?: string;
  iconType: 'coffee' | 'trophy' | 'python' | 'star' | 'award';
  skillsUnlocked: string[];
  unlocked: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  score: string;
  location: string;
  period: string;
  highlights: string[];
  status: 'current' | 'completed';
}

export interface ExperienceItem {
  id: string;
  chapterNumber: string;
  chapterTitle: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  techUsed: string[];
}

export interface GitHubTimelineEvent {
  id: string;
  repo: string;
  repoUrl: string;
  type: 'commit' | 'push' | 'repo_create' | 'pr_merge';
  message: string;
  timestamp: string;
  hash: string;
  branch: string;
  changes: { additions: number; deletions: number };
}

export interface LeetCodeTimelineEvent {
  id: string;
  title: string;
  titleSlug: string;
  problemUrl: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  timestamp: string;
  runtimeSpeed: string;
  memorySpeed: string;
  status: 'Accepted';
  language: 'Java' | 'Python' | 'C++';
}

