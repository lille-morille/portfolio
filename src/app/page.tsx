import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Download,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Container,
  Zap,
  Layers,
  Terminal,
  Hash,
  Wrench,
  Figma,
  Coffee,
} from "lucide-react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

import {
  SiPython,
  SiDart,
  SiTypescript,
  SiRust,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import LinkedInIcon from "./_components/icon/linked-in";

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
                <h1 className='text-5xl lg:text-6xl font-bold text-white leading-tight -mt-4'>
                  Anders Morille
                </h1>

                <h2 className='text-3xl lg:text-4xl font-semibold text-blue-400'>
                  Full Stack Developer
                </h2>
                <p className='text-slate-300 text-lg max-w-md leading-relaxed'>
                  I create exceptional digital experiences with modern
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
                  href='https://github.com/lille-morille?tab=repositories&q=&type=&language=&sort='
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-blue-400 transition-colors'
                >
                  <SiGithub className='w-6 h-6' />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/anders-morille/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-blue-400 transition-colors'
                >
                  <FaLinkedin className='w-6 h-6' />
                </Link>
                <Link
                  href='mailto:anders.morille@gmail.com'
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

                {/* Profile Image */}
                <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2'>
                  <div className='w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900'>
                    <Image
                      src='/profile.png'
                      alt='Anders Morille - Full Stack Developer'
                      width={384}
                      height={384}
                      className='w-full h-full object-cover'
                      priority
                    />
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

      {/* Education Section */}
      <section className='py-20 bg-slate-900/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-white mb-8'>Education</h2>
            <div className='max-w-4xl mx-auto space-y-6'>
              {/* Current Education - NTNU */}
              <div className='bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-slate-700'>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center'>
                      <span className='text-white font-bold text-2xl'>🎓</span>
                    </div>
                  </div>
                  <div className='text-center md:text-left'>
                    <h3 className='text-2xl font-semibold text-white mb-2'>
                      Bachelor of Computer Engineering
                    </h3>
                    <p className='text-blue-400 text-lg font-medium mb-2'>
                      Norwegian University of Science and Technology (NTNU)
                    </p>
                    <p className='text-slate-300 text-lg mb-2'>
                      Trondheim, Norway
                    </p>
                    <p className='text-slate-400'>Expected Graduation: 2026</p>
                  </div>
                </div>
              </div>

              {/* Previous Education - Lillestrøm */}
              <div className='bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-2xl p-8 border border-slate-700'>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center'>
                      <span className='text-white font-bold text-2xl'>📚</span>
                    </div>
                  </div>
                  <div className='text-center md:text-left'>
                    <h3 className='text-2xl font-semibold text-white mb-2'>
                      Specialization in General Studies
                    </h3>
                    <p className='text-slate-300 text-lg font-medium mb-2'>
                      Lillestrøm Videregående Skole
                    </p>
                    <p className='text-slate-400 text-lg mb-2'>
                      Specialization in Sciences and Informatics
                    </p>
                    <p className='text-slate-500'>Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 bg-slate-800/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Technical Skills
            </h2>
            <p className='text-slate-300 max-w-2xl mx-auto'>
              My expertise spans across modern web technologies, mobile
              development, and backend systems
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Frontend Skills */}
            <div className='bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-2xl p-8 border border-slate-700'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center'>
                  <Globe className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-white'>Frontend</h3>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Code className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300'>Next.js / React</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Smartphone className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300'>Flutter</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Smartphone className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300'>React Native</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Layers className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300'>Tailwind CSS</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Figma className='w-5 h-5 text-blue-400' />
                  <span className='text-slate-300'>Figma</span>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className='bg-gradient-to-br from-purple-600/10 to-purple-700/10 rounded-2xl p-8 border border-slate-700'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center'>
                  <Server className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-white'>Backend</h3>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Database className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>SQL / PostgreSQL</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Zap className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>TonicRS, Axum</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Server className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>Express / Hono</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Database className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>MongoDB</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Globe className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>
                    Firebase, Railway, DigitalOcean
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Container className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>Docker</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Wrench className='w-5 h-5 text-purple-400' />
                  <span className='text-slate-300'>REST / gRPC</span>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className='bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-2xl p-8 border border-slate-700'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center'>
                  <Terminal className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-white'>Languages</h3>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Coffee className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>Java</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Hash className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>C#</span>
                </div>
                <div className='flex items-center gap-3'>
                  <SiPython className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>Python</span>
                </div>
                <div className='flex items-center gap-3'>
                  <SiDart className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>Dart</span>
                </div>
                <div className='flex items-center gap-3'>
                  <SiTypescript className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>
                    TypeScript / JavaScript
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <SiRust className='w-5 h-5 text-green-400' />
                  <span className='text-slate-300'>Rust</span>
                </div>
              </div>
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
