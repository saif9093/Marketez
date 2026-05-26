import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Linkedin, Send, CheckCircle, MapPin } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@marktez.com',
    href: 'mailto:hello@marktez.com',
    isWhatsApp: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 000-0000',
    href: 'tel:+15550000000',
    isWhatsApp: false,
  },
  {
    icon: null,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/15550000000',
    isWhatsApp: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Follow us',
    href: 'https://linkedin.com/company/marketeasy',
    isWhatsApp: false,
  },
];

interface FormData {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  monthlyLeadVolume: string;
  message: string;
}

const initialForm: FormData = {
  fullName: '',
  companyName: '',
  country: '',
  email: '',
  phone: '',
  monthlyLeadVolume: '',
  message: '',
};

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // EmailJS-ready placeholder handler
    // Replace this with actual EmailJS integration:
    // await emailjs.send('service_id', 'template_id', form, 'public_key');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3747070/pexels-photo-3747070.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />

      <div className="container-default relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="section-heading text-balance">
            Let's Make Every <span className="text-accent">Lead Count</span>
          </h2>
          <p className="section-subheading mx-auto">
            If your team is struggling to keep up with follow-ups or spending too much time
            qualifying prospects, we'd love to help. Let's discuss how we can support your sales
            process and turn more of your leads into real opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-navy mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-surface-dark/60">
                  We'll review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-navy mb-1.5">
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={form.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-navy mb-1.5">
                      Country *
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthlyLeadVolume" className="block text-sm font-medium text-navy mb-1.5">
                      Monthly Lead Volume
                    </label>
                    <select
                      id="monthlyLeadVolume"
                      name="monthlyLeadVolume"
                      value={form.monthlyLeadVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-surface/50"
                    >
                      <option value="">Select range</option>
                      <option value="0-100">0 - 100</option>
                      <option value="100-500">100 - 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none bg-surface/50"
                    placeholder="Tell us about your lead management needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary mt-6 w-full sm:w-auto gap-2 disabled:opacity-60 disabled:cursor-not-allowed text-base px-8 py-3.5"
                >
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Schedule a Discovery Call
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  info.isWhatsApp
                    ? 'bg-[#25D366]/10 group-hover:bg-[#25D366]/20'
                    : 'bg-navy/5 group-hover:bg-accent/10'
                }`}>
                  {info.isWhatsApp ? (
                    <WhatsAppIcon size={20} className="text-[#25D366]" />
                  ) : (
                    info.icon && <info.icon size={20} className="text-navy group-hover:text-accent transition-colors" />
                  )}
                </div>
                <div>
                  <div className="text-xs text-surface-dark/40 font-medium uppercase tracking-wider">{info.label}</div>
                  <div className="text-sm font-semibold text-navy">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Location card */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 mt-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-surface-dark/40 font-medium uppercase tracking-wider">Operations</div>
                  <div className="text-sm font-semibold text-navy">India</div>
                </div>
              </div>
              <p className="text-xs text-surface-dark/40 leading-relaxed">
                Serving clients across North America, Europe, and Asia-Pacific from our India operations center.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
