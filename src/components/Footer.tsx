import { Linkedin, ArrowUp, Mail, Phone } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

const contactItems = [
  { icon: Mail, label: 'hello@marktez.com', href: 'mailto:hello@marktez.com', isWhatsApp: false },
  { icon: Phone, label: '+1 (555) 000-0000', href: 'tel:+15550000000', isWhatsApp: false },
  { icon: null, label: 'WhatsApp Us', href: 'https://wa.me/15550000000', isWhatsApp: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white relative overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent-400 to-navy" />

      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-default py-10 md:py-12">
          <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl border border-white/10 px-8 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative text-center md:text-left">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1">
                Ready to stop losing leads?
              </h3>
              <p className="text-white/50 text-sm md:text-base max-w-md">
                Book a free discovery call and see how Marktez can fill your pipeline.
              </p>
            </div>
            <a
              href="#contact"
              className="relative flex-shrink-0 inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-default py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-4 py-2.5 inline-flex items-center justify-center">
                <img
                  src="/1.png"
                  alt="Marktez"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-sm">
              Professional Lead Qualification and Sales Development Partner for businesses
              globally. We engage, nurture, and qualify so your team can focus on closing.
            </p>
            <div className="flex items-center gap-1 bg-accent/15 border border-accent/25 text-accent text-sm font-semibold italic px-4 py-2 rounded-lg inline-flex w-fit">
              "We Make Sure No Lead Gets Left Behind."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-5 text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-5 text-white/40">
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-accent transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-accent/15 flex items-center justify-center flex-shrink-0 transition-colors">
                      {item.isWhatsApp ? (
                        <WhatsAppIcon size={14} className="text-[#25D366] group-hover:text-accent transition-colors" />
                      ) : (
                        item.icon && <item.icon size={14} className="text-white/40 group-hover:text-accent transition-colors" />
                      )}
                    </div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://linkedin.com/company/marketeasy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-accent/15 flex items-center justify-center flex-shrink-0 transition-colors">
                <Linkedin size={14} className="text-white/40 group-hover:text-accent transition-colors" />
              </div>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/25">
            &copy; {new Date().getFullYear()} Market Easy. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={15} className="text-white/40" />
          </a>
        </div>
      </div>
    </footer>
  );
}
