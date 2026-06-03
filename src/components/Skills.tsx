import { X } from 'lucide-react';

import { useState } from 'react';

const skills = {
  productManagement: [
    'Product Roadmaps',
    'PRD & BRD Writing',
    'UX Design Direction',
    'Agile & Scrum',
    'Go-to-Market Strategy',
    'Market Research',
    'Monetization & Pricing',
    'AI Integration',
    'Cross-functional Leadership',
    'Wireframing & Prototyping',
    'Stakeholder Management',
    'Product Research & Analysis',
    'Product Testing',
    'User Research and Interviews',
    'A/B Testing',
  ],
  tools: [
    'Jira',
    'Confluence',
    'ClickUp',
    'Trello',
    'Miro',
    'Figma',
    'Slack',
    'GitHub',
    'Google Workspace',
    'Microsoft Office Suite',
    'Postman',
    'Expo Go',
  ],
  technical: [
    'Basic HTML',
    'CSS',
    'JavaScript',
    'Data Analytics',
    'Excel',
    'SQL Basics',
    'CI/CD Workflows',
    'Cloud Workflows',
  ],
};

export default function Skills() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#1A1A1A] to-[#252525] bg-animate-particles">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-4">
                <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light">
                  Skills & Expertise
                </p>
                <h2 className="text-4xl lg:text-5xl font-light text-white">
                  What I bring to the table
                </h2>
              </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#E8B4A2]">Product Management</h3>
                  <p className="text-sm sm:text-base text-[#A8A8A8]">Core competencies in product strategy and execution</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.productManagement.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-chip px-3 sm:px-4 py-2 text-white rounded-full text-xs sm:text-sm font-medium cursor-default animate-in fade-in" style={{animationDelay: `${index * 30}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-[#D4A574]/20 via-[#E8B4A2]/30 to-[#D4A574]/20"></div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#E8B4A2]">Tools & Platforms</h3>
                  <p className="text-sm sm:text-base text-[#A8A8A8]">Proficient with industry-standard tools</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="skill-chip px-3 sm:px-4 py-2 text-white rounded-full text-xs sm:text-sm font-medium cursor-default animate-in fade-in" style={{animationDelay: `${index * 30}ms`}}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-[#D4A574]/20 via-[#E8B4A2]/30 to-[#D4A574]/20"></div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#E8B4A2]">Technical Foundation</h3>
                  <p className="text-sm sm:text-base text-[#A8A8A8]">Technical understanding to collaborate effectively with engineering</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-chip px-3 sm:px-4 py-2 text-white rounded-full text-xs sm:text-sm font-medium cursor-default animate-in fade-in" style={{animationDelay: `${index * 30}ms`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
