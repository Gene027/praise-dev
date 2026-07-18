"use client";
import React, { useRef, useState, useEffect } from "react";
import { projects } from "../../../app/portfolio/portfolio.constants";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Paragraph from "../../ui/Paragraph";

const PortfolioSlide = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll to update active indicator
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const itemWidth = 280 + 16; // item width + gap
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(currentIndex);
    }
  };

  // Scroll to specific item when indicator is clicked
  const scrollToItem = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 280 + 16; // item width + gap
      const scrollPosition = index * itemWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div className="w-full justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.filter((project) => project.featured).map((project) => (
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
    </>
  );
};

export default PortfolioSlide;
