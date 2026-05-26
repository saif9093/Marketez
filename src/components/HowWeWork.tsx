import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { processSteps } from '../data/content';
import {
  Inbox,
  Phone,
  HeartHandshake,
  ShieldCheck,
  CalendarCheck,
  Handshake as HandshakeIcon,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const stepIcons = [Inbox, Phone, HeartHandshake, ShieldCheck, CalendarCheck, HandshakeIcon];

const stepStyles = [
  { gradient: 'from-blue-500 to-blue-600',       ring: 'ring-blue-200',   topBorder: 'border-t-blue-500',   label: 'text-blue-600',   lightBg: 'bg-blue-50',   pillBg: 'bg-blue-600' },
  { gradient: 'from-orange-400 to-accent',        ring: 'ring-orange-200', topBorder: 'border-t-accent',     label: 'text-accent',     lightBg: 'bg-orange-50', pillBg: 'bg-accent' },
  { gradient: 'from-emerald-400 to-emerald-600',  ring: 'ring-emerald-200',topBorder: 'border-t-emerald-500',label: 'text-emerald-600',lightBg: 'bg-emerald-50',pillBg: 'bg-emerald-600' },
  { gradient: 'from-navy to-navy-600',            ring: 'ring-navy/30',    topBorder: 'border-t-navy',       label: 'text-navy',       lightBg: 'bg-navy/5',    pillBg: 'bg-navy' },
  { gradient: 'from-violet-500 to-violet-600',    ring: 'ring-violet-200', topBorder: 'border-t-violet-500', label: 'text-violet-600', lightBg: 'bg-violet-50', pillBg: 'bg-violet-600' },
  { gradient: 'from-teal-500 to-teal-600',        ring: 'ring-teal-200',   topBorder: 'border-t-teal-500',   label: 'text-teal-600',   lightBg: 'bg-teal-50',   pillBg: 'bg-teal-600' },
];

const pipelineFlow = [
  { label: 'Lead',             color: 'bg-blue-600' },
  { label: 'Nurture',          color: 'bg-accent' },
  { label: 'Qualify',          color: 'bg-emerald-500' },
  { label: 'Schedule Meeting', color: 'bg-navy' },
  { label: 'Sales Handover',   color: 'bg-violet-600' },
  { label: 'Close',            color: 'bg-teal-600' },
];

export default function HowWeWork() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container-default relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="section-heading text-balance">
            A Simple Process That Keeps Your{' '}
            <span className="text-accent">Pipeline Moving</span>
          </h2>
          <p className="section-subheading mx-auto">
            You send us your leads — we handle everything from first contact to sales-ready handover.
          </p>
        </motion.div>

        {/* ── DESKTOP: horizontal timeline ─────────────────────────────── */}
        <div className="hidden lg:block mb-12">
          <div className="relative">

            {/* Timeline track — base */}
            <div className="absolute top-[2.6rem] left-[calc(100%/12)] right-[calc(100%/12)] h-[3px] bg-gray-100 rounded-full" />
            {/* Timeline track — animated fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.3, ease: 'easeInOut' }}
              className="absolute top-[2.6rem] left-[calc(100%/12)] right-[calc(100%/12)] h-[3px] bg-gradient-to-r from-blue-500 via-accent via-emerald-500 via-navy via-violet-500 to-teal-500 rounded-full origin-left"
            />

            <div className="grid grid-cols-6 gap-3">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index];
                const s = stepStyles[index];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    {/* Gradient circle icon — sits ON the timeline */}
                    <div className="relative mb-5 z-10">
                      <div className={`w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      {/* Step number badge — top-right corner */}
                      <div className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full ${s.pillBg} border-2 border-white flex items-center justify-center`}>
                        <span className="text-white text-[9px] font-bold leading-none">{step.step}</span>
                      </div>
                    </div>

                    {/* Card below icon */}
                    <div className={`w-full bg-surface rounded-xl border border-gray-100 border-t-[3px] ${s.topBorder} p-4 shadow-sm hover:shadow-md transition-shadow duration-300 text-center`}>
                      <div className={`text-[9px] font-bold uppercase tracking-widest ${s.label} mb-1.5`}>Step {step.step}</div>
                      <h3 className="font-display font-semibold text-navy text-xs leading-snug mb-1.5">{step.title}</h3>
                      <p className="text-[11px] text-surface-dark/55 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── MOBILE: numbered vertical steps ──────────────────────────── */}
        <div className="lg:hidden mb-10">
          <div className="relative">
            {/* Left rail line */}
            <div className="absolute left-[1.625rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-400 via-accent via-emerald-400 via-navy via-violet-400 to-teal-400 opacity-30 rounded-full" />

            <div className="space-y-3">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index];
                const s = stepStyles[index];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    {/* Left: circle number */}
                    <div className={`w-[3.25rem] h-[3.25rem] rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 shadow-md ring-4 ring-white z-10`}>
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Right: card */}
                    <div className={`flex-1 bg-surface rounded-xl border border-gray-100 border-l-[3px] ${s.topBorder.replace('border-t-', 'border-l-')} p-4 shadow-sm`}>
                      <div className={`text-[9px] font-bold uppercase tracking-widest ${s.label} mb-1`}>Step {step.step}</div>
                      <h3 className="font-display font-semibold text-navy text-sm mb-1 leading-snug">{step.title}</h3>
                      <p className="text-xs text-surface-dark/55 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Pipeline flow strip ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-6 mb-6"
        >
          <div className="text-[10px] font-bold text-surface-dark/30 uppercase tracking-widest text-center mb-5">
            Pipeline Flow
          </div>

          {/* Desktop row */}
          <div className="hidden sm:flex items-center justify-center gap-1.5 flex-wrap">
            {pipelineFlow.map((item, i) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.1 }}
                  className={`flex items-center gap-2 ${item.color} text-white px-4 py-2.5 rounded-xl shadow-sm`}
                >
                  <span className="text-white/50 text-[9px] font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[12px] font-display font-bold whitespace-nowrap">{item.label}</span>
                </motion.div>
                {i < pipelineFlow.length - 1 && (
                  <ChevronRight size={15} className="text-gray-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile grid */}
          <div className="sm:hidden grid grid-cols-2 gap-2">
            {pipelineFlow.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.08 }}
                className={`flex items-center gap-2.5 ${item.color} text-white px-3.5 py-2.5 rounded-xl shadow-sm`}
              >
                <span className="text-white/50 text-[9px] font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[11px] font-display font-bold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Result CTA ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-navy-800" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }} />
          {/* Glow */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 p-7 md:p-9 text-center sm:text-left">
            <div>
              <div className="font-display font-bold text-white text-lg md:text-2xl mb-1 leading-snug">
                The result? Your team gets qualified,<br className="hidden md:block" /> sales-ready leads.
              </div>
              <div className="text-white/45 text-sm">
                We handle every step from first touch to handover — you just close.
              </div>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Start Today
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

