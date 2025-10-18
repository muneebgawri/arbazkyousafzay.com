import { useState } from 'react';
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react';

function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    { id: 1, name: 'Outlander', category: 'Brand Identity' },
    { id: 2, name: 'Shawlpur', category: 'Visual System' },
    { id: 3, name: 'Laleen Beauty', category: 'Creative Direction' },
    { id: 4, name: 'Foreign Cloth House', category: 'Brand Identity' },
    { id: 5, name: 'Smile Designers', category: 'Visual Identity' },
  ];

  const services = [
    'Brand Identity Design',
    'Creative Direction',
    'Visual Identity Systems',
    'Graphic Design',
    'Illustration',
  ];

  const testimonials = [
    {
      quote: "Arbaz brings a rare combination of cultural depth and modern design thinking. His work elevated our brand beyond what we imagined.",
      author: "Sarah Ahmed",
      company: "Laleen Beauty"
    },
    {
      quote: "Professional, thoughtful, and incredibly talented. Arbaz understood our heritage and translated it into a visual language that resonates.",
      author: "Michael Chen",
      company: "Foreign Cloth House"
    },
    {
      quote: "Working with Arbaz was transformative. He doesn't just design — he builds brands with meaning and purpose.",
      author: "Dr. Fatima Khan",
      company: "Smile Designers"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ced1ca]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#72533e]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src="/logu.png" alt="Arbaz K. Yousafzay" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 accent-text"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 accent-text"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 accent-text"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 border border-[#72533e] text-[#72533e] hover:bg-[#72533e] hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider text-sm accent-text"
              >
                Contact Me
              </button>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#72533e] hover:text-[#ced1ca] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-6 pb-6 pt-4 border-t border-[#72533e]/20 bg-[#0a0a0a]">
            <div className="space-y-6">
              {/* About */}
              <div>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-lg uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 w-full text-left accent-text"
                >
                  About
                </button>
              </div>

              {/* Projects with Subsections */}
              <div>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-lg uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 w-full text-left accent-text mb-2"
                >
                  Projects
                </button>
                <div className="pl-4 space-y-2">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => scrollToSection('projects')}
                      className="block text-sm text-[#ced1ca]/60 hover:text-[#72533e] transition-colors"
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-lg uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300 w-full text-left accent-text"
                >
                  Portfolio
                </button>
              </div>

              {/* Contact */}
              <div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-[#72533e] text-[#72533e] hover:bg-[#72533e] hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider text-sm w-full accent-text"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-2 opacity-0 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
              <p className="text-[#72533e] uppercase tracking-[0.3em] text-sm accent-text">Creative Director</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]">
                Arbaz K.<br />Yousafzay
              </h1>
            </div>

            <div className="space-y-4 max-w-3xl opacity-0 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.3s forwards' }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                Helping Ethical & Culture-Driven Brands<br />Build Premium Visual Systems
              </h2>
              <p className="text-[#72533e] uppercase tracking-[0.2em] text-xs accent-text">
                Brand Identity Designer · Visual Storyteller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#72533e]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-[#72533e] uppercase tracking-[0.2em] text-xs accent-text">About</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                I'm a brand identity designer with <span className="text-[#72533e]">10+ years of creative experience</span> who helps ethical, culturally-rooted, and purpose-driven brands build visual systems that reflect their values — not just aesthetics.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed mt-6 text-[#ced1ca]/70">
                My focus is on minimal, premium, principle-aligned design. I love to work on meaningful, market-ready brands that want to stay true to tradition, culture, and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="projects" className="px-6 md:px-12 lg:px-24 py-32 border-t border-[#72533e]/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#72533e] uppercase tracking-[0.2em] text-xs accent-text mb-4">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-light">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] bg-[#72533e]/10 border border-[#72533e]/20 overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#72533e]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-[#72533e]/0 transition-all duration-500 ${hoveredProject === project.id ? 'bg-[#72533e]/10' : ''}`} />

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[#72533e] text-sm uppercase tracking-wider accent-text">{String(index + 1).padStart(2, '0')}</span>
                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-500 ${hoveredProject === project.id ? 'translate-x-1 -translate-y-1 text-[#72533e]' : 'text-[#ced1ca]/40'}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-light mb-2">{project.name}</h3>
                    <p className="text-[#ced1ca]/60 text-sm uppercase tracking-wider">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="portfolio" className="px-6 md:px-12 lg:px-24 py-32 border-t border-[#72533e]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-[#72533e] uppercase tracking-[0.2em] text-xs accent-text mb-4">Services</p>
              <h2 className="text-3xl md:text-4xl font-light">What I Do</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="border-b border-[#72533e]/20 pb-6 group cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl md:text-3xl font-light transition-colors duration-300 group-hover:text-[#72533e]">
                        {service}
                      </h3>
                      <span className="text-[#72533e] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-text">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-[#72533e]/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#72533e] uppercase tracking-[0.2em] text-xs accent-text mb-16 text-center">Client Testimonials</p>

          <div className="relative min-h-[300px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  currentTestimonial === index
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                }`}
              >
                <blockquote className="text-center space-y-8">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-[#72533e] accent-text">{testimonial.author}</p>
                    <p className="text-[#ced1ca]/60 text-sm">{testimonial.company}</p>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-1 transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'w-12 bg-[#72533e]'
                    : 'w-8 bg-[#72533e]/30 hover:bg-[#72533e]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 border-t border-[#72533e]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Let's Create Something<br />Meaningful Together
          </h2>
          <p className="text-xl text-[#ced1ca]/70 mb-12 max-w-2xl mx-auto">
            Ready to build a brand that reflects your values and resonates with your audience?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#72533e] text-[#72533e] hover:bg-[#72533e] hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider text-sm font-light inline-flex items-center justify-center gap-2 group"
            >
              View Full Portfolio
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="mailto:contact@arbazyousafzay.com"
              className="px-8 py-4 bg-[#72533e] text-[#0a0a0a] hover:bg-[#72533e]/90 transition-all duration-300 uppercase tracking-wider text-sm font-light inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#72533e]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-2xl font-light">Arbaz K. Yousafzay</p>
              <p className="text-sm text-[#ced1ca]/60 mt-1">Creative Director & Brand Identity Designer</p>
            </div>

            <div className="flex gap-8">
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300"
              >
                Behance
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://contra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-[#72533e] transition-colors duration-300"
              >
                Contra
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#72533e]/20 text-center">
            <p className="text-xs text-[#ced1ca]/40 tracking-wider">
              © 2025 Arbaz K. Yousafzay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
