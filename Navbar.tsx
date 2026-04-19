@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  
  --color-brand-gold: #D4AF37;
  --color-brand-black: #0A0A0A;
  --color-brand-charcoal: #1A1A1A;
}

@layer base {
  body {
    @apply bg-brand-black text-white font-sans antialiased;
  }
}

.glass {
  @apply bg-white/5 backdrop-blur-md border border-white/10;
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200;
}
