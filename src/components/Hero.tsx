import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle, PhoneCall, TrendingUp, Calendar, Zap, ChevronRight, Phone } from 'lucide-react';

const pipelineSteps = [
  { icon: Users, label: 'Marketing Leads', desc: 'Raw inbound leads', color: 'bg-white/20 text-white', border: 'border-white/30' },
  { icon: PhoneCall, label: 'Market Easy Team', desc: 'Engage & nurture', color: 'bg-accent/90 text-white', border: 'border-accent' },
  { icon: CheckCircle, label: 'Qualified Opportunities', desc: 'Sales-ready leads', color: 'bg-emerald-500/90 text-white', border: 'border-emerald-400' },
  { icon: Calendar, label: 'Sales Team', desc: 'Meet & present', color: 'bg-white/20 text-white', border: 'border-white/30' },
  { icon: TrendingUp, label: 'Closed Deals', desc: 'Revenue growth', color: 'bg-accent/90 text-white', border: 'border-accent' },
];

const stats = [
  { value: '50K+', label: 'Leads Managed' },
  { value: '95%', label: 'Follow-Up Rate' },
  { value: '24hrs', label: 'Response Time' },
  { value: '10+', label: 'Countries Served' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7693685/pexels-photo-7693685.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/95 via-navy/85 to-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-transparent to-navy-800/30" />

      {/* Decorative accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="container-default relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-6">
                <Zap size={14} className="text-accent" />
                Lead Qualification & Sales Development Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.05] mb-6 text-balance"
            >
              Your Sales Team Should Be Closing Deals,{' '}
              <span className="relative inline-block">
                <span className="text-accent">Not Chasing Leads</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-accent/50 rounded-full origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-8"
            >
              Every lead represents an opportunity. But when sales teams are busy, follow-ups get
              delayed, prospects lose interest, and potential revenue slips away. We help businesses
              engage, nurture, and qualify leads so your sales team can focus on what they do
              best—closing deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 text-base"
              >
                Book a Discovery Call
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-display font-semibold rounded-xl transition-all duration-200 text-base"
              >
                <Phone size={16} />
                Contact Us
              </a>
            </motion.div>

            {/* Inline stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 md:gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="font-display font-bold text-2xl text-accent">{stat.value}</span>
                  <span className="text-white/40 text-xs uppercase tracking-wider leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Animated Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 to-blue-500/10 rounded-3xl blur-2xl" />

            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Lead Conversion Pipeline</div>
                  <div className="text-sm text-white/40">Real-time workflow visualization</div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-400/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-300 font-medium">Live</span>
                </div>
              </div>

              {/* Pipeline steps */}
              <div className="space-y-2">
                {pipelineSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                  >
                    <div className={`flex items-center gap-3 p-3 rounded-xl border ${step.border} ${step.color} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}>
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <step.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-semibold text-white text-sm">{step.label}</div>
                        <div className="text-xs text-white/50">{step.desc}</div>
                      </div>
                      {index === pipelineSteps.length - 1 ? (
                        <div className="flex-shrink-0 flex items-center gap-1 bg-emerald-500/30 px-2.5 py-1 rounded-md">
                          <TrendingUp size={12} className="text-emerald-300" />
                          <span className="text-xs font-bold text-emerald-200">CLOSED</span>
                        </div>
                      ) : (
                        <ChevronRight size={16} className="text-white/30 flex-shrink-0" />
                      )}
                    </div>
                    {/* Connector */}
                    {index < pipelineSteps.length - 1 && (
                      <div className="ml-5 w-0.5 h-2 bg-white/20 rounded-full" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom stats bar */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                {[
                  { label: 'Avg. Response', value: '24hrs' },
                  { label: 'Qualification Rate', value: '3.2x' },
                  { label: 'Pipeline Growth', value: '+47%' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-display font-bold text-white text-sm">{item.value}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand promise floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2.5 rounded-full shadow-lg shadow-accent/30 font-display font-semibold text-sm whitespace-nowrap"
            >
              We Nurture. We Qualify. You Close.
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
