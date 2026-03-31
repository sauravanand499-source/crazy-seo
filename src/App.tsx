import { motion } from 'motion/react';
import { 
  Search, 
  BarChart3, 
  Globe, 
  Mail, 
  Phone, 
  Menu, 
  X,
  TrendingUp,
  Target,
  Zap,
  MapPin,
  Linkedin,
  Facebook,
  Activity,
  MousePointerClick,
  Code,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Bot,
  Cpu
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-[#6a11cb] text-white shadow-lg shadow-blue-600/30">
              <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <span 
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 cursor-pointer"
              onClick={() => setCurrentView('home')}
            >
              Crazy SEO Team
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" onClick={() => setCurrentView('home')} className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">Services</a>
            <a href="#about" onClick={() => setCurrentView('home')} className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">About Us</a>
            <a href="#results" onClick={() => setCurrentView('home')} className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">Results</a>
            <button onClick={() => setCurrentView('blog')} className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">Blog</button>
            <a href="#contact" onClick={() => setCurrentView('home')} className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600">Contact</a>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentView('payment')}
                className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-bold text-slate-900 border-2 border-transparent transition-all hover:bg-slate-200 hover:-translate-y-0.5"
              >
                Pay Now
              </button>
              <button 
                onClick={() => { setCurrentView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white border-2 border-slate-900 shadow-sm transition-all hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Free Audit
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full border-t border-slate-100 bg-white px-4 py-6 shadow-xl md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-base font-semibold text-slate-900" onClick={() => { setIsMobileMenuOpen(false); setCurrentView('home'); }}>Services</a>
              <a href="#about" className="text-base font-semibold text-slate-900" onClick={() => { setIsMobileMenuOpen(false); setCurrentView('home'); }}>About Us</a>
              <a href="#results" className="text-base font-semibold text-slate-900" onClick={() => { setIsMobileMenuOpen(false); setCurrentView('home'); }}>Results</a>
              <button className="text-left text-base font-semibold text-slate-900" onClick={() => { setIsMobileMenuOpen(false); setCurrentView('blog'); }}>Blog</button>
              <a href="#contact" className="text-base font-semibold text-slate-900" onClick={() => { setIsMobileMenuOpen(false); setCurrentView('home'); }}>Contact</a>
              <div className="flex flex-col gap-3 pt-2">
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); setCurrentView('payment'); }}
                  className="w-full rounded-full bg-slate-100 px-5 py-3 text-base font-bold text-slate-900 transition-all hover:bg-slate-200 hover:-translate-y-0.5"
                >
                  Pay Now
                </button>
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); setCurrentView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                  className="w-full rounded-full bg-blue-600 px-5 py-3 text-base font-bold text-white border-2 border-slate-900 shadow-sm transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {currentView === 'home' && (
        <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600 ring-1 ring-inset ring-blue-200">
                  <span className="h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span> 
                  Top Rated Digital Agency
                </span>
              </motion.div>
              
              <motion.h1 
                className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Drive Growth with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Proven Strategies</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg leading-8 text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Expert digital marketing agency offering SEO, social media marketing, web development, and PPC services. We transform your digital presence into a powerful revenue engine.
              </motion.p>
              
              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button 
                  onClick={() => { setCurrentView('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                  className="group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white border-2 border-slate-900 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.8)] transition-all hover:bg-blue-700 hover:-translate-y-1"
                >
                  Start Growing Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => { setCurrentView('home'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                  className="rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 border-2 border-slate-200 transition-all hover:bg-slate-50 hover:-translate-y-1 hover:shadow-sm"
                >
                  View Our Work
                </button>
              </motion.div>

              <motion.div 
                className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex -space-x-2">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=1" alt=""/>
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=2" alt=""/>
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=3" alt=""/>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white text-xs font-bold text-slate-600">+500</div>
                </div>
                <p>Trusted by 500+ fast-growing companies</p>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <motion.div 
                className="relative rounded-2xl bg-slate-900 p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500 blur-2xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500 blur-2xl opacity-50"></div>
                
                <div className="relative space-y-6">
                  {/* Mock Dashboard Card 1 */}
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white font-semibold">Organic Traffic</div>
                      <TrendingUp className="text-green-400 h-5 w-5" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">+245%</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>

                  {/* Mock Dashboard Card 2 */}
                  <div className="flex gap-6">
                    <div className="flex-1 rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/10">
                      <Target className="text-blue-400 h-8 w-8 mb-3" />
                      <div className="text-2xl font-bold text-white">12.5k</div>
                      <div className="text-sm text-slate-300">New Leads</div>
                    </div>
                    <div className="flex-1 rounded-xl bg-blue-600 p-6 shadow-lg shadow-blue-600/20">
                      <Zap className="text-white h-8 w-8 mb-3" />
                      <div className="text-2xl font-bold text-white">4.8x</div>
                      <div className="text-sm text-blue-100">ROAS</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Tools Marquee */}
      <section className="border-y border-slate-100 bg-slate-50 py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Powered by Industry-Leading Tools</p>
        </div>
        <div className="relative flex overflow-hidden group w-full">
          <div className="animate-marquee flex w-max whitespace-nowrap items-center group-hover:[animation-play-state:paused]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Globe className="h-7 w-7 text-blue-500"/> Google Search Console</div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Linkedin className="h-7 w-7 text-blue-700"/> LinkedIn Ads</div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Facebook className="h-7 w-7 text-blue-600"/> Meta Ads</div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Activity className="h-7 w-7 text-orange-500"/> Ahrefs</div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><MousePointerClick className="h-7 w-7 text-green-600"/> Google Ads</div>
                <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Search className="h-7 w-7 text-orange-600"/> SEMRush</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Comprehensive Digital Marketing Solutions</h3>
            <p className="text-lg text-slate-600">We don't just drive traffic; we drive the right traffic. Our full-funnel approach ensures every click has the potential to become a customer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Search className="h-7 w-7 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Search Engine Optimization</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dominate search results with our data-driven SEO strategies. We optimize your technical foundation, create authoritative content, and build high-quality backlinks.
              </p>
              <ul className="space-y-3 mb-8">
                {['Technical SEO Audits', 'Keyword Strategy', 'Link Building', 'Local SEO'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* PPC */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MousePointerClick className="h-7 w-7 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">PPC Advertising</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Maximize your ROI with highly targeted paid campaigns. We manage your ad spend efficiently across Google, Bing, and social platforms to capture high-intent buyers.
              </p>
              <ul className="space-y-3 mb-8">
                {['Google Ads Management', 'Retargeting Campaigns', 'Shopping Ads', 'Conversion Tracking'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-orange-600 hover:text-orange-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Social Media */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Megaphone className="h-7 w-7 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Social Media Marketing</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Build a loyal community and drive brand awareness. We create engaging content and manage targeted social ad campaigns that resonate with your audience.
              </p>
              <ul className="space-y-3 mb-8">
                {['Social Strategy', 'Content Creation', 'Community Management', 'Paid Social Ads'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-purple-600 hover:text-purple-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Web Dev */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Code className="h-7 w-7 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Your website is your best salesperson. We build lightning-fast, conversion-optimized, and visually stunning websites that turn visitors into paying customers.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom UI/UX Design', 'E-Commerce Development', 'Landing Page Optimization', 'Performance Tuning'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-emerald-600 hover:text-emerald-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* AI Development */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Cpu className="h-7 w-7 text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AI Development</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Leverage the power of Artificial Intelligence. We build custom AI solutions, chatbots, and automation tools to streamline your business operations.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom AI Models', 'Process Automation', 'Smart Chatbots', 'Machine Learning'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* AI Voice Calling */}
            <div className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100">
              <div className="h-14 w-14 rounded-2xl bg-rose-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Bot className="h-7 w-7 text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AI Voice Calling</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Revolutionize your customer outreach with AI-powered voice calling. Scale your sales and support with intelligent, human-like voice agents.
              </p>
              <ul className="space-y-3 mb-8">
                {['Automated Outreach', 'Inbound Support', 'Lead Qualification', '24/7 Availability'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center font-bold text-rose-600 hover:text-rose-700">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="results" className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">500+</div>
              <div className="text-slate-400 font-medium">Projects Delivered</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">$50M+</div>
              <div className="text-slate-400 font-medium">Client Revenue Generated</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">98%</div>
              <div className="text-slate-400 font-medium">Client Retention Rate</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">10+</div>
              <div className="text-slate-400 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio Section */}
      <section id="portfolio" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Real Results for Real Brands</h3>
            <p className="text-lg text-slate-600">See how we've helped businesses across various industries scale their operations and dominate their markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Case Study 1 - Meta Ads */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Interior Design Portfolio" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-white text-[#6a11cb] text-sm font-bold rounded-full shadow-md">Interior Design Studio</span>
                  <span className="px-4 py-1.5 bg-[#6a11cb] text-white text-sm font-bold rounded-full shadow-md">Meta Ads</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Design Inside</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Generated 2,450+ quality leads through strategic Meta Ads campaigns with cost-efficient CPL optimization.
                </p>
              </div>
            </div>

            {/* Case Study 2 - Web Dev */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trading Platform Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top" 
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-white text-[#6a11cb] text-sm font-bold rounded-full shadow-md">Stock Trading Company</span>
                  <span className="px-4 py-1.5 bg-[#6a11cb] text-white text-sm font-bold rounded-full shadow-md">Website Development</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Trading Ai</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Built a high-converting landing page for an AI-powered stock market indicator platform.
                </p>
              </div>
            </div>

            {/* Case Study 3 - SEO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="E-commerce Growth" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-white text-[#6a11cb] text-sm font-bold rounded-full shadow-md">E-Commerce Brand</span>
                  <span className="px-4 py-1.5 bg-[#6a11cb] text-white text-sm font-bold rounded-full shadow-md">SEO Optimization</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Luxe Apparel</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Increased organic traffic by 340% and doubled online revenue within 6 months through technical SEO and content strategy.
                </p>
              </div>
            </div>

            {/* Case Study 4 - PPC */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="SaaS Analytics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-white text-[#6a11cb] text-sm font-bold rounded-full shadow-md">SaaS Startup</span>
                  <span className="px-4 py-1.5 bg-[#6a11cb] text-white text-sm font-bold rounded-full shadow-md">Google Ads (PPC)</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">DataFlow Analytics</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Scaled user acquisition with a 4.2x ROAS using highly targeted Google Search and Display network campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Industries We Serve</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Tailored Strategies for Every Sector</h3>
            <p className="text-lg text-slate-600">We understand that every industry has unique challenges. Our customized approaches ensure you dominate your specific market.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Healthcare', 'Real Estate', 'E-Commerce', 'SaaS & Tech', 'Education', 'Finance', 'Legal', 'Home Services'].map((industry, i) => (
              <div key={i} className="flex items-center justify-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
                <span className="text-lg font-bold text-slate-700 group-hover:text-blue-600">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Founders Section */}
      <section id="about" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Meet the Visionaries Behind Crazy SEO Team</h3>
            <p className="text-lg text-slate-600">Driven by passion and data, our leadership team is dedicated to transforming your digital presence and scaling your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Founder */}
            <div className="flex flex-col items-center text-center bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Anand Kumar Singh - Founder" 
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-slate-50 shadow-lg"
              />
              <h4 className="text-2xl font-bold text-slate-900 mb-1">Anand Kumar Singh</h4>
              <p className="text-blue-600 font-semibold mb-6 uppercase tracking-wide text-sm">Founder</p>
              <p className="text-slate-600 italic leading-relaxed">
                "Our mission is simple: to deliver unparalleled digital growth for our clients. We believe in transparency, hard work, and strategies that actually move the needle. Your success is our ultimate metric."
              </p>
            </div>

            {/* Co-Founder */}
            <div className="flex flex-col items-center text-center bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Saurabh Anand - Co-Founder" 
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-slate-50 shadow-lg"
              />
              <h4 className="text-2xl font-bold text-slate-900 mb-1">Saurabh Anand</h4>
              <p className="text-blue-600 font-semibold mb-6 uppercase tracking-wide text-sm">Co-Founder</p>
              <p className="text-slate-600 italic leading-relaxed">
                "Innovation is at the core of what we do. By integrating advanced AI technologies with proven marketing tactics, we ensure our clients stay ahead of the curve and dominate their respective industries."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">We Don't Guess. We Analyze, Execute, and Win.</h3>
              <p className="text-lg text-slate-600 mb-8">
                Unlike traditional agencies that rely on outdated tactics, we combine cutting-edge technology, AI, and deep industry expertise to deliver measurable results.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Data-Driven Approach</h4>
                    <p className="text-slate-600">Every decision we make is backed by hard data and analytics, ensuring your budget is spent where it yields the highest return.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Dedicated Experts</h4>
                    <p className="text-slate-600">You get direct access to a dedicated team of specialists—not an account manager who passes messages along.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Transparent Reporting</h4>
                    <p className="text-slate-600">No vanity metrics. We provide clear, honest reporting that connects our marketing efforts directly to your bottom line.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working on strategy" 
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Teaser */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Latest Insights</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Stay Ahead of the Curve</h3>
            </div>
            <button 
              onClick={() => setCurrentView('blog')}
              className="mt-6 md:mt-0 inline-flex items-center font-bold text-blue-600 hover:text-blue-700"
            >
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div 
              onClick={() => setCurrentView('blog-seo-2026')}
              className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI and SEO in 2026" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">SEO Strategy</span>
                  <span className="text-sm text-slate-500 font-medium">March 30, 2026</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  SEO in 2026: Navigating the AI-First Search Landscape
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  The search landscape has fundamentally shifted. With AI Overviews (SGE) dominating results and zero-click searches at an all-time high, here is how you need to adapt your strategy to win in 2026.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Anand Kumar Singh</p>
                    <p className="text-xs text-slate-500">Founder & SEO Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative isolate overflow-hidden bg-blue-600 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-800"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-blue-100 mb-10">
            Stop losing customers to your competitors. Let's build a digital marketing engine that drives predictable, scalable growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 border-2 border-slate-900 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] transition-all hover:bg-slate-50 hover:-translate-y-1">
              Get Your Free Proposal
            </button>
            <a href="tel:+916205153346" className="rounded-full bg-blue-700 px-10 py-4 text-lg font-bold text-white border-2 border-slate-900 shadow-sm transition-all hover:bg-blue-800 hover:-translate-y-1 text-center">
              Call +91 62051 53346
            </a>
          </div>
        </div>
      </section>
      </main>
      )}

      {currentView === 'blog' && (
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Blog</h1>
              <p className="text-lg text-slate-600">Latest insights, strategies, and news from the digital marketing world.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div 
                onClick={() => setCurrentView('blog-seo-2026')}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI and SEO in 2026" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full shadow-sm">SEO Strategy</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-slate-500 font-medium mb-3">March 30, 2026</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    SEO in 2026: Navigating the AI-First Search Landscape
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3 flex-grow">
                    The search landscape has fundamentally shifted. With AI Overviews dominating results, here is how you need to adapt your strategy to win in 2026.
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="w-8 h-8 rounded-full" />
                    <p className="text-sm font-bold text-slate-900">Anand Kumar Singh</p>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="PPC Strategies" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-700 text-xs font-bold rounded-full shadow-sm">PPC</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-slate-500 font-medium mb-3">March 25, 2026</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    Maximizing ROI with Google Ads in a Cookieless World
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3 flex-grow">
                    Learn how to leverage first-party data and advanced tracking to maintain high conversion rates despite privacy changes.
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="w-8 h-8 rounded-full" />
                    <p className="text-sm font-bold text-slate-900">Saurabh Anand</p>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Social Media Trends" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold rounded-full shadow-sm">Social Media</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-slate-500 font-medium mb-3">March 18, 2026</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    The Rise of Short-Form Video: TikTok and Reels Strategy
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 line-clamp-3 flex-grow">
                    Why your brand needs to be on TikTok and Instagram Reels, and how to create content that actually converts.
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="w-8 h-8 rounded-full" />
                    <p className="text-sm font-bold text-slate-900">Anand Kumar Singh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {currentView === 'blog-seo-2026' && (
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
          <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setCurrentView('blog')}
              className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Blog
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">SEO Strategy</span>
              <span className="text-sm text-slate-500 font-medium">March 30, 2026</span>
              <span className="text-sm text-slate-500 font-medium">• 6 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              SEO in 2026: Navigating the AI-First Search Landscape
            </h1>

            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-slate-100">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-base font-bold text-slate-900">Anand Kumar Singh</p>
                <p className="text-sm text-slate-500">Founder & SEO Expert at Crazy SEO Team</p>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="AI and SEO in 2026" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl mb-12 shadow-lg" 
            />

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                The digital marketing world is undergoing its most dramatic shift since the invention of the search engine. If you are still optimizing your website using the playbooks from 2023, you are already falling behind. The search landscape has fundamentally shifted. With AI Overviews (formerly SGE) dominating the top of search engine results pages (SERPs) and "zero-click" searches reaching an all-time high, the traditional SEO strategy requires a complete overhaul to win in 2026.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. The Rise of AI Overviews and "Zero-Click" Reality</h2>
              <p className="text-slate-700 mb-6">
                Google's AI Overviews now answer complex, multi-layered queries directly on the SERP. Users no longer need to click through to a website to find out "how to fix a leaky faucet" or "what is the best CRM for a small business." The AI aggregates the best answers instantly, keeping users on the search engine rather than sending them to your site.
              </p>
              <p className="text-slate-700 mb-8">
                <strong>The Strategy:</strong> Stop optimizing for simple, informational queries that an AI can answer in a single sentence. Instead, you must optimize for <em>experience-driven</em> queries. AI can summarize facts, but it cannot share a first-hand case study, a unique opinion, or a proprietary data set. You must become the primary source that the AI cites by providing deep, original insights.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Data Analytics" 
                className="w-full h-[400px] object-cover rounded-2xl mb-8" 
              />

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. E-E-A-T is Your Only Moat</h2>
              <p className="text-slate-700 mb-6">
                Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are no longer just quality guidelines; they are the core algorithmic signals determining your visibility. As AI-generated content floods the web, search engines are desperately looking for signals of human authenticity.
              </p>
              <ul className="list-disc pl-6 mb-8 text-slate-700 space-y-2">
                <li><strong>Author Entities:</strong> Ensure every piece of content is tied to a real, verifiable expert with a strong digital footprint.</li>
                <li><strong>First-Hand Experience:</strong> Use phrases like "In our testing," "When we implemented this," and showcase original photos, videos, and data.</li>
                <li><strong>Digital PR:</strong> Brand mentions and high-tier backlinks from reputable publications are critical trust signals that AI models rely on.</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Video SEO and Visual Search Dominance</h2>
              <p className="text-slate-700 mb-6">
                Text is no longer the default medium. Gen Z and Alpha treat TikTok and YouTube Shorts as their primary search engines. Furthermore, Google Lens processes billions of visual searches monthly, allowing users to search by simply pointing their camera.
              </p>
              <p className="text-slate-700 mb-8">
                If your SEO strategy doesn't include optimizing short-form video content and high-resolution, context-rich images, you are missing out on a massive segment of search intent. You need to optimize video metadata, captions, and visual elements just as rigorously as you do your written content.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Video Content Creation" 
                className="w-full h-[400px] object-cover rounded-2xl mb-8" 
              />

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion: Adapt or Fall Behind</h2>
              <p className="text-slate-700 mb-8">
                SEO isn't dead; it has simply evolved. The days of keyword stuffing and generic 500-word blog posts are long gone. In 2026, the winners will be brands that produce deeply authentic, expert-led content across multiple mediums (text, video, audio) and structure their data so AI engines can easily digest and cite it.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 mt-12 border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Help Navigating the New SEO Landscape?</h3>
                <p className="text-slate-700 mb-6">
                  At Crazy SEO Team, we stay ahead of the algorithm. Let us audit your current strategy and build a future-proof growth engine for your brand.
                </p>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="rounded-full bg-blue-600 px-8 py-3 text-base font-bold text-white transition-all hover:bg-blue-700"
                >
                  Get Your Free Audit
                </button>
              </div>
            </div>
          </article>
        </main>
      )}

      {currentView === 'privacy' && (
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: March 30, 2026</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 mb-6">We collect information you provide directly to us, such as when you fill out a contact form, request an audit, or communicate with us. This may include your name, email address, phone number, and company details.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 mb-6">We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you technical notices and promotional messages.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
            <p className="text-slate-700 mb-6">We implement appropriate technical and organizational measures to protect the security of your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Contact Us</h2>
            <p className="text-slate-700 mb-6">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:crazyseoteam@gmail.com" className="text-blue-600 hover:underline">crazyseoteam@gmail.com</a>.</p>
          </div>
        </main>
      )}

      {currentView === 'terms' && (
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
            <p className="text-slate-500">Last updated: March 30, 2026</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 mb-6">By accessing and using the services provided by Crazy SEO Team, you agree to be bound by these Terms of Service.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Services Provided</h2>
            <p className="text-slate-700 mb-6">Crazy SEO Team provides digital marketing services including SEO, PPC, Social Media Marketing, Web Development, and AI solutions. Specific deliverables will be outlined in individual client agreements.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-slate-700 mb-6">All methodologies, strategies, and proprietary tools used by Crazy SEO Team remain our intellectual property. Client-specific content and assets created during the engagement belong to the client upon full payment.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-700 mb-6">Crazy SEO Team shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </div>
        </main>
      )}

      {currentView === 'payment' && (
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Payment Methods</h1>
            <p className="text-slate-700 mb-8">We offer flexible and secure payment options for our clients worldwide.</p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Accepted Payment Methods</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-3 mb-8">
              <li><strong>Bank Transfers (Wire/ACH/NEFT/RTGS):</strong> Direct bank transfers are accepted for all retainer and project-based invoices. Bank details are provided on your invoice.</li>
              <li><strong>Credit & Debit Cards:</strong> We accept all major credit and debit cards (Visa, MasterCard, American Express) securely via Stripe/Razorpay.</li>
              <li><strong>UPI (India Only):</strong> For our Indian clients, we accept payments via all major UPI apps (Google Pay, PhonePe, Paytm, BHIM).</li>
              <li><strong>PayPal:</strong> Available for international clients upon request.</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Payment Terms</h2>
            <p className="text-slate-700 mb-6">Standard payment terms are Net 15 or Net 30 days depending on the contract. Retainer services are typically billed at the beginning of the month. All payments are processed securely, and we do not store your sensitive financial data.</p>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Crazy SEO Team
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                A premium digital marketing agency dedicated to driving explosive growth for ambitious brands worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/crazy-seo-team" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Search Engine Optimization</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pay-Per-Click Advertising</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Design & Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Content Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company & Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => { setCurrentView('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-blue-400 transition-colors">About Us</button></li>
                <li><button onClick={() => { setCurrentView('home'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-blue-400 transition-colors">Case Studies</button></li>
                <li><button onClick={() => setCurrentView('blog')} className="hover:text-blue-400 transition-colors">Blog</button></li>
                <li><button onClick={() => setCurrentView('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setCurrentView('terms')} className="hover:text-blue-400 transition-colors">Terms of Service</button></li>
                <li><button onClick={() => setCurrentView('payment')} className="hover:text-blue-400 transition-colors">Payment Methods</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Nalanda, Bihar, India-803111</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                  <a href="tel:+916205153346" className="hover:text-white transition-colors">+91 62051 53346</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                  <a href="mailto:crazyseoteam@gmail.com" className="hover:text-white transition-colors">crazyseoteam@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Crazy SEO Team. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 text-sm font-medium">
              <button onClick={() => setCurrentView('privacy')} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm">Privacy Policy</button>
              <button onClick={() => setCurrentView('terms')} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm">Terms of Service</button>
              <button onClick={() => setCurrentView('payment')} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm">Payment Methods</button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916205153346"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-9 w-9"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.125.553 4.196 1.604 6.016L.273 24l6.109-1.604A11.96 11.96 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.625 17.344c-.156.443-.911.833-1.276.875-.365.042-.833.083-2.656-.677-2.188-.911-3.594-3.177-3.708-3.323-.115-.146-.885-1.177-.885-2.25 0-1.073.552-1.604.75-1.823.198-.219.432-.271.573-.271.141 0 .281 0 .406.01.135.01.323-.052.5.365.188.427.646 1.583.708 1.708.063.125.104.271.021.438-.083.167-.125.271-.25.417-.125.146-.26.313-.375.427-.125.125-.26.26-.115.51.146.25.646 1.063 1.385 1.719.958.844 1.76 1.104 2.01 1.229.25.125.396.104.542-.063.146-.167.625-.729.792-.979.167-.25.333-.208.563-.125.229.083 1.448.688 1.698.813.25.125.417.188.479.292.063.104.063.604-.094 1.042z" />
        </svg>
      </a>
    </div>
  );
}
