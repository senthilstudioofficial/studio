import { motion } from 'motion/react';
import { Heart, Baby, GraduationCap, Shrub, Camera, Film, Instagram } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Family & Personal Events',
    icon: Heart,
    items: [
      'Wedding (Kalyanam)',
      'Engagement (Nichayathartham)',
      'Reception',
      'Baby Shower (Seemantham / Valaikappu)',
      'Birthday Party',
      'Puberty Function',
      'Anniversary',
    ],
  },
  {
    title: 'Kids & Baby Shoots',
    icon: Baby,
    items: [
      'Newborn Photoshoot',
      'Baby Monthly Shoot',
      'Kids Portrait',
      'School Functions',
    ],
  },
  {
    title: 'Education & Career',
    icon: GraduationCap,
    items: [
      'Graduation Day',
      'College Events',
      'Farewell / Freshers',
      'ID Card Photos',
    ],
  },
  {
    title: 'Religious Functions',
    icon: Shrub,
    items: [
      'Ear Piercing (Kathukuthu)',
      'Naming Ceremony',
      'Housewarming',
    ],
  },
  {
    title: 'Fashion & Creative',
    icon: Camera,
    items: [
      'Pre-Wedding Shoot',
      'Post-Wedding Shoot',
      'Model / Fashion Shoot',
      'Portfolio Shoot',
      'Reel / Instagram Content',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold"
          >
            Our <span className="text-brand-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 uppercase tracking-widest text-sm font-bold"
          >
            Professional solutions for every chapter of your life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 hover:border-brand-gold/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                  <category.icon size={28} />
                </div>
                <h2 className="font-serif text-2xl font-bold">{category.title}</h2>
              </div>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 group-hover/item:scale-150 transition-transform" />
                    <span className="text-sm group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Value Add Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-brand-charcoal border border-white/10 text-center space-y-10"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="font-serif text-3xl font-bold italic text-brand-gold">Why Choose Senthil Studio?</h3>
            <p className="text-gray-400">
              We provide more than just photographs. We provide high-end retouching, cinematic color grading, and custom-designed albums that tell your story perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <Camera className="mx-auto text-brand-gold" size={32} />
              <h4 className="font-bold uppercase tracking-widest text-xs">High-Res Delivery</h4>
              <p className="text-gray-500 text-xs">Uncompressed digital masters</p>
            </div>
            <div className="space-y-3">
              <Film className="mx-auto text-brand-gold" size={32} />
              <h4 className="font-bold uppercase tracking-widest text-xs">Cinematic Motion</h4>
              <p className="text-gray-500 text-xs">Premium event reels and film</p>
            </div>
            <div className="space-y-3">
              <Instagram className="mx-auto text-brand-gold" size={32} />
              <h4 className="font-bold uppercase tracking-widest text-xs">Social Optimized</h4>
              <p className="text-gray-500 text-xs">Content ready for your feed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
