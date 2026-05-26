import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/content';

function AnimatedCounter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  const formatNumber = (n: number) => {
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <div ref={ref}>
      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {formatNumber(count)}
      </span>
      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* CRM dashboard background */}
      <div className="absolute inset-0">
        <img
          src="/stats_bg.webp"
          alt=""
          className="w-full h-full object-cover opacity-[0.15]"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-navy-800" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-accent text-sm font-semibold rounded-full mb-4">
            Impact At A Glance
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
            Results That Speak For Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 mt-3 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
