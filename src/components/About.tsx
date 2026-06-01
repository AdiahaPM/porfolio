export default function About() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#F9F6F1] bg-animate-particles">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[#A8907E] text-sm tracking-[0.2em] uppercase font-light">
              About Me
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#0E0E0E]">
              Transforming ideas into scalable,<br />user-centered products
            </h2>
          </div>

          <div className="space-y-8 text-lg text-[#6C5F5B] leading-relaxed">
            <p>
              I am a Product Manager with experience delivering SaaS, AI, and fintech products across the full lifecycle. I transitioned into product management in 2024 after 4 years in HR and compliance within fintech, and that background makes me a sharper PM: I think about trust, risk, and scalability that most PMs overlook. I have led a 100+ person team to ship an investor-ready MVP in 4 weeks, improved user activation by 18% as the sole PM with no design team, and consistently delivered across strategy, UX direction, user research, and go-to-market execution.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-8">
            <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-transparent border border-[#E8DED2] hover:from-white/80 hover:to-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="text-3xl font-light text-[#0E0E0E]">100+</h3>
              <p className="text-[#6C5F5B]">Cross-functional team members led</p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-transparent border border-[#E8DED2] hover:from-white/80 hover:to-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="text-3xl font-light text-[#0E0E0E]">18%</h3>
              <p className="text-[#6C5F5B]">Improvement in user activation</p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-transparent border border-[#E8DED2] hover:from-white/80 hover:to-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="text-3xl font-light text-[#0E0E0E]">4 weeks</h3>
              <p className="text-[#6C5F5B]">To deliver full MVP with AI integration</p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-transparent border border-[#E8DED2] hover:from-white/80 hover:to-white/40 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="text-3xl font-light text-[#0E0E0E]">90%</h3>
              <p className="text-[#6C5F5B]">User satisfaction improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
