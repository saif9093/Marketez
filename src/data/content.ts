export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Lead Qualification',
    description:
      "Not every lead is ready to buy. We identify the prospects who have genuine interest, fit your ideal customer profile, and are worth your sales team's time.",
    icon: 'target',
  },
  {
    title: 'Lead Nurturing',
    description:
      "Many prospects need multiple touchpoints before they're ready to make a decision. We stay in touch, build engagement, and keep your brand top of mind until they're ready to move forward.",
    icon: 'sprout',
  },
  {
    title: 'Appointment Setting',
    description:
      'Once a prospect is qualified, we coordinate and schedule meetings directly with your sales team.',
    icon: 'calendar',
  },
  {
    title: 'CRM & Lead Management',
    description:
      'Every interaction is tracked and documented so you always know where each lead stands.',
    icon: 'database',
  },
  {
    title: 'Sales Development Support',
    description:
      'We act as a dedicated extension of your sales team, helping maintain a healthy and active sales pipeline.',
    icon: 'trending',
  },
];

export interface Industry {
  title: string;
  icon: string;
}

export const industries: Industry[] = [
  { title: 'SaaS & Technology', icon: 'cpu' },
  { title: 'Education', icon: 'graduation' },
  { title: 'Immigration Services', icon: 'globe' },
  { title: 'Healthcare', icon: 'heart-pulse' },
  { title: 'Financial Services', icon: 'landmark' },
  { title: 'Real Estate', icon: 'building' },
  { title: 'Professional Services', icon: 'briefcase' },
  { title: 'Consulting Firms', icon: 'lightbulb' },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'Leads Managed' },
  { value: 10, suffix: '+', label: 'Countries Supported' },
  { value: 95, suffix: '%', label: 'Follow-Up Compliance' },
  { value: 24, suffix: 'hrs', label: 'Average Lead Response Time' },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Sales',
    company: 'TechFlow Solutions',
    quote:
      'Market Easy transformed our lead pipeline. We were losing leads to slow follow-ups, but now every prospect gets contacted within hours. Our conversion rate increased by 40% in the first quarter.',
  },
  {
    name: 'James Rodriguez',
    role: 'Director of Revenue Operations',
    company: 'GrowthStack Inc.',
    quote:
      'Having Market Easy as an extension of our team has been invaluable. They handle the qualification process so our closers can focus on what they do best — closing deals. The ROI has been exceptional.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Business Development',
    company: 'Meridian Consulting',
    quote:
      'We tried building an inside sales team in-house, but it was expensive and hard to scale. Market Easy gave us the same capability at a fraction of the cost, with better consistency and reporting.',
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Lead Data Received', description: 'You share your lead data with our team through a secure process.' },
  { step: 2, title: 'Initial Outreach', description: 'We reach out to every lead promptly via phone, email, or other channels.' },
  { step: 3, title: 'Lead Nurturing', description: 'Consistent follow-ups build engagement and keep your brand top of mind.' },
  { step: 4, title: 'Lead Qualification', description: 'We assess interest, fit, and readiness to identify sales-ready prospects.' },
  { step: 5, title: 'Appointment Scheduling', description: 'Qualified leads are scheduled for meetings with your sales team.' },
  { step: 6, title: 'Sales Handover', description: 'Your team receives fully qualified leads with context to close the deal.' },
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    title: 'Better Return On Marketing Spend',
    description:
      'Every lead costs money to generate. We help ensure those opportunities don\'t go cold due to missed or delayed follow-ups.',
    icon: 'piggy-bank',
  },
  {
    title: 'More Time For Your Sales Team',
    description:
      'Your sales professionals should spend their time speaking with interested prospects—not chasing people who aren\'t ready yet.',
    icon: 'clock',
  },
  {
    title: 'Consistent Follow-Up',
    description:
      'Most deals aren\'t lost because prospects said no. They\'re lost because nobody followed up. We make sure every lead receives the attention it deserves.',
    icon: 'repeat',
  },
  {
    title: 'Cost-Effective Growth',
    description:
      'Build a reliable lead qualification process without the cost and complexity of hiring and managing a large in-house team.',
    icon: 'scale',
  },
  {
    title: 'A Scalable Extension Of Your Business',
    description:
      "Whether you're handling a few hundred leads a month or several thousand, our process grows with your business.",
    icon: 'maximize',
  },
  {
    title: 'Transparent Reporting',
    description:
      'Stay informed through regular updates, lead status tracking, and performance reports.',
    icon: 'bar-chart',
  },
];

export interface IndiaAdvantage {
  title: string;
  icon: string;
}

export const indiaAdvantages: IndiaAdvantage[] = [
  { title: 'Skilled English-speaking professionals', icon: 'message-circle' },
  { title: 'Cost-effective operations', icon: 'wallet' },
  { title: 'Scalable teams', icon: 'users' },
  { title: 'Extended business coverage', icon: 'clock' },
  { title: 'Process-driven execution', icon: 'settings' },
  { title: 'Global communication standards', icon: 'globe' },
];
