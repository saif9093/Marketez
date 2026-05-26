import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { benefits } from '../data/content';
import {
  PiggyBank,
  Clock,
  Repeat,
  Scale,
  Maximize2,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
} from 'lucide-react';

const benefitIcons = [PiggyBank, Clock, Repeat, Scale, Maximize2, BarChart3];

const benefitStyles = [
  { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', border: 'border-l-emerald-400', dot: 'bg-emerald-400' },
  { iconBg: 'bg-blue-50',    iconColor: 'text-blue-600',    border: 'border-l-blue-400',    dot: 'bg-blue-400' },
  { iconBg: 'bg-orange-50',  iconColor: 'text-accent',      border: 'border-l-accent',      dot: 'bg-accent' },
  { iconBg: 'bg-violet-50',  iconColor: 'text-violet-600',  border: 'border-l-violet-400',  dot: 'bg-violet-400' },
  { iconBg: 'bg-navy/5',     iconColor: 'text-navy',        border: 'border-l-navy',        dot: 'bg-navy' },
  { iconBg: 'bg-teal-50',    iconColor: 'text-teal-600',    border: 'border-l-teal-400',    dot: 'bg-teal-400' },
];

const trustStats = [
  { icon: BarChart3, value: '95%', label: 'Follow-Up Compliance', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Users,     value: '50K+', label: 'Leads Managed',       color: 'text-blue-600',   bg: 'bg-blue-50' },
  { icon: TrendingUp, value: '3.2×', label: 'Avg. Pipeline Growth', color: 'text-accent',   bg: 'bg-orange-50' },
];

export default function WhyUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container-default relative z-10" ref={ref}>
        {/* Section badge + heading — top, full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="section-heading text-balance max-w-3xl mb-3">
            You Invest In Generating Leads.{' '}
            <span className="text-accent">We Help You Get More Value From Them.</span>
          </h2>
          <p className="text-surface-dark/55 text-base max-w-2xl leading-relaxed">
            Your sales team shouldn't be chasing cold prospects. We handle the heavy lifting —
            so every lead gets the attention it deserves.
          </p>
        </motion.div>

        {/* Two-column: image left, feature list right */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-12">

          {/* LEFT — image with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-2 relative pb-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whyus_crm.png"
                alt="Professional working on CRM lead pipeline dashboard"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display font-bold text-white text-lg mb-0.5">
                  Professional Team. Proven Process.
                </div>
                <div className="text-white/55 text-sm">
                  Focused on CRM, communication, and results
                </div>
              </div>

              {/* Top-left trust badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                <span className="font-display font-semibold text-navy text-xs">Trusted Partner</span>
              </div>
            </div>

            {/* Floating stat 1 — follow-up rate (below image, left side) */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute bottom-0 left-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={22} className="text-emerald-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy text-xl leading-none">95%</div>
                  <div className="text-[10px] text-surface-dark/40 uppercase tracking-wider mt-0.5">Follow-up Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat 2 — leads managed (top right, outside image) */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.92 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute -top-4 right-4 md:-right-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users size={22} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy text-xl leading-none">50K+</div>
                  <div className="text-[10px] text-surface-dark/40 uppercase tracking-wider mt-0.5">Leads Managed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — feature list rows */}
          <div className="lg:col-span-3 flex flex-col gap-0 divide-y divide-gray-100">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              const style = benefitStyles[index];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  className={`flex items-start gap-4 py-5 px-4 border-l-[3px] ${style.border} hover:bg-white rounded-r-xl transition-all duration-200 group cursor-default`}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${style.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={22} className={style.iconColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-navy text-[15px] mb-1 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-surface-dark/55 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Right checkmark — fades in on hover */}
                  <div className={`w-5 h-5 rounded-full ${style.dot} flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div>
                <div className={`font-display font-bold text-2xl ${stat.color} leading-none mb-0.5`}>
                  {stat.value}
                </div>
                <div className="text-xs text-surface-dark/50 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
