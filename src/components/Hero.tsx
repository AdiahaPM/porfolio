import { ArrowRight, Phone, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1F1F1F]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/8 via-transparent to-[#E8B4A2]/5"></div>
      <div className="absolute inset-0 bg-animate-particles"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light animate-bounce-smooth">
                Product Manager & AI Prototyper
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
                Itoro<br />
                <span className="font-medium bg-gradient-to-r from-[#E8B4A2] to-[#D4A574] bg-clip-text text-transparent animate-gradient-shift">
                  Daniel
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-[#B8B8B8] font-light leading-relaxed max-w-xl">
                Passionate about turning ideas into products people love. I combine product strategy, user research, AI workflows, and rapid prototyping to bring concepts to life.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                href="https://tinyurl.com/Itoro-Daniel-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 glass-button text-[#1A1A1A] rounded-full hover:animate-pulse flex items-center gap-2 transform transition-all"
              >
                Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Itoro_CV_(1).pdf"
                download
                className="group px-8 py-4 glass-button text-[#1A1A1A] rounded-full hover:animate-pulse flex items-center gap-2 transform transition-all"
              >
                Download CV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="relative z-50">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="px-8 py-4 border-2 border-[#D4A574] text-[#D4A574] rounded-full hover:bg-[#D4A574] hover:text-[#1A1A1A] transition-all duration-300 font-medium skeumorphic-button"
                >
                  Get in Touch
                </button>
                {showContact && (
                  <div className="absolute top-full right-0 mt-4 bg-gradient-to-br from-[#F5F0EB] to-[#EFEFEF] border border-[#C4B8AE] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 z-50 min-w-[240px]">
                    <a
                      href="mailto:itorod01@gmail.com"
                      className="flex items-center gap-3 px-6 py-4 text-[#2C2C2C] hover:bg-[#E8DED2] transition-colors border-b border-[#D4C4B0] group/item"
                    >
                      <span className="w-5 h-5 text-red-600">✉</span>
                      <span className="text-sm font-medium">Email</span>
                    </a>
                    <a
                      href="tel:+2348130312380"
                      className="flex items-center gap-3 px-6 py-4 text-[#2C2C2C] hover:bg-[#E8DED2] transition-colors border-b border-[#D4C4B0]"
                    >
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">Call</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/itorodaniel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-[#2C2C2C] hover:bg-[#E8DED2] transition-colors border-b border-[#D4C4B0]"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/AdiahaPM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-[#2C2C2C] hover:bg-[#E8DED2] transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-800" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="relative animate-float order-1 lg:order-2">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4A574]/25 via-[#E8B4A2]/15 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102">
              <img
                src="/887e3eee-ed00-4bf3-bd01-fbdd2550fdcc.jpeg"
                alt="Itoro Daniel - Product Manager"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
}
