import React from 'react';
import {
  Code2,
  Coffee,
  Layers,
  ScanFace,
  Server,
  Cpu,
  Database,
  GitBranch,
  Atom,
  Terminal,
} from 'lucide-react';

interface SkillIconProps {
  iconKey: string;
  className?: string;
  size?: number;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ iconKey, className = 'w-6 h-6', size }) => {
  switch (iconKey) {
    case 'python':
      return <Code2 className={`text-[#4B8BBE] ${className}`} />;
    case 'java':
      return <Coffee className={`text-[#E76F51] ${className}`} />;
    case 'dsa':
      return <Layers className={`text-[#3B82F6] ${className}`} />;
    case 'cv':
      return <ScanFace className={`text-[#E87898] ${className}`} />;
    case 'flask':
      return <Server className={`text-[#303442] ${className}`} />;
    case 'nodejs':
      return <Cpu className={`text-[#68A063] ${className}`} />;
    case 'mysql':
      return <Database className={`text-[#00758F] ${className}`} />;
    case 'git':
      return <GitBranch className={`text-[#F05032] ${className}`} />;
    case 'react':
      return <Atom className={`text-[#61DAFB] ${className}`} />;
    default:
      return <Terminal className={`text-[#E87898] ${className}`} />;
  }
};
