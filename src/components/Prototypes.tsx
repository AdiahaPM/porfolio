import { ArrowUpRight } from 'lucide-react';

const prototypes = [
  {
    title: 'AI Work App (Dashboard Redesign Concept)',
    description: 'Modern dashboard interface redesign focused on user experience and task management optimization.',
    gradient: 'from-[#C4BAAE] to-[#9B8777]',
    link: 'https://www.figma.com/make/1nWVddBhR2WM3CPnn3xabu/AI-Work-User-Dashboard?code-node-id=0-9&p=f&t=2khmNZilvFZylL69-0&fullscreen=1',
  },
  {
    title: 'AI Work App (Landing Page Redesign Concept)',
    description: 'Sleek landing page redesign showcasing the AI Work application value proposition.',
    gradient: 'from-[#9B8777] to-[#7A6A5E]',
    link: 'https://www.figma.com/make/vJs4jcLp6GcQB4Pc7WXTk4/AI-Work-Landing-Page-Design?code-node-id=0-9&p=f&t=UWieTYMnho77Zfsg-0&fullscreen=1',
  },
  {
    title: 'CVSense Apply Assist Onboarding A/B Test',
    description: 'Interactive prototype for A/B testing two different onboarding flow variations.',
    gradient: 'from-[#8A7768] to-[#6D5C54]',
    link: 'https://www.figma.com/make/G3RaZG8JcCLHkBT8apc0gr/CVSense-Apply-Assist-Onboarding-A-B-Test?node-id=0-1&t=rzs4meogONDMhvJM-1',
  },
  {
    title: 'CVSense Apply Assist Onboarding Flow',
    description: 'Complete user onboarding flow prototype for the apply assist feature.',
    gradient: 'from-[#C4BAAE] to-[#9B8777]',
    link: 'https://www.figma.com/make/9KNSAFaYVsScXPOQHDJzWp/CVSense-Apply-Assist-Onboarding-Flow?node-id=0-1&t=OUtTRUtRj1u6JVg5-1',
  },
  {
    title: 'Cookies Policy Page',
    description: 'Interactive prototype for cookies policy and compliance documentation page.',
    gradient: 'from-[#9B8777] to-[#7A6A5E]',
    link: 'https://www.figma.com/make/7aGbVUNWEiVmpr3MYpu6Wv/Cookies-Policy-Page?node-id=0-1&t=VulZoxSJ2sQoLkh2-1',
  },
  {
    title: 'CVSense Home Page',
    description: 'Landing page prototype showcasing the core value proposition and key features.',
    gradient: 'from-[#8A7768] to-[#6D5C54]',
    link: 'https://www.figma.com/make/U9DYNTGxPjCnAyQFBovimP/CVSense-Home-Page?t=VulZoxSJ2sQoLkh2-1',
  },
  {
    title: 'CVSense User Dashboard',
    description: 'Interactive dashboard prototype with user analytics and profile management.',
    gradient: 'from-[#C4BAAE] to-[#9B8777]',
    link: 'https://www.figma.com/make/kIpcSyAtYMYWpBxFLJnIi0/Sugar-CV-User-Dashboard?t=VulZoxSJ2sQoLkh2-1',
  },
  {
    title: 'CVSense Admin Dashboard',
    description: 'Comprehensive admin panel for managing platform operations and user data.',
    gradient: 'from-[#9B8777] to-[#7A6A5E]',
    link: 'https://www.figma.com/make/uGx6AzQb1a3vxddTa0Q81D/CVSense-Admin-Dashboard?t=VulZoxSJ2sQoLkh2-1',
  },
  {
    title: 'Minimalist Single Page Onboarding Form',
    description: 'Clean, minimal onboarding form design optimized for user conversion and simplicity.',
    gradient: 'from-[#8A7768] to-[#6D5C54]',
    link: 'https://www.figma.com/make/aNY8bAiYvuT5s561Ukc8Ze/Minimalist-Single-Page-Onboarding-Form?t=VulZoxSJ2sQoLkh2-1',
  },
];

export default function Prototypes() {
  return (
    <section id="prototypes" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#1A1A1A] to-[#252525] bg-animate-particles">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light">
              Interactive Designs
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-white">
              Prototypes
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {prototypes.map((prototype, index) => (
              <a
                key={index}
                href={prototype.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 sm:p-8 rounded-3xl glass-card overflow-hidden block transition-all duration-500 hover:scale-105 cursor-pointer transform animate-in fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${prototype.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`}></div>

                <div className="relative space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-medium text-white">{prototype.title}</h3>

                  <p className="text-sm sm:text-base text-[#C8C8C8] leading-relaxed">
                    {prototype.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#E8B4A2] font-medium group-hover:gap-3 transition-all pt-2">
                    Open Prototype
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
