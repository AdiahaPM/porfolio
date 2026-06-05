import { ArrowRight, Phone, Linkedin, Github, Mail, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showContact) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowContact(false);
    }

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowContact(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showContact]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1F1F1F]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/8 via-transparent to-[#E8B4A2]/5"></div>
      <div className="absolute inset-0 bg-animate-particles"></div>

      {/* Contact modal overlay */}
      {showContact && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 9998, background: 'rgba(0,0,0,0.45)' }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light animate-bounce-smooth">
                Product Manager &amp; AI Prototyper
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
                className="group px-8 py-4 glass-button text-[#1A1A1A] rounded-full flex items-center gap-2 transition-all duration-300"
              >
                Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Itoro_CV_(1).pdf"
                download
                className="group px-8 py-4 glass-button text-[#1A1A1A] rounded-full flex items-center gap-2 transition-all duration-300"
              >
                Download CV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Get in Touch button */}
              <button
                ref={buttonRef}
                onClick={() => setShowContact(!showContact)}
                aria-haspopup="dialog"
                aria-expanded={showContact}
                className="px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{
                  border: '2px solid #D4A574',
                  color: showContact ? '#1A1A1A' : '#D4A574',
                  background: showContact ? '#D4A574' : 'transparent',
                  position: 'relative',
                  zIndex: 9999,
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative animate-float order-1 lg:order-2">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4A574]/25 via-[#E8B4A2]/15 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
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

      {/* Contact modal */}
      {showContact && (
        <div
          ref={modalRef}
          role="dialog"
          aria-label="Contact options"
          className="fixed"
          style={{
            zIndex: 9999,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '320px',
            background: 'linear-gradient(145deg, #F5F0EB, #EFEFEF)',
            border: '1px solid #C4B8AE',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            animation: 'modalIn 0.2s ease-out',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: '1px solid #D4C4B0' }}
          >
            <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#2C2C2C' }}>
              Get in Touch
            </span>
            <button
              onClick={() => setShowContact(false)}
              aria-label="Close"
              className="flex items-center justify-center rounded-full transition-colors"
              style={{
                width: 28,
                height: 28,
                background: 'rgba(0,0,0,0.06)',
                border: 'none',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options */}
          <a
            href="mailto:itorod01@gmail.com"
            onClick={() => setShowContact(false)}
            className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{ borderBottom: '1px solid #E8DED2', color: '#2C2C2C', textDecoration: 'none', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8DED2')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 36, height: 36, background: '#fee2e2' }}
            >
              <Mail className="w-4 h-4" style={{ color: '#dc2626' }} />
            </span>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Email</div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>itorod01@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+2348130312380"
            onClick={() => setShowContact(false)}
            className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{ borderBottom: '1px solid #E8DED2', color: '#2C2C2C', textDecoration: 'none', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8DED2')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 36, height: 36, background: '#dbeafe' }}
            >
              <Phone className="w-4 h-4" style={{ color: '#2563eb' }} />
            </span>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Call</div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>+234 813 031 2380</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/itorodaniel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowContact(false)}
            className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{ borderBottom: '1px solid #E8DED2', color: '#2C2C2C', textDecoration: 'none', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8DED2')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 36, height: 36, background: '#dbeafe' }}
            >
              <Linkedin className="w-4 h-4" style={{ color: '#1d4ed8' }} />
            </span>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>LinkedIn</div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>linkedin.com/in/itorodaniel</div>
            </div>
          </a>

          <a
            href="https://github.com/AdiahaPM"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowContact(false)}
            className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{ color: '#2C2C2C', textDecoration: 'none', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E8DED2')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 36, height: 36, background: '#f3f4f6' }}
            >
              <Github className="w-4 h-4" style={{ color: '#1f2937' }} />
            </span>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>GitHub</div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>github.com/AdiahaPM</div>
            </div>
          </a>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
    </section>
  );
}
