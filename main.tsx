import { motion } from 'motion/react';
import { Award, Camera, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-24 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-5xl md:text-8xl font-bold leading-tight"
          >
            Legacy in <br />
            <span className="text-brand-gold italic">Every Frame</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light"
          >
            Senthil Studio has been Chennai's premier destination for cinematic photography since 1976.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Our Founder"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-brand-gold shadow-2xl -translate-x-6 translate-y-6 -z-10" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold">The Story of <span className="text-brand-gold">Excellence</span></h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                What started as a small film development booth in 1976 has grown into a state-of-the-art cinematic production house. Senthil Studio was founded on the belief that a photograph is more than an image—it's a time machine.
              </p>
              <p>
                Over more than 50 years, we have continuously evolved, embracing the digital revolution while maintaining the soul of traditional photography. We have captured everything from intimate naming ceremonies to grand royal weddings.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-brand-gold font-bold text-2xl">50+</h4>
                  <p className="text-xs uppercase tracking-widest font-medium">Years of Legacy</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-brand-gold font-bold text-2xl">10k+</h4>
                  <p className="text-xs uppercase tracking-widest font-medium">Stories Captured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Our Mission',
              icon: Award,
              desc: 'To provide world-class visual storytelling that transcends time, ensuring every client feels like a star.',
            },
            {
              title: 'Our Vision',
              icon: Clock,
              desc: 'To remain the most trusted name in photography by blending heritage with cutting-edge technology.',
            },
            {
              title: 'Our Values',
              icon: HeartIcon,
              desc: 'Excellence, Integrity, and Empathy are at the core of every shoot we conduct.',
            },
          ].map((box, idx) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 space-y-6"
            >
              <div className="text-brand-gold"><box.icon size={40} /></div>
              <h3 className="font-serif text-2xl font-bold">{box.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeartIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
