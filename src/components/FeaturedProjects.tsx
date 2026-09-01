import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { animeAudio } from '../utils/audioSynthesizer';
import { SakuraIcon } from './SakuraIcon';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenCaseStudy = (project: ProjectItem) => {
    animeAudio.playSuccessTone();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <SakuraIcon className="w-7 h-7 text-[#E87898]" />
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303442] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#687080] font-medium -mt-0.5">
              The Anime Worlds & Architectures I've Built
            </p>
          </div>
        </div>

        <button
          onClick={() => handleOpenCaseStudy(PROJECTS[0])}
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E87898] hover:text-[#d86687] transition-colors"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Projects 4-Card Grid matching the reference layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROJECTS.map((project) => {
          const isComingSoon = project.id === 'future-projects-lab';

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="sakura-card rounded-3xl overflow-hidden flex flex-col justify-between group/card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-pink-200/80"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative h-44 w-full overflow-hidden bg-pink-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover/card:scale-108 transition-transform duration-600 ease-out"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-pink-200 shadow-xs text-[10px] font-bold text-[#E87898]">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 space-y-2 text-left">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#303442] tracking-tight group-hover/card:text-[#E87898] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#687080] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 sm:p-5 pt-0 text-left">
                {isComingSoon ? (
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="w-full py-2.5 rounded-2xl bg-pink-50 hover:bg-pink-100/80 text-[#E87898] font-bold text-xs flex items-center justify-center gap-1.5 border border-pink-200 transition-colors"
                  >
                    <span>Stay Tuned!</span>
                    <Heart className="w-3.5 h-3.5 fill-pink-300 text-[#E87898]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="group/btn flex items-center gap-1.5 text-xs font-bold text-[#E87898] hover:text-[#d86687] transition-colors py-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
