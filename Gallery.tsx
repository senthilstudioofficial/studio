import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass p-8 md:p-10 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-3xl font-bold">Book Your Session</h2>
              <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-brand-gold outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-brand-gold outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Event Type</label>
                  <select className="w-full bg-brand-charcoal border border-white/10 p-3 text-sm focus:border-brand-gold outline-none transition-colors appearance-none">
                    <option>Wedding</option>
                    <option>Baby Shoot</option>
                    <option>Pre-Wedding</option>
                    <option>Event Coverage</option>
                    <option>Fashion Shoot</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-brand-gold outline-none transition-colors invert"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Your Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your event..."
                  className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-brand-gold outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
