import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import HowWeWork from './components/HowWeWork';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import WhyIndia from './components/WhyIndia';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <HowWeWork />
        <Services />
        <WhyUs />
        <Industries />
        <WhyIndia />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
