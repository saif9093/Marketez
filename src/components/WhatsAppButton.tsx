import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-[72px] right-0 bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-56"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close tooltip"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-2 mb-1.5">
              <WhatsAppIcon size={16} className="text-[#25D366]" />
              <span className="font-display font-semibold text-navy text-sm">Chat with us</span>
            </div>
            <p className="text-xs text-surface-dark/60 leading-snug">
              Need quick answers? We typically reply within minutes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/15550000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20b858] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: 'spring' }}
        whileHover={{ scale: 1.08 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </motion.a>
    </div>
  );
}
