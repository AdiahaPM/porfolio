const experiences = [
  {
    role: 'Product Manager (Contract)',
    company: 'DoviLearn (CVSense)',
    location: 'Hull, United Kingdom',
    period: 'Aug 2025 – Present',
    achievements: [
      'Owned end-to-end product strategy, UX direction in Figma, user research, A/B testing, and AI agent collaboration as the sole PM on a dual marketplace HR Tech platform',
      'Directed product discovery and research for roadmap validation',
      'Designed onboarding flows and tested two versions, improving activation by 18%',
      'Collaborated on AI agent development and dashboard strategies',
    ],
  },
  {
    role: 'Product Manager',
    company: 'CloudSania',
    location: 'Project-Based',
    period: 'June 2025 – Sept 2025',
    achievements: [
      'Defined product positioning and roadmap alignment with business goals',
      'Authored PRDs and integration strategies for Slack, pipelines, and wallet credits',
      'Directed UX revamp of CloudSania\'s website and dashboard',
    ],
  },
  {
    role: 'Product Owner',
    company: 'RecreaX',
    location: 'Web & Mobile',
    period: 'Dec 2024 – May 2025',
    achievements: [
      'Directed agile delivery cycles and stakeholder communication',
      'Increased sprint velocity by 12% and satisfaction by 18%',
      'Strengthened collaboration across global teams',
    ],
  },
  {
    role: 'Lead Product Manager',
    company: 'FarmFoodHub',
    location: 'Hackathon Project',
    period: 'Jan 2025 – May 2025',
    achievements: [
      'Coordinated 100+ members across PM, design, AI, and engineering',
      'Delivered full MVP with AI chatbot integration in 4 weeks',
      'Oversaw UX, testing, and GTM plans',
    ],
  },
  {
    role: 'Product Management Intern',
    company: 'TechWits Clan',
    location: 'Remote',
    period: 'June 2024 – March 2025',
    achievements: [
      'Conducted user research with 20+ participants, achieving 90% satisfaction improvement',
      'Designed and documented escrow and installment payment flows',
      'Reduced design-engineering revision cycles by 30%',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#F9F6F1] bg-animate-particles">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-[#A8907E] text-sm tracking-[0.2em] uppercase font-light">
              Experience
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#0E0E0E]">
              Experience
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#A8907E] via-[#D4C4B0] to-transparent"></div>

            <div className="space-y-16 pl-8 lg:pl-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -left-8 lg:-left-16 top-2 w-3 h-3 rounded-full bg-[#A8907E] border-4 border-[#F9F6F1] group-hover:scale-150 transition-transform duration-300"></div>

                  <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#E8DED2] hover:shadow-lg hover:bg-white/80 hover:scale-105 transition-all duration-300 transform">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium text-[#0E0E0E]">{exp.role}</h3>
                      <p className="text-[#6C5F5B] font-light">{exp.company} | {exp.location}</p>
                      <p className="text-sm text-[#A8907E]">{exp.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#6C5F5B]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A8907E] flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
