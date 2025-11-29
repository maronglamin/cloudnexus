import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full pt-24 pb-14 sm:pt-28 sm:pb-24 overflow-hidden overflow-x-hidden bg-gradient-to-br from-[#1B1F3B] to-[#2C3364]">
      {/* Photo overlay - softened on mobile to keep text readable */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        ></div>
      </div>
      {/* Grid pattern - hidden on small screens to avoid clutter */}
      <div className="absolute inset-0 opacity-10 hidden sm:block pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Subtle bottom fade to ensure smooth transition into the wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.8) 100%)'
        }}
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6 relative z-10 box-border">
        <div className="max-w-none sm:max-w-4xl mx-0 sm:mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            We Build Tech That Powers Progress
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-7 sm:mb-8 max-w-none mx-0 sm:max-w-3xl sm:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            End-to-end digital transformation solutions designed to modernize your business, secure your data, and accelerate your growth in the digital landscape.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a
              href="/#contact"
              onClick={(e) => {
                try {
                  e.preventDefault()
                  if (window.location.hash !== '#contact') {
                    window.location.hash = 'contact'
                  }
                  window.dispatchEvent(new CustomEvent('open-contact-modal'))
                } catch {
                  // Fallback: navigate normally
                  window.location.href = '/#contact'
                }
              }}
              className="px-7 sm:px-8 py-3 bg-[#2F80ED] hover:bg-[#1a6ad2] text-white font-medium rounded-md transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
            <motion.a href="#services" className="px-7 sm:px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </div>
      {/* Subtle layered wave divider for a smooth transition to white */}
      <div className="pointer-events-none absolute -bottom-px left-0 right-0 leading-[0] overflow-hidden">
        <svg
          className="block w-full h-[56px] sm:h-[80px] md:h-[120px]"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C160,80 320,0 480,30 C640,60 800,20 960,40 C1120,60 1280,40 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.6)"
          />
          <path
            d="M0,64 C160,74 320,90 480,80 C640,70 800,46 960,48 C1120,50 1280,66 1440,72 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero


