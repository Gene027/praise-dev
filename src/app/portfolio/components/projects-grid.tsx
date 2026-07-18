"use client";

import { FC, useState } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import TitleTag from "@/components/HomeSections/TitleTag";
import { projects } from "../portfolio.constants";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const ProjectsGrid: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section className="py-20 lg:py-28 bg-light/50">
      <div className="lg:px-24 px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <TitleTag title="Projects" description="Work I'm proud of" />
          <LargeHeading
            size="sm"
            className="font-dmSerifDisplay text-text text-center max-w-2xl"
          >
            Bringing ideas to life through code
          </LargeHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-light hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-secondary text-text text-xs font-raleway font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live project for ${project.title}`}
                      className="p-2 bg-white rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${project.title}`}
                      className="p-2 bg-white rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-dmSerifDisplay text-xl text-text mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Paragraph className="font-raleway text-subText text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </Paragraph>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-light text-text text-xs font-raleway rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-raleway rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-raleway text-sm font-bold text-primary transition-colors hover:text-text"
                    aria-label={`View live project for ${project.title}`}
                  >
                    View live
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-text text-text font-raleway font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors group"
            >
              View All Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-text text-text font-raleway font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
