const education = [
  {
    degree: 'B.A. English & Literary Studies',
    institution: 'University of Lagos',
  },
  {
    degree: 'Foundation in Law',
    institution: 'University of Lagos',
  },
];

const certifications = [
  'Certified Scrum Product Owner (CSPO) – Scrum Alliance',
  'AI Career Essentials – ALX',
  'Cybersecurity Fundamentals – Cisco Networking Academy',
  'Product Governance Certification – Thistle Initiative (UK)',
];

export default function Education() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#1E1E2F] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#A8907E] text-sm tracking-[0.2em] uppercase font-light">
                Education
              </p>
              <h2 className="text-4xl font-light">Academic Background</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#A8907E]/30 transition-all duration-300 hover:shadow-lg hover:bg-white/10 hover:scale-105 transform"
                >
                  <h3 className="text-xl font-medium mb-2">{edu.degree}</h3>
                  <p className="text-white/60">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#A8907E] text-sm tracking-[0.2em] uppercase font-light">
                Certifications
              </p>
              <h2 className="text-4xl font-light">Professional Development</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#A8907E]/30 transition-all duration-300 hover:shadow-lg hover:bg-white/10 hover:scale-105 transform"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#A8907E] flex-shrink-0"></span>
                  <p className="text-white/80">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
