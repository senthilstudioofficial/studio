import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Users, Award, Image as ImageIcon, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1511285560929-86b16002a60b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1502602732142-3e5a74ef6b1f?auto=format&fit=crop&q=80&w=1920',
];

const counters = [
  { label: 'Years Experience', value: 50, icon: Award },
  { label: 'Happy Customers', value: 1000, icon: Users },
  { label: 'Projects Done', value: 500, icon: ImageIcon },
  { label: 'Services', value: 30, icon: Camera },
];

const featuredServices = [
  { title: 'Wedding Photography', icon: '💍', desc: 'Capturing the magic of your big day with cinematic elegance.' },
  { title: 'Baby Shoot', icon: '🍼', desc: 'Preserving the innocence and joy of your little ones.' },
  { title: 'Pre-Wedding', icon: '✨', desc: 'Creative storytelling before you start your journey together.' },
  { title: 'Events', icon: '🎉', desc: 'Professional coverage for all your special celebrations.' },
];

export default function Home({ onBookClick }: { onBookClick: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-black/40 z-10" />
            <img
              src={heroImages[currentSlide]}
              alt="Photography"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm font-bold"
          >
            Senthil Studio Presents
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Capturing Moments <br />
            <span className="italic font-normal">That Last Forever</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button
              onClick={onBookClick}
              className="px-10 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
              Book Now
            </button>
            <Link
              to="/gallery"
              className="px-10 py-4 glass text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all border border-brand-gold"
            >
              View Gallery
            </Link>
          </motion.div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-brand-gold w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 -z-10 blur-3xl rounded-full" />
            <div className="border border-brand-gold p-4 relative">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Studio"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 glass p-6 hidden md:block">
                <p className="font-serif text-3xl font-bold text-brand-gold">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Years Legacy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Welcome to <br />
                <span className="text-brand-gold">Senthil Studio</span>
              </h2>
              <div className="w-20 h-1 bg-brand-gold" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded over five decades ago, Senthil Studio has been at the forefront of visual storytelling. We don't just take photos; we capture emotions, freezing them in time for generations to cherish.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our state-of-the-art studio and expert team specialize in blending traditional aesthetics with modern cinematic techniques, ensuring every frame tells a unique story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest group border-b border-transparent hover:border-brand-gold transition-all pb-2"
            >
              Learn Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="py-20 bg-brand-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {counters.map((counter, idx) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto text-brand-gold mb-4">
                <counter.icon size={28} />
              </div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-white">{counter.value}+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-6xl font-bold">Our Expertise</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Crafting visual masterpieces for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 group hover:border-brand-gold transition-all duration-500 space-y-6 text-center"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block px-12 py-5 border border-brand-gold text-brand-gold font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920')] bg-fixed bg-cover bg-center">
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="text-brand-gold fill-brand-gold" size={20} />
              ))}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold">Ready to Capture Your Storey?</h2>
            <p className="text-xl text-gray-300 font-light">Join 1000+ happy clients who trusted us with their memories.</p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="px-12 py-5 bg-brand-gold text-brand-black font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-white transition-colors"
          >
            Book Your Shoot Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
