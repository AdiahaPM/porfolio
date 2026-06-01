import { ArrowRight, Phone, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animate-particles">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F6F1] via-[#C4BAAE] to-[#D4C4B0] opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1E2F]/5 via-transparent to-[#6D5C54]/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#4A3F38] text-sm tracking-[0.2em] uppercase font-light animate-bounce-smooth">
                Product Manager
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-[#0E0E0E] leading-tight">
                Hi, I am<br />
                <span className="font-medium bg-gradient-to-r from-[#0E0E0E] to-[#4A3F38] bg-clip-text text-transparent animate-gradient-shift">
                  Itoro Daniel
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#4A3F38] font-light leading-relaxed max-w-xl">
                I build SaaS and AI-driven products from discovery to delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://tinyurl.com/Itoro-Daniel-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 glass-button text-[#0E0E0E] rounded-full hover:animate-pulse flex items-center gap-2 transform"
              >
                Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Itoro_CV_(1).pdf"
                download
                className="group px-8 py-4 glass-button text-[#0E0E0E] rounded-full hover:animate-pulse flex items-center gap-2 transform"
              >
                Download CV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="relative">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="px-8 py-4 border-2 border-[#0E0E0E] text-[#0E0E0E] rounded-full hover:bg-[#0E0E0E] hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </button>
                {showContact && (
                  <div className="absolute top-full right-0 mt-3 bg-white border border-[#C4BAAE] rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                    <a
                      href="mailto:itorod01@gmail.com"
                      className="flex items-center gap-3 px-6 py-3 text-[#0E0E0E] hover:bg-[#F9F6F1] transition-colors border-b border-[#C4BAAE] group/item"
                    >
                      <span className="w-5 h-5 text-red-600">✉</span>
                      <span className="text-sm font-medium">Email</span>
                    </a>
                    <a
                      href="tel:+2348130312380"
                      className="flex items-center gap-3 px-6 py-3 text-[#0E0E0E] hover:bg-[#F9F6F1] transition-colors border-b border-[#C4BAAE]"
                    >
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">Call</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/itorodaniel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 text-[#0E0E0E] hover:bg-[#F9F6F1] transition-colors border-b border-[#C4BAAE]"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/AdiahaPM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 text-[#0E0E0E] hover:bg-[#F9F6F1] transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-800" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#6D5C54]/20 to-[#1E1E2F]/10 rounded-3xl blur-2xl animate-glow"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="/WhatsApp Image 2025-10-31 at 15.04.07_e50a745a.jpg"
                alt="Itoro-Obong Bassey Daniel"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F6F1] to-transparent"></div>
    </section>
  );
}
