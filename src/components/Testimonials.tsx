import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const avatarGradients = [
  'from-blue-500 to-navy',
  'from-accent to-accent-600',
  'from-emerald-500 to-teal-600',
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isInView, next]);

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            What Our Clients Say
          </span>
          <h2 className="section-heading text-balance">
            Trusted By Businesses <span className="text-accent">Worldwide</span>
          </h2>
        </motion.div>

        {/* Desktop: all 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col ${
                index === 1
                  ? 'border-accent/30 shadow-2xl shadow-accent/10 scale-[1.03] ring-1 ring-accent/20'
                  : 'border-gray-100 shadow-md hover:shadow-xl hover:border-navy/10'
              }`}
            >
              {/* Featured badge for center card */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                  Featured
                </div>
              )}

              {/* Large decorative quote */}
              <div className="absolute top-5 right-6 opacity-[0.07]">
                <Quote size={72} className="text-navy" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-surface-dark/75 leading-relaxed text-sm flex-1 mb-6 relative z-10">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradients[index]} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="font-display font-bold text-white text-base">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-surface-dark/50">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden max-w-lg mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md relative"
            >
              <div className="absolute top-5 right-6 opacity-[0.07]">
                <Quote size={60} className="text-navy" />
              </div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-surface-dark/75 leading-relaxed text-sm mb-6 relative z-10">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradients[current]} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="font-display font-bold text-white text-base">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-navy text-sm">{testimonials[current].name}</div>
                  <div className="text-xs text-surface-dark/50">{testimonials[current].role}, {testimonials[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-5 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all shadow-sm" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-accent w-7' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all shadow-sm" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
