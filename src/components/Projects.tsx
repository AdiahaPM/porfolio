const projects = [
  {
    title: 'Excelerate Global Summit',
    description: 'Developed event strategy, marketing roadmap, and risk framework for an international tech summit.',
    tags: ['Event Strategy', 'GTM', 'Risk Management'],
    link: null,
  },
  {
    title: 'Electronic Arts PM Simulation',
    description: 'Designed feature roadmap and KPI strategy for a gaming product focusing on engagement and monetization optimization.',
    tags: ['Gaming', 'KPIs', 'Monetization'],
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white bg-animate-particles">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-[#6D5C54] text-sm tracking-[0.2em] uppercase font-light">
              Simulations
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#0E0E0E]">
              Project Simulations
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const Component = project.link ? 'a' : 'div';
              const componentProps = project.link
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <Component
                  key={index}
                  {...componentProps}
                  className={`group p-6 sm:p-8 rounded-3xl glass-card transition-all duration-300 ${project.link ? 'hover:scale-105 cursor-pointer' : ''} transform animate-in fade-in`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="relative space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#0E0E0E] group-hover:text-[#6D5C54] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4A3F38] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs sm:text-xs bg-white/80 rounded-full text-[#4A3F38] border border-[#C4BAAE] group-hover:bg-[#6D5C54] group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
