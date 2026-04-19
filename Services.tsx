import { Link } from 'react-router-dom';
import { Camera, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
];

const majorServices = [
  'Wedding Photography',
  'Baby Monthly Shoot',
  'Pre-Wedding Shoot',
  'Event Coverage',
  'Fashion Portfolio',
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-brand-gold" />
              <span className="font-serif text-2xl font-bold tracking-tighter">
                SENTHIL <span className="text-brand-gold">STUDIO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We specialize in cinematic storytelling through photography. With over 50 years of legacy, we bring your most precious moments to life.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-gold text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold">Major Services</h4>
            <ul className="space-y-3">
              {majorServices.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>123 Photography Lane, Creative District,<br />Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>hello@senthilstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Follow Our Journey</span>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:bg-brand-gold hover:text-brand-black transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Senthil Studio. All Rights Reserved | Designed as Professional Site
          </p>
        </div>
      </div>
    </footer>
  );
}
