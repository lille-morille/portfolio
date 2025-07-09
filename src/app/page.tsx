import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='text-xl font-bold text-white'>Portfolio</div>
            <div className='hidden md:flex space-x-8'>
              <Link
                href='#home'
                className='text-slate-300 hover:text-white transition-colors'
              >
                Home
              </Link>
              <Link
                href='#about'
                className='text-slate-300 hover:text-white transition-colors'
              >
                About
              </Link>
              <Link
                href='#services'
                className='text-slate-300 hover:text-white transition-colors'
              >
                Services
              </Link>
              <Link
                href='#portfolio'
                className='text-slate-300 hover:text-white transition-colors'
              >
                Portfolio
              </Link>
              <Link
                href='#contact'
                className='text-slate-300 hover:text-white transition-colors'
              >
                Contact
              </Link>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='pt-16 min-h-screen flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-8'>
              <div className='space-y-4'>
                <p className='text-blue-400 text-lg font-medium'>Hello, I'm</p>
                <h1 className='text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Anders Morille
                </h1>
                <h2 className='text-3xl lg:text-4xl font-semibold text-blue-400'>
                  Full Stack Developer
                </h2>
                <p className='text-slate-300 text-lg max-w-md leading-relaxed'>
                  I create exceptional digital experiences with modern web
                  technologies. Passionate about building scalable applications
                  and beautiful user interfaces.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2'>
                  Hire Me
                  <ArrowRight className='w-4 h-4' />
                </button>
                <button className='border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2'>
                  <Download className='w-4 h-4' />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className='flex space-x-6'>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-400 transition-colors'
                >
                  <Github className='w-6 h-6' />
                </Link>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-400 transition-colors'
                >
                  <Linkedin className='w-6 h-6' />
                </Link>
                <Link
                  href='#'
                  className='text-slate-400 hover:text-blue-400 transition-colors'
                >
                  <Mail className='w-6 h-6' />
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Gradient Background */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20'></div>

                {/* Profile Image Placeholder */}
                <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
                  <div className='text-white text-2xl font-bold'>
                    Your Photo
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className='absolute -top-4 -right-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-4 -left-4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-slate-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400'>50+</div>
              <div className='text-slate-300 mt-2'>Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400'>3+</div>
              <div className='text-slate-300 mt-2'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400'>30+</div>
              <div className='text-slate-300 mt-2'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400'>100%</div>
              <div className='text-slate-300 mt-2'>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>What I Do</h2>
            <p className='text-slate-300 max-w-2xl mx-auto'>
              I specialize in creating modern, scalable web applications with
              cutting-edge technologies
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-white font-bold'>🎨</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Frontend Development
              </h3>
              <p className='text-slate-300'>
                Creating responsive and interactive user interfaces with React,
                Next.js, and modern CSS frameworks.
              </p>
            </div>

            <div className='bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-white font-bold'>⚡</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Backend Development
              </h3>
              <p className='text-slate-300'>
                Building scalable APIs and server-side applications with
                Node.js, TypeScript, and databases.
              </p>
            </div>

            <div className='bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
                <span className='text-white font-bold'>🚀</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Full Stack Solutions
              </h3>
              <p className='text-slate-300'>
                End-to-end development from concept to deployment, ensuring
                seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
