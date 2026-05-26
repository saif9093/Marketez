import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { indiaAdvantages } from '../data/content';
import {
  MessageCircle,
  Wallet,
  Users,
  Clock,
  Settings,
  Globe,
  MapPin,
} from 'lucide-react';

const advantageIcons = [MessageCircle, Wallet, Users, Clock, Settings, Globe];

export default function WhyIndia() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy/3 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Global Reach, India Advantage
          </span>
          <h2 className="section-heading text-balance">
            Global Sales Support Powered By <span className="text-accent">India</span>
          </h2>
          <p className="section-subheading mx-auto">
            India has become a trusted destination for global business support services because of
            its strong talent pool, excellent communication skills, and process-driven approach.
            Our team combines these advantages with a customer-first mindset, helping businesses
            across different markets engage prospects professionally and efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: World map visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="World map with global business connections"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent" />

              {/* India pin */}
              <div className="absolute top-1/2 left-[65%] -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="relative">
                    <MapPin size={32} className="text-accent drop-shadow-lg" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-2 rounded-full bg-accent/20"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Globe size={18} className="text-accent" />
                  </div>
                  <span className="font-display font-bold text-white text-lg">Operations Center</span>
                </div>
                <div className="text-white/50 text-sm">India — Serving clients across 10+ countries</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Advantages + Region card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3 mb-8">
              {indiaAdvantages.map((advantage, index) => {
                const Icon = advantageIcons[index];
                return (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="bg-surface rounded-xl p-4 border border-gray-100 hover:border-navy/10 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center mb-2">
                      <Icon size={18} className="text-navy" />
                    </div>
                    <span className="text-sm font-medium text-surface-dark/80">
                      {advantage.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-navy to-navy-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Globe size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Connecting Markets Worldwide</h3>
                  <p className="text-white/50 text-xs">Round-the-clock engagement for global teams</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                {[
                  { region: 'North America', label: 'USA & Canada' },
                  { region: 'Europe', label: 'UK & EU' },
                  { region: 'APAC', label: 'Asia-Pacific' },
                ].map((item) => (
                  <div key={item.region} className="text-center">
                    <div className="text-xs text-white/40 mb-1">{item.region}</div>
                    <div className="text-sm font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
