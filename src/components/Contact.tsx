import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#252525] bg-animate-particles">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light">
              Get in Touch
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight">
              Let us build products that<br />make impact and inspire confidence
            </h2>
          </div>

          <p className="text-xl text-[#C8C8C8] max-w-2xl mx-auto">
            I am open to collaborations, contract opportunities, and full-time roles focused on growth, innovation, and impact in tech.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
            <a
              href="mailto:itorod01@gmail.com"
              className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#D4A574] text-[#1A1A1A] rounded-full hover:bg-[#E8B4A2] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A574] min-h-[44px] sm:min-h-auto font-medium"
              aria-label="Send email to itorod01@gmail.com"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">itorod01@gmail.com</span>
            </a>
          </div>

          <div className="pt-16 border-t border-[#D4A574]/20">
            <p className="text-[#A8A8A8] text-sm">
              © 2026 Itoro-Obong Bassey Daniel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
