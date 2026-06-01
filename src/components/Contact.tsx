import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#F9F6F1] via-[#E8DED2] to-[#D4C4B0] bg-animate-particles">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-[#6C5F5B] text-sm tracking-[0.2em] uppercase font-light">
              Get in Touch
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-[#0E0E0E] leading-tight">
              Let us build products that<br />make impact and inspire confidence
            </h2>
          </div>

          <p className="text-xl text-[#6C5F5B] max-w-2xl mx-auto">
            I am open to collaborations, contract opportunities, and full-time roles focused on growth, innovation, and impact in tech.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
            <a
              href="mailto:itorod01@gmail.com"
              className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0E0E0E] text-white rounded-full hover:bg-[#1E1E2F] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E0E0E] min-h-[44px] sm:min-h-auto"
              aria-label="Send email to itorod01@gmail.com"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">itorod01@gmail.com</span>
            </a>
          </div>

          <div className="pt-16 border-t border-[#6C5F5B]/20">
            <p className="text-[#6C5F5B] text-sm">
              © 2026 Itoro-Obong Bassey Daniel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
