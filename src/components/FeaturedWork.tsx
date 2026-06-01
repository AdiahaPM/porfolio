import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Tech Varsity (MyBAcoach)',
    category: 'EdTech',
    description: 'Drove platform strategy and UX improvements for a UK-based EdTech coaching product. Shaped feature integration decisions, interface direction, and how product changes translated to learner experience.',
    metrics: ['Platform Strategy', 'UX Direction', 'Feature Integration', 'EdTech Growth'],
    gradient: 'from-[#C4BAAE] to-[#9B8777]',
    link: 'https://mybacoach.com/',
  },
  {
    title: 'CVSense',
    category: 'HR Tech',
    description: 'AI-powered job matching platform with a dual marketplace model serving both recruiters and job seekers on a subscription basis. Sole PM across the full product lifecycle. Directed discovery, led UX design in Figma in the absence of a dedicated designer, conducted structured interviews with 6 recruiters and multiple job seekers, and A/B tested two onboarding flows with 10+ platform testers. Collaborated on AI agent development for job matching and resume optimization.',
    metrics: ['Sole PM', 'Dual Marketplace', 'Subscription Model', 'AI Integration'],
    gradient: 'from-[#9B8777] to-[#8A7768]',
    link: 'https://cvsense.co.uk',
  },
  {
    title: 'CloudSania',
    category: 'Cloud Infrastructure',
    description: 'Defined product positioning and led UX revamp for enterprise cloud management. Authored PRDs for Slack integration, pipelines, and wallet credits system.',
    metrics: ['Enterprise readiness', 'UX revamp', 'Monetization strategy'],
    gradient: 'from-[#9B8777] to-[#8A7768]',
    link: 'https://www.cloudsania.com/',
  },
  {
    title: 'FarmFoodHub',
    category: 'AgriTech',
    description: 'Led 100+ cross-functional members to deliver a complete MVP with AI chatbot integration in 4 weeks. Coordinated PM, design, AI, and engineering teams.',
    metrics: ['100+ team members', '4-week delivery', 'AI integration', 'Crisis Management'],
    gradient: 'from-[#8A7768] to-[#7A6A5E]',
    link: 'https://farmfoodhub.netlify.app/',
  },
  {
    title: 'SafeStash',
    category: 'Fintech Concept (Mock Project)',
    description: 'Created fintech product offering secure escrow-based savings and installment payments. Designed comprehensive UX flows and product documentation.',
    metrics: ['Escrow system', 'Payment flows', 'Security-first'],
    gradient: 'from-[#1E1E2F]/10 to-[#1E1E2F]/5',
    link: 'https://my.visme.co/view/w4x96m41-safe-stash',
  },
  {
    title: 'TixStash',
    category: 'Event Tech',
    description: 'An event ticketing platform built around escrow payments and flexible BNPL booking. Contributing as Lead PM, driving product strategy, lean MVP planning, user persona development, and feature prioritization.',
    metrics: ['Lead PM', 'Escrow Payments', 'BNPL', 'In Progress'],
    gradient: 'from-[#C4BAAE]/50 to-[#9B8777]/30',
    link: null,
  },
  {
    title: 'SkillSpotter',
    category: 'Marketplace SaaS',
    description: 'UK-based service provider platform currently at seed stage. Contributing as Product Manager on the core team, supporting product strategy and build execution.',
    metrics: ['Seed Stage', 'SaaS', 'In Progress'],
    gradient: 'from-[#9B8777]/50 to-[#8A7768]/30',
    link: 'https://skillspotter.co.uk/',
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="py-32 px-6 lg:px-8 bg-white bg-animate-particles">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-[#6D5C54] text-sm tracking-[0.2em] uppercase font-light">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0E0E0E]">
              Product Work
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => {
              const isLink = project.link !== null;
              const Component = isLink ? 'a' : 'div';
              const componentProps = isLink
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <Component
                  key={index}
                  {...componentProps}
                  className={`group relative p-6 sm:p-8 rounded-3xl glass-card overflow-hidden block transition-all duration-500 ${isLink ? 'hover:scale-105 cursor-pointer' : ''} transform animate-in fade-in`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 ${isLink ? 'group-hover:opacity-60' : ''} transition-opacity duration-500`}></div>

                  <div className="relative space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <p className="text-xs sm:text-sm text-[#4A3F38] tracking-wide font-medium">{project.category}</p>
                      <h3 className="text-2xl sm:text-3xl font-medium text-[#0E0E0E]">{project.title}</h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#4A3F38] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-2 text-xs sm:text-sm bg-white/60 backdrop-blur-sm rounded-full text-[#0E0E0E] border border-[#C4BAAE] transition-all duration-300 ${isLink ? 'group-hover:bg-white/80' : ''}`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {isLink && (
                      <div className="flex items-center gap-2 text-[#0E0E0E] font-medium group-hover:gap-3 transition-all">
                        View Project
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
