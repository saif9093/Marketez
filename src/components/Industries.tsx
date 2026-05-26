import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { industries } from '../data/content';
import {
  Cpu,
  GraduationCap,
  Globe,
  HeartPulse,
  Landmark,
  Building2,
  Briefcase,
  Lightbulb,
} from 'lucide-react';

const industryIcons = [Cpu, GraduationCap, Globe, HeartPulse, Landmark, Building2, Briefcase, Lightbulb];

const industryStyles = [
  { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'hover:border-blue-200', glow: 'hover:shadow-blue-100' },
  { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'hover:border-emerald-200', glow: 'hover:shadow-emerald-100' },
  { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'hover:border-cyan-200', glow: 'hover:shadow-cyan-100' },
  { bg: 'bg-rose-50', icon: 'text-rose-600', border: 'hover:border-rose-200', glow: 'hover:shadow-rose-100' },
  { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'hover:border-amber-200', glow: 'hover:shadow-amber-100' },
  { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'hover:border-violet-200', glow: 'hover:shadow-violet-100' },
  { bg: 'bg-navy/5', icon: 'text-navy', border: 'hover:border-navy/20', glow: 'hover:shadow-navy/10' },
  { bg: 'bg-orange-50', icon: 'text-accent', border: 'hover:border-accent/20', glow: 'hover:shadow-accent/10' },
];

export default function Industries() {
  const { ref, isInView } = useInView();

  return (
    <section id="industries" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/4 rounded-full blur-3xl" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            Industries We Support
          </span>
          <h2 className="section-heading text-balance">
            Built For Any Industry That Relies On{' '}
            <span className="text-accent">Lead Conversations</span>
          </h2>
          <p className="section-subheading mx-auto">
            From SaaS to Healthcare — if you generate leads, we help you convert them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            const style = industryStyles[index];
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 shadow-sm transition-all duration-300 text-center group ${style.border} ${style.glow} hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`w-13 h-13 w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center mx-auto mb-3.5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={24} className={style.icon} />
                </div>
                <h3 className="font-display font-semibold text-sm lg:text-[15px] text-navy leading-snug">
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.65 }}
          className="text-center mt-10"
        >
          <p className="inline-block text-surface-dark/50 text-sm bg-white border border-gray-100 rounded-full px-6 py-2.5 shadow-sm">
            Don't see your industry? Our process adapts to any business that generates leads.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
