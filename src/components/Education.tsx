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
    <section className="py-32 px-6 lg:px-8 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light">
                Education
              </p>
              <h2 className="text-4xl font-light">Academic Background</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-300 hover:shadow-lg hover:bg-[#3A3A3A]/80 hover:scale-105 transform"
                >
                  <h3 className="text-xl font-medium mb-2 text-[#E8B4A2]">{edu.degree}</h3>
                  <p className="text-[#A8A8A8]">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light">
                Certifications
              </p>
              <h2 className="text-4xl font-light">Professional Development</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-300 hover:shadow-lg hover:bg-[#3A3A3A]/80 hover:scale-105 transform"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#E8B4A2] flex-shrink-0"></span>
                  <p className="text-[#C8C8C8]">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
