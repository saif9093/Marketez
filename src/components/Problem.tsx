import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { AlertTriangle, CheckCircle2, PhoneOff, Clock, XCircle, BarChart3, ArrowRight } from 'lucide-react';

const leftItems = [
  { icon: PhoneOff, label: 'Missed follow-ups', desc: 'Leads going cold before anyone reaches out' },
  { icon: Clock, label: 'Delayed responses', desc: 'Competitors getting there first' },
  { icon: XCircle, label: 'Lost opportunities', desc: 'Revenue walking out the door' },
  { icon: BarChart3, label: 'Leaky pipeline', desc: 'No visibility into lead status' },
];

const rightItems = [
  { icon: CheckCircle2, label: 'Prompt outreach', desc: 'Every lead contacted within 24 hours' },
  { icon: Clock, label: 'Consistent follow-up', desc: 'Multi-touch engagement cadence' },
  { icon: CheckCircle2, label: 'Qualified leads', desc: 'Only sales-ready prospects reach your team' },
  { icon: BarChart3, label: 'Healthy pipeline', desc: 'Full visibility and tracking' },
];

export default function Problem() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy/10 via-accent/20 to-navy/10" />

      <div className="container-default" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="section-heading mb-4 text-balance">
            Most Leads Don't Need More Marketing.{' '}
            <span className="text-accent">They Need Follow-Up.</span>
          </h2>
          <p className="section-subheading mx-auto">
            Businesses spend thousands generating leads, yet many never receive the attention they
            deserve. Not because they're bad leads. Because sales teams are juggling demos,
            meetings, proposals, and existing customers. That's where we come in. We become an
            extension of your team, ensuring every lead is contacted, followed up, qualified, and
            moved closer to a buying decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Without - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/5356215/pexels-photo-5356215.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Overwhelmed professional managing tasks"
                className="w-full h-full object-cover opacity-10"
                loading="lazy"
              />
            </div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 border border-red-100/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-red-500" />
                </div>
                <h3 className="font-display font-semibold text-lg text-red-600">
                  Without Consistent Follow-Up
                </h3>
              </div>
              <div className="space-y-4">
                {leftItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-red-400" />
                    </div>
                    <div>
                      <div className="font-medium text-surface-dark/80 text-sm">{item.label}</div>
                      <div className="text-xs text-surface-dark/40">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* With - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organized team collaboration"
                className="w-full h-full object-cover opacity-10"
                loading="lazy"
              />
            </div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 border border-emerald-100/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                </div>
                <h3 className="font-display font-semibold text-lg text-emerald-600">
                  With Market Easy
                </h3>
              </div>
              <div className="space-y-4">
                {rightItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-medium text-surface-dark/80 text-sm">{item.label}</div>
                      <div className="text-xs text-surface-dark/40">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center arrow indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex items-center justify-center mt-8"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <span className="text-sm text-red-500 font-medium">Without</span>
            <ArrowRight size={20} className="text-accent" />
            <span className="text-sm text-emerald-600 font-medium">With Market Easy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
