import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { services } from '../data/content';
import { Target, Sprout, Calendar, Database, TrendingUp } from 'lucide-react';

const serviceIcons = [Target, Sprout, Calendar, Database, TrendingUp];

const serviceAccents = [
  'from-blue-500/10 to-blue-600/5',
  'from-emerald-500/10 to-emerald-600/5',
  'from-accent/10 to-accent-600/5',
  'from-violet-500/10 to-violet-600/5',
  'from-navy/10 to-navy-500/5',
];

const iconColors = [
  'text-blue-600 group-hover:text-blue-700',
  'text-emerald-600 group-hover:text-emerald-700',
  'text-accent group-hover:text-accent-600',
  'text-violet-600 group-hover:text-violet-700',
  'text-navy group-hover:text-accent',
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="section-padding bg-surface relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8062287/pexels-photo-8062287.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            How We Help
          </span>
          <h2 className="section-heading text-balance">
            Sales Development Services Built For{' '}
            <span className="text-accent">Revenue Growth</span>
          </h2>
        </motion.div>

        {/* Top 3 services in larger cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent top bar that slides in on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-accent to-accent/60 rounded-t-2xl translate-y-[-4px] group-hover:translate-y-0 transition-transform duration-300" />

                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${serviceAccents[index]} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-surface-dark/30">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${serviceAccents[index]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={iconColors[index]} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-surface-dark/60 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom 2 services in wider cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => {
            const i = index + 3;
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-accent to-accent/60 rounded-t-2xl translate-y-[-4px] group-hover:translate-y-0 transition-transform duration-300" />
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${serviceAccents[i]} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-surface-dark/30">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${serviceAccents[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={iconColors[i]} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-surface-dark/60 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
