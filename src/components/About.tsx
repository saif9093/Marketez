import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Target, Eye, Shield } from 'lucide-react';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 className="section-heading text-balance">
            We're Not Another Call Center.{' '}
            <span className="text-accent">We're Your Sales Development Partner.</span>
          </h2>
          <p className="section-subheading mx-auto">
            We're a lead qualification and sales support partner. Our role is simple: Help
            businesses make better use of the opportunities they've already generated. We work
            behind the scenes as an extension of your sales process—engaging leads, nurturing
            relationships, qualifying prospects, and helping your team focus on closing business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7691694/pexels-photo-7691694.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team working in modern office"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-navy" />
                  <span className="font-display font-semibold text-navy text-sm">Trusted Partner</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                <Target size={24} className="text-navy" />
              </div>
              <h3 className="font-display font-semibold text-xl text-navy mb-3">Our Mission</h3>
              <p className="text-surface-dark/60 leading-relaxed">
                To help businesses maximize every lead opportunity through consistent engagement,
                qualification, and sales support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Eye size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl text-navy mb-3">Our Vision</h3>
              <p className="text-surface-dark/60 leading-relaxed">
                To become the trusted lead qualification partner for businesses across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-navy rounded-2xl p-6 text-center"
            >
              <div className="font-display font-bold text-white text-lg">
                We Nurture. We Qualify. You Close.
              </div>
              <div className="text-white/40 text-sm mt-1 italic">
                "We Make Sure No Lead Gets Left Behind."
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
